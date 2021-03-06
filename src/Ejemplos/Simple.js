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
          <Route path='prueba' element={<Prueba />}>
            <Route path=':id' element={<Landing />} />
          </Route>
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
  //El useLocation nos devuelve un objeto con las claves: pathname, search, hash, state y key.
  //ej de ruta: localhost:3000/rodri/ul?name=rodri&age=2

  //pathname: nos devuelve /rodri/ul

  //search: nos devuelve los parametros de busqueda que tenga la url, ej: ?name=rodri&age=2
  //Si queremos tomar los valores de ese parametros podemos hacer:
  const name = new URLSearchParams(a.search).get('name')
  const age = new URLSearchParams(a.search).get('age')

  console.log(a)
  return (
    <>
      <ul>
        {Object.entries(a).map(e => (
          <li key={e[0]}>{`${e[0]}: ${e[1]}`}</li>
        ))}
      </ul>
      <h4>{name} - {age}</h4>
    </>
  );
}

var Prueba = () => {
  let match = useMatch(':auto/prueba/:id');
  let location = useLocation()
  let params = useParams()
  console.log(params);
  console.log(location);
  console.log(match.params);
  return (
    <>
      {match ? `hola ${match.params.id}` : `no-match ${match.params.id}`}
      <Outlet />
    </>
  );
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
