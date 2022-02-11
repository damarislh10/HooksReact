import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

const Formulario = () => {
  const [data, setData] = useState({
    nombre: "",
    email: "",
  });

  const { nombre, email } = data;

  const handleInputChange = ({ target }) => {
    console.log(target);
    setData({
      ...data,
      [target.name]: target.value, // cambiar lo que estaba antes con este
    });
  };

  useEffect(() => {
    console.log("el componente monto"); // al moment que se carue componente

    return () => {
      console.log("el componente desmonto"); // se desmonta
    };
  }, [data]); // escuche a nombre y cuando se actualice se escuche se acuatlice
  // si no hay nada se ejecuta una vez

  return (
    <div>
      <h1>Formulario de registro</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            name="email"
            value={email}
            onChange={handleInputChange}
            type="email"
            placeholder="Ingrese su correo"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            name="nombre"
            value={nombre}
            onChange={handleInputChange}
            type="text"
            placeholder="Ingrese su nombre"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Formulario;
