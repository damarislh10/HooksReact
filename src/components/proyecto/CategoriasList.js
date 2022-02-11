import React from "react";
import Cards from "./Cards";

const CategoriasList = ({ categorias }) => {
  console.log(categorias);
  return (
    <div>
      {categorias.map((cate, index) => (
        <li key={index}>
          <Cards categoria={cate} />
        </li>
      ))}
    </div>
  );
};

/* <Cards/> estaba pintando un elemento que no se ha llamado*/
export default CategoriasList;
