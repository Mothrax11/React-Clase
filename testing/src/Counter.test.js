import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';


test('Simula un contador que incrementa con un boton', () => {
    render(<Counter></Counter>);
    const boton = screen.getByText(/incrementar/i);
    const counterText = screen.getByText(/Contador: 0/i);
    fireEvent.click(boton)
    expect(screen.getByText(/Contador: 1/i)).toBeInTheDocument();
});

test('Verifica que cuando se renderiza el componente, el contador empieza en 0', () => {
    render(<Counter></Counter>);
    const counterText = screen.getByText(/Contador: 0/i);
    expect(screen.getByText(/Contador: 0/i)).toBeInTheDocument();
});

test('Verifica que el contador nunca decrementará', () => {
    render(<Counter></Counter>);
    const button = screen.getByText(/incrementar/i);

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    const countText = screen.getByText(/contador: 3/i);

    fireEvent.click(button);

    expect(countText).not.toHaveTextContent(/contador: 2/i);
});

