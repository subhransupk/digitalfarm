'use client';

import React from 'react';
import { Button } from '@nextui-org/button';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <div className="min-h-[400px] flex flex-col items-center justify-center p-8 text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Something went wrong</h2>
          <p className="text-neutral-600 mb-6">We&apos;re sorry for the inconvenience. Please try again later.</p>
          <Button
            onClick={() => this.setState({ hasError: false })}
            className="bg-brand-500 text-white hover:bg-brand-600"
          >
            Try Again
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
} 