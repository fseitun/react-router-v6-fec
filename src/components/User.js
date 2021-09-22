import React from "react";
import { useParams, useNavigate } from "react-router";

export default function User() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleCLick = () => {
    // Navegacion programatica
    navigate("/about");
  };

  return (
    <>
      <div>{`Este es el usuario ${id}`}</div>
      {id === "1" && <button onClick={() => handleCLick()}>Ir al About</button>}
    </>
  );
}
