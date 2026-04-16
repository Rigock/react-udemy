import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest"
import { CustomPagination } from "./CustomPagination";
import { MemoryRouter } from "react-router";
import type { PropsWithChildren } from "react";

vi.mock('../ui/button', () => ({
  Button: ({children, ...props}: PropsWithChildren) => (
    <button {...props}> {children} </button>
  )
}))

const renderWithRouter = ( component: React.ReactElement, initialEntries?: string[] ) => {
  

  return render(
    <MemoryRouter initialEntries={initialEntries}>
      {component}
    </MemoryRouter>
  )
}

describe('first', () => {

  test('should render component with default values', () => { 
    renderWithRouter(<CustomPagination totalPages={5} />);

    expect(screen.getByText('1')).toBeDefined();
    expect(screen.getByText('2')).toBeDefined();
    expect(screen.getByText('3')).toBeDefined();
    expect(screen.getByText('4')).toBeDefined();
    expect(screen.getByText('5')).toBeDefined();
  });

  test('should disabled previous button when page is 1', () => { 
    renderWithRouter(<CustomPagination totalPages={5} />);
    const previousButton = screen.getByText('Anterior');
    // screen.debug(previousButton);
    expect(previousButton.getAttributeNames()).toContain('disabled');
  });

  test('should disabled next button when last page', () => { 
    renderWithRouter(<CustomPagination totalPages={5} />, ['/?page=5']);
    const nextButton = screen.getByText('Siguiente');
    expect(nextButton.getAttributeNames()).toContain('disabled');
  });

  test('should disabled current button page when we are in current page', () => {
    renderWithRouter(<CustomPagination totalPages={5} />, ['/?page=3']);
    const currentButton = screen.getByText('3');
    expect(currentButton.getAttribute('variant')).toBe('default');
  });
  
  test('should change page when click on number button', () => {  
    renderWithRouter(<CustomPagination totalPages={5} />, ['/?page=3']);
    const prevButton = screen.getByText('2');
    const currentButton = screen.getByText('3');
    expect(prevButton.getAttribute('variant')).toBe('outline');
    expect(currentButton.getAttribute('variant')).toBe('default');

    fireEvent.click(prevButton);
    expect(prevButton.getAttribute('variant')).toBe('default');
    expect(currentButton.getAttribute('variant')).toBe('outline');

  });

});