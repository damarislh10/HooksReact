import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import CategoriasList from "./CategoriasList";
import CategoriesAdd from "./CategoriesAdd";

const CategoriasApp = () => {
  const [categorias, setCategorias] = useState([]);
  const [search, setSearch] = useState("");

  const handleAgregar = () => {
    setCategorias([...categorias, "Risas"]);
  };

  const imgGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${search}&limit=10&api_key=m4sRw48D71DylnYA5WwmcNE6wS4tYVxL`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const imgData = data.map((img) => {
      // modificando data necesitar lo que queramos
      return {
        id: img.id, // recorrer data
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });
    return imgData;
  };

  useEffect(() => {
    imgGif().then((imgData) => setCategorias(imgData)); // array que nos retorna la data
  }, [search]); 

  return (
    <div>
      <h1 className="mt-4 text-center">Componentes con Hooks</h1>
      <CategoriesAdd setSearch={setSearch} />
      <div>
        <CategoriasList categorias={categorias} />
      </div>

    </div>
  );
};

export default CategoriasApp;
