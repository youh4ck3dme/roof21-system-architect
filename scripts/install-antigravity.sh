#!/usr/bin/env bash
set -euo pipefail

# install-antigravity.sh
# Safe installer that detects deb/rpm based systems and runs the vendor steps.
# Usage: sudo ./install-antigravity.sh [--yes|-y] [--dry-run]

PROG_NAME=$(basename "$0")
ASSUME_YES=0
DRY_RUN=0

while [[ $# -gt 0 ]]; do
  case "$1" in
    -y|--yes) ASSUME_YES=1; shift ;;
    --dry-run) DRY_RUN=1; shift ;;
    -h|--help)
      cat <<EOF
Usage: sudo $PROG_NAME [--yes|-y] [--dry-run]

Options:
  --yes, -y    : run non-interactively (answers yes to prompts)
  --dry-run    : print actions but do not execute
  -h, --help    : show help

This script will add the Antigravity repository and key and attempt to install the
"antigravity" package for deb (apt) and rpm (dnf/yum) based distributions.

It requires sudo/root for repository and package installation steps.
EOF
      exit 0
      ;;
    *) echo "Unknown argument: $1" >&2; exit 2 ;;
  esac
done

run_cmd() {
  if [[ $DRY_RUN -eq 1 ]]; then
    echo "DRY RUN: $*"
  else
    echo "+ $*"
    eval "$@"
  fi
}

confirm() {
  if [[ $ASSUME_YES -eq 1 ]]; then
    return 0
  fi
  read -r -p "$1 [y/N]: " ans
  case "$ans" in
    [Yy]|[Yy][Ee][Ss]) return 0 ;;
    *) return 1 ;;
  esac
}

if [[ $(id -u) -ne 0 ]]; then
  echo "Warning: It's recommended to run this script with sudo/root for install steps."
  echo "You can re-run it with: sudo $PROG_NAME"
fi

# Detect package manager
if command -v apt >/dev/null 2>&1; then
  PKG_TYPE=deb
elif command -v dnf >/dev/null 2>&1; then
  PKG_TYPE=rpm-dnf
elif command -v yum >/dev/null 2>&1; then
  PKG_TYPE=rpm-yum
else
  echo "Unsupported system: neither apt, dnf nor yum found." >&2
  exit 3
fi

echo "Detected package type: $PKG_TYPE"

if [[ "$PKG_TYPE" == "deb" ]]; then
  KEY_DIR=/etc/apt/keyrings
  KEY_FILE="$KEY_DIR/antigravity-repo-key.gpg"
  SOURCES_FILE=/etc/apt/sources.list.d/antigravity.list
  REPO_LINE='deb [signed-by=/etc/apt/keyrings/antigravity-repo-key.gpg] https://us-central1-apt.pkg.dev/projects/antigravity-auto-updater-dev/ antigravity-debian main'

  echo "Planned actions for deb-based system:"
  echo " - create $KEY_DIR"
  echo " - download repo signing key to $KEY_FILE"
  echo " - add $SOURCES_FILE with repository url"
  echo " - apt update and apt install antigravity"

  if ! confirm "Proceed with deb-based installation?"; then
    echo "Aborted by user."; exit 0
  fi

  run_cmd "sudo mkdir -p '$KEY_DIR'"
  run_cmd "sudo curl -fsSL https://us-central1-apt.pkg.dev/doc/repo-signing-key.gpg | sudo gpg --dearmor -o '$KEY_FILE'"
  run_cmd "echo \"$REPO_LINE\" | sudo tee '$SOURCES_FILE' > /dev/null"
  run_cmd "sudo apt update"
  run_cmd "sudo apt install -y antigravity"

  echo "Deb-based installation finished."
  echo "Verify with: which antigravity || dpkg -s antigravity"

elif [[ "$PKG_TYPE" == rpm-dnf || "$PKG_TYPE" == rpm-yum ]]; then
  REPO_FILE=/etc/yum.repos.d/antigravity.repo
  echo "Planned actions for rpm-based system:"
  echo " - create $REPO_FILE with repository pointing to Antigravity"
  echo " - run dnf/yum makecache and install antigravity"

  if ! confirm "Proceed with rpm-based installation?"; then
    echo "Aborted by user."; exit 0
  fi

  cat > /tmp/antigravity.repo <<'REPO'
[antigravity-rpm]
name=Antigravity RPM Repository
baseurl=https://us-central1-yum.pkg.dev/projects/antigravity-auto-updater-dev/antigravity-rpm
enabled=1
gpgcheck=0
REPO

  run_cmd "sudo tee '$REPO_FILE' < /tmp/antigravity.repo > /dev/null"

  if [[ "$PKG_TYPE" == rpm-dnf ]]; then
    run_cmd "sudo dnf makecache"
    run_cmd "sudo dnf install -y antigravity"
  else
    run_cmd "sudo yum makecache"
    run_cmd "sudo yum install -y antigravity"
  fi

  rm -f /tmp/antigravity.repo
  echo "RPM-based installation finished."
  echo "Verify with: rpm -qi antigravity"
fi

# Final notes
cat <<EOF
Done.
If you ran this script non-interactively with --yes, verify the repository and package:
 - Debian: ls -l /etc/apt/keyrings/antigravity-repo-key.gpg; dpkg -s antigravity
 - RPM: rpm -qi antigravity; cat /etc/yum.repos.d/antigravity.repo

To remove:
 - Debian: sudo apt remove --purge antigravity; sudo rm /etc/apt/sources.list.d/antigravity.list; sudo rm /etc/apt/keyrings/antigravity-repo-key.gpg; sudo apt update
 - RPM: sudo dnf remove antigravity; sudo rm /etc/yum.repos.d/antigravity.repo
EOF
