import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { CustomHeader } from "./CustomHeader";


describe('CustomHeader', () => {
  const title = 'Test title';

  test('should render the title correctly', () => {
    render(<CustomHeader title={title} />);
    
    const h1 = screen.getByTestId('title-custom-header');
    expect(h1.innerHTML).toContain('Test');
  });

  test('should render the description when provided', () => {
    const description = 'Test description';

    render(<CustomHeader title={title} description={description} />);
    const p = screen.getByTestId('description-custom-header');

    expect(p.innerHTML).toContain('description');
    expect(screen.getByText(description)).toBeDefined();
    expect(screen.getByRole('paragraph')).toBeDefined();
    // expect(screen.getByRole('paragraph').innerHTML).toBe(description);

  });

  test('should render the description when not provided', () => {
    const { container } = render(<CustomHeader title={title}  />);
    const divElement = container.querySelector('.content-center');
    const p = divElement?.querySelector('p');
    
    expect(p?.innerHTML).not.toBeDefined();
    expect(p).toBeNull();
  });
});