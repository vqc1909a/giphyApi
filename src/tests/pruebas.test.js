import 'intersection-observer';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

//!Ese container es como el dom  o sea el document.querySelectorTal

//!El screen directamente tiene todas las funcionalidades que tiene el render, o sea ya no igualarias  a un valor para obtener esos metodos (DOM)
test('home work as expected', async () => {
 render(<App></App>);

 const gifs = await screen.findAllByTestId("gif");
 expect(gifs).toHaveLength(10);
});

test("search form could be used", async () => {
 render(<App></App>);

 const input = await screen.findByRole("textbox");
 const button = await screen.findByRole("button");
 
 fireEvent.change(input,  {target: {value: "zorra"} });
 fireEvent.click(button);

 const title = await screen.findByText("zorra");
 expect(title).toBeInTheDocument();
})
