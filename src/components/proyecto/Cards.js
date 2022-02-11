import React from "react";

const Cards = ({ categoria }) => {
  /* <h1>{JSON.stringify(categoria)}</h1> */
  console.log(categoria);
  return (
    <div>
      <h3>{categoria.title}</h3>
      <img src={categoria.url} alt="imagen" />
    </div>
  );
};

export default Cards;
