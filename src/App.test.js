import 'intersection-observer';
import { render } from '@testing-library/react';
import App from './App';

//! Sincrono
// test('renders learn react link', () => {
//   const {getByText} = render(<App />);
//   const title = getByText(/Ultima Búsqueda/i);
//   expect(title).toBeInTheDocument();
// });

//!Asincrono (Rutas asincronas)

test('renders learn react link', async () => {
  const {findByText} = render(<App />);
  const title = await findByText(/Ultima Búsqueda/i);
  expect(title).toBeInTheDocument();
});
