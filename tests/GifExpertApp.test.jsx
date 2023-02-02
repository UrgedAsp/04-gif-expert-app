const { render, screen, fireEvent } = require("@testing-library/react");
const { GifExpertApp } = require("../src/GifExpertApp");

describe("Pruebas en GifExpertApp", () => {
  test("Debe de agregar una categoria cuando envio un input nuevo", () => {
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: 'Nuevo Gif' } });
    fireEvent.submit(form);
    expect(screen.getByText('Nuevo Gif')).toBeTruthy();
  });
  test("Si la categoria ya esta no debera de agregarse", ()=>{
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: 'Demon Slayer' } });
    fireEvent.submit(form);
    expect(screen.getAllByText('Demon Slayer').length).toBe(1);
  })
});
