import { describe, expect, test } from "vitest";
import { render, screen } from '@testing-library/react'
import { MyAwesomeApp } from "./MyAwesomeApp";

describe('MyAwesomeApp', () => {
  test('Should render firstName And lastName ', () =>{
    const {container} = render(<MyAwesomeApp />);

    const h1 = container.querySelector('h1');
    const h3 = container.querySelector('h3');

    expect(h1?.innerHTML).toContain('Roronoa')
    expect(h3?.innerHTML).toContain('Zoro')

  });
  test('Should render firstName And lastName / screen ', () =>{
    render(<MyAwesomeApp />);
    screen.debug();

    const h1 = screen.getByTestId('first-name-title');
    expect(h1?.innerHTML).toContain('Roronoa');

  });

  test('Should match snapshot', () => {
    const { container } = render(<MyAwesomeApp />);

    expect(container).toMatchSnapshot();
  });
  test('Should match snapshot - screen', () => {
    render(<MyAwesomeApp />);
    expect( screen.getByTestId('div-app')).toMatchSnapshot();

  });
});