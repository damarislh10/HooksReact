import React from "react";
import { Button } from "react-bootstrap";
import useCounter from "./useCounter";

const Counter = () => {
  const {
    // usar ese estado detructurando usarlo en cualquier componente
    counter,
    handleAdd,
    handleSubstract,
    handleReset,
  } = useCounter(14);

  return (
    <div>
      <h1>Counter:{counter}</h1>

      <Button variant="primary" onClick={handleAdd}>
        Sumar
      </Button>
      <Button variant="warning" onClick={handleSubstract}>
        Restar
      </Button>
      <Button variant="danger" onClick={handleReset}>
        Reseat
      </Button>
    </div>
  );
};

export default Counter;
