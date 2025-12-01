import React, { ReactNode } from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: (error: Error, reset: () => void) => ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error Boundary component - catches errors in child components and displays fallback UI
 * Usage: Wrap components that might throw errors
 */
export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  resetError = (): void => {
    this.setState({ hasError: false, error: null });
  };

  render(): ReactNode {
    if (this.state.hasError && this.state.error) {
      return (
        this.props.fallback?.(this.state.error, this.resetError) || (
          <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-50 to-orange-50 p-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md text-center">
              <AlertTriangle className="mx-auto mb-4 text-red-500" size={48} />
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Something Went Wrong</h1>
              <p className="text-gray-600 mb-4">
                An unexpected error occurred. Please try refreshing the page or contact support.
              </p>
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
                  Error Details
                </summary>
                <pre className="mt-2 bg-gray-100 p-3 rounded text-xs overflow-auto max-h-32 text-red-600">
                  {this.state.error?.toString()}
                </pre>
              </details>
              <button
                onClick={this.resetError}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                <RotateCcw size={18} />
                Try Again
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
