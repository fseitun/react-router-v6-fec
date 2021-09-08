import React from 'react';
import {
  Routes,
  Route,
  useLocation,
  useParams,
  Outlet,
  Link,
  useMatch,
  useNavigate,
} from 'react-router-dom';

export function Simple() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path=':sociedad' element={<Sociedad />}>
          <Route path='prueba' element={<Prueba />} />
          <Route path='/' element={<Home />} />
          <Route path='hola' element={<Hola />} />
          <Route path='navigate' element={<Nav />} />
          <Route path='ul' element={<UseLocation />} />
        </Route>
      </Routes>
    </>
  );
}

var Landing = () => <>Elegí cualquier empresa y tipeala en la URL</>;

var Home = () => {
  let { sociedad } = useParams();
  return <h3>Home de: {sociedad}</h3>;
};

var Sociedad = () => {
  let { sociedad } = useParams();
  return (
    <>
      <Link to={`/${sociedad}`}>home</Link> | <Link to={`/${sociedad}/hola`}>hola</Link> |{' '}
      <Link to={`/${sociedad}/ul`}>useLocation</Link> |{' '}
      <Link to={`/${sociedad}/navigate`}>navigate</Link>
      <h4>Info de la empresa: {sociedad}</h4>
      <Outlet />
    </>
  );
};

var Hola = () => 'hola!';

function UseLocation() {
  let a = useLocation();
  return (
    <>
      <ul>
        {Object.entries(a).map(e => (
          <li key={e[0]}>{`${e[0]}: ${e[1]}`}</li>
        ))}
      </ul>
    </>
  );
}

var Prueba = () => {
  let match = useMatch('5*');
  console.log(match);
  return `hola`;
};

var Nav = () => {
  return (
    <>
      <h1>Soy el primer componente anidado</h1>
      <SegundoAnidado />
    </>
  );
};

var SegundoAnidado = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate('/')}>onClick volver a home</button>;
};
