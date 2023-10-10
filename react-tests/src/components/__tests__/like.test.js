import Like from '../like';
import { render, screen, fireEvent } from "@testing-library/react"
// 1) Que por defecto, el componente muestra en el párrafo el valor "Likes: 0".
test("VAlor por defecto de likes es 0", () => {
    render(<Like />);
    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
})

// 2) Que cuando se hace clic en el botón Like, el número de likes se incremente en uno.
test("Incrementar likes al clickear el boton", () => {
    render(<Like />);
    fireEvent.click(screen.getByText("Like"));
    expect(screen.getByText("Likes: 1")).toBeInTheDocument();
})

// 3) Que cuando se hace clic en el botón Dislike el número de likes se decrementa en uno.
test("Decrementar likes al clickear el boton", () => {
    render(<Like />);
    fireEvent.click(screen.getByText("Dislike"));
    expect(screen.getByText("Likes: -1")).toBeInTheDocument();
})