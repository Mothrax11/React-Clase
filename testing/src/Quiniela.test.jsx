import { render, screen, fireEvent } from "@testing-library/react";
import Quiniela from "./Quiniela";

test("debería renderizar Quiniela correctamente", () => {
    const { asFragment } = render(<Quiniela />);
    expect(asFragment()).toMatchSnapshot();
});

test("debería guardar la nueva apuesta", () => {
    render(<Quiniela />);
    const button = screen.getByText(/Nueva Apuesta/i);
    fireEvent.click(button);

    fireEvent.change(screen.getByLabelText(/Fecha/i), { target: { value: "2025-03-10" } });
    fireEvent.change(screen.getByLabelText(/Jornada/i), { target: { value: "1" } });
    fireEvent.change(screen.getByLabelText(/Equipo Local/i), { target: { value: "Equipo A" } });
    fireEvent.change(screen.getByLabelText(/Equipo Visitante/i), { target: { value: "Equipo B" } });
    fireEvent.change(screen.getByLabelText(/Apuesta 1/i), { target: { value: "1" } });

    fireEvent.click(screen.getByText(/Guardar/i));

    expect(screen.getByText("Equipo A VS Equipo B")).toBeInTheDocument();
});
