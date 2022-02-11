import React, { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";

const CategoriesAdd = ({ setSearch }) => {
  const [palabra, setPalabra] = useState("");
  const searchref = useRef();

  const handleInputChange = (e) => {
    setPalabra(e.target.value); // cada vez escriba se acualiza estado
  };

  useEffect(() => {
    searchref.current.focus();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(palabra); // setSearch cambia por palabra
  };
  /**formulario input cualquier texto y se hace la busqueda en la peticion */
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group ref={searchref} className="m-auto"  style={{ width: "15rem" }}  controlId="formBasicEmail">
          <Form.Label>Realiza una busqueda</Form.Label>
          <Form.Control
            name="palabra"
            value={palabra}
            onChange={handleInputChange}
            type="text"
            placeholder="Busqueda"
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default CategoriesAdd;
