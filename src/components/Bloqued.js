import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import { useParams, useNavigate } from "react-router";

export function Bloqued() {
  return (
    <>
      <div>Bloqueados</div>
      <Outlet />
    </>
  );
}

export function BloquedUser() {
  const { name } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.keys());

  return (
    <>
      <div>{`El usuario bloqueado es ${name} ${searchParams}`}</div>
    </>
  );
}
