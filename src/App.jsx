import { useState, useRef } from "react";
import ItemLista from "./assets/GroceryItem";



function App() {

// UseState é um Hook do react no qual é uma variável de estado que guarda um valor que pode mudar, e se esse valor mudar renderiza de novo na tela.
const [listaMercado, setListaMercado] = useState([]);



  //Usando um outro hook, useRef que cria uma referência dentro de uma variável, nesse caso seria usado para fazer a referência a esse único input, se caso na página houvessem mais inputs não iria dar conflito.
  const inputAdicionar = useRef();

  const adicionarElemento = () => {

    //Utilizando o spread para criar uma nova lista igual, pois a nossa list (Lista Mercado) é um estado do react e estado não devem ser alterados diretamente.
    const novaLista = [...listaMercado];
    const valorInput = inputAdicionar.current.value;

    //Verificação se o inputs foram preenchidos, para não adicionar items "invisiveis"
    if (valorInput !== "") {
      novaLista.push(valorInput);
      //zerando o input
      inputAdicionar.current.value = "";
      console.log(novaLista);
      setListaMercado(novaLista);
    } else {
      alert("Adicione um item a lista");
      return;
    }
  };

  return (
    <>
      <div className="flex flex-column justify-center items-center min-h-screen">
        <div>
          <h1 className="font-bold uppercase text-3xl text-center">
            Lista Mercado
          </h1>

          <input
          //aqui colocamos a referência depois de importar o useRef
            ref={inputAdicionar}
            type="text"
            placeholder="Item name"
            className="m-2 border border-black rounded p-1"
          />
          <button
            onClick={() => adicionarElemento()}
            className="bg-black text-white p-2 rounded "
          >
            Adicionar
          </button>
          {listaMercado.length > 0 ? (
            <ul>
              {listaMercado.map((itemLista, index) => (
                <ItemLista

                //index para o react idenfificar cada item (o react precisa que cada elemento tenha uma chave diferente, e geralmente pode se usar o index)
                  key={index}

                  //props são propriedades que eu posso passar, o que cada prop é? É o valor de cada item da lista
                  itemLista={itemLista}

                  listaMercado={listaMercado}
                  
                  //função que atualiza o estado da lista
                  setListaMercado={setListaMercado}

                  //Porque colocar o setListaMercado aqui? Porque o componente ItemLista precisa remover ou alterar um item mas o estado está no componente pai.
                />
              ))}
            </ul>
          ) : (
            <p className="text-center">Você não tem nenhum item na sua lista</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
