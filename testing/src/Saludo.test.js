import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Saludo from './Saludo';

test('Muestra el saludo correcto', () => {
  render(<Saludo nombre="Mundo!"/>);
  const saludoElement = screen.getByText('Hola, Mundo!');
  expect(saludoElement).toBeInTheDocument();
});
