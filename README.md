# Roof21 System Architect

An interactive system architecture dashboard for the Roof21 real estate ecosystem. This application visualizes the integration between **Bitrix24 (CRM)**, **WordPress (Frontends)**, and **External Property Portals**.

## 🚀 Features

*   **Architecture Masterplan**: Visual diagram of data flow between CRM, Web, and Portals.
*   **CRM Data Model**: Interactive reference for Bitrix24 Smart Processes, Entities, and Fields.
*   **Sales Pipelines**: Visual Kanban boards for International vs. Local Thai workflows with automation triggers.
*   **UX Specification**: Responsive header mockup with mobile behavior simulation.
*   **Technical Specs**: Design for the `roof21-connector` WordPress plugin and XML Export Engine.
*   **Customer Journey**: Dual persona mapping (Slovak Investor vs. International Buyer).
*   **Compliance**: GDPR & PDPA data protection strategies.
*   **AI Architect**: Built-in Gemini AI chat to answer questions about the implementation details.

## 🛠 Tech Stack

*   **Frontend**: React 18, TypeScript
*   **Styling**: Tailwind CSS
*   **Icons**: Lucide React
*   **Charts**: Recharts
*   **AI**: Google Gemini API (`@google/genai`)
*   **Deployment**: Vercel

## 📦 Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-org/roof21-architect.git
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Set up Environment Variables:
    Create a `.env` file in the root and add your Gemini API Key:
    ```env
    API_KEY=your_google_gemini_api_key
    ```
4.  Run the development server:
    ```bash
    npm start
    ```

## 🌐 Deployment

This project is configured for **1-click deployment** on Vercel.

1.  Push code to GitHub.
2.  Import project into Vercel.
3.  Add the `API_KEY` environment variable in Vercel settings.
4.  Deploy.

## 📂 Project Structure

*   `components/`: UI Views for each architectural section (Pipeline, Architecture, CRM, etc.).
*   `services/`: Gemini AI integration.
*   `constants.ts`: Static data definitions (Pipeline stages, CRM fields).
*   `types.ts`: TypeScript interfaces.

---
*Designed for Roof21 Real Estate Implementation.*