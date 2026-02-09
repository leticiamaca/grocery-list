// rafce - atalho que cria a estrutra do component

import React from "react";

const GroceryItem = ({ itemLista, listaMercado, setListaMercado }) => {
  const removerItem = () => {
    //Copiando a nova lista, porque a lista mercado é um estado do react e estados não podem ser alterado direto
    const novaLista = [...listaMercado];

    //Para cada item da lista, verifica se ele NÃO é o item clicado, se não for ele fica na lista.
    const novaListaFiltrada = novaLista.filter(
      (itemAtual) => itemAtual !== itemLista
    );

    //atualizando o estado da lista mercado
    setListaMercado(novaListaFiltrada);
  };

  return (
    <>
      <li className="flex items-center gap-5 m-5 justify-between text-center">
        <p>{itemLista}</p>{" "}
        <button
          onClick={() => removerItem()}
          className="bg-black text-white p-2 rounded"
        >
          Remover Item
        </button>
      </li>
    </>
  );
};

export default GroceryItem;
