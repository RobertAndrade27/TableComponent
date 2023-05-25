import React from "react";
import Tabela from "./table";

const data = [
  {
    id: 1,
    status: "A",
    nome: "Robert A.",
    detalhes: [
      {
        observação: "texto3213"
      },
      {
        observação: "texto22"
      }
    ]
  },
  {
    id: 2,
    status: "A",
    nome: "Bruce H.",
    detalhes: [
      {
        observação: "texto1"
      },
      {
        observação: "texto22"
      }
    ]
  }
];

const columns = [
  { title: "ID", field: "id" },
  { title: "Nome", field: "nome" },
  { title: "Status", field: "status" }
];

const subItens = [
  {
    render: (id) => <div>Subitem 1 do ID {id}</div>
  },
  {
    render: (id) => <div>Subitem 2 do ID {id}</div>
  }
];

const App = () => {
  return (
    <div>
      <h1>Tabela de Dados</h1>
      <Tabela columns={columns} subItens={subItens} data={data} />
    </div>
  );
};

export default App;
