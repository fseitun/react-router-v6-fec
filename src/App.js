import { BrowserRouter } from 'react-router-dom';
import * as Caso from './Ejemplos/Index';

export const App = () => (
  <BrowserRouter>
    <Caso.Simple />
  </BrowserRouter>
);
