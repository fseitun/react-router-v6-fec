import React, { useState } from 'react';
import { Routes, Route, useNavigate, useParams, Outlet, Link } from 'react-router-dom';

export function Basico() {
  const [login, setLogin] = useState(false);
  let navigate = useNavigate();

  return (
    <>
      <h1>{login ? 'User Logged In' : "No one's logged in"}</h1>
      {login ? (
        <Routes>
          <Route path='/' element={<LoggedinHeader />}>
            <Route path=':nombreSociedad' element={<Usuarios />} />
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route path='/' element={<LoggedOutHeader />}>
            <Route path='login' element={<Login setLogin={setLogin} navigate={navigate} />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

function LoggedinHeader() {
  return (
    <>
      <h1>soy el componente LoggedinHeader</h1>
      <Outlet />
    </>
  );
}

function Usuarios() {
  const { nombreSociedad } = useParams();
  return (
    <h3>
      soy el componente Usuarios, estás en la sociedad: {nombreSociedad}, cuyo id es{' '}
      {sociedadNametoId(nombreSociedad)}
    </h3>
  );
}

function sociedadNametoId(name) {
  return name === 'FEC' ? 1 : 2;
}

function LoggedOutHeader() {
  return (
    <>
      <h1>soy el componente LoggedOutHeader</h1>
      <Outlet />
      <Link to='login' element={<Login />}>
        to Login page
      </Link>
    </>
  );
}

function Login({ navigate, setLogin }) {
  function loginFunction() {
    setLogin(prev => !prev);
    navigate('/FEC');
  }
  return <button onClick={loginFunction}>login</button>;
}
