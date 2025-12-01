import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/test-utils';
import { Button } from '@/ui/components';

describe('Button Component', () => {
  it('renders button with text', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it('renders with primary variant by default', () => {
    render(<Button>Primary</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-blue-600');
  });

  it('renders with different variants', () => {
    render(
      <>
        <Button variant="danger">Danger</Button>
        <Button variant="secondary">Secondary</Button>
      </>
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveClass('bg-red-600');
    expect(buttons[1]).toHaveClass('bg-gray-200');
  });

  it('renders with different sizes', () => {
    render(
      <>
        <Button size="sm">Small</Button>
        <Button size="lg">Large</Button>
      </>
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveClass('px-3', 'py-1', 'text-sm');
    expect(buttons[1]).toHaveClass('px-6', 'py-3', 'text-lg');
  });

  it('calls onClick handler when clicked', () => {
    let clicked = false;
    const handleClick = () => {
      clicked = true;
    };
    render(<Button onClick={handleClick}>Click</Button>);
    const button = screen.getByRole('button');
    button.click();
    expect(clicked).toBe(true);
  });

  it('can be disabled', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
});
