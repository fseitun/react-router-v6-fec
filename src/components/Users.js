import React from "react";
import { Outlet } from "react-router-dom";

export default function Users() {
  return (
    <>
      <h1>Users</h1>
      <Outlet />
    </>
  );
}
