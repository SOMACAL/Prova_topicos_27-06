import React from "react";
import ListaTarefa from "./components/pages/tarefas/listar";
import CadastroTarefas from "./components/pages/tarefas/cadastrar";
import concluidas from "./components/pages/tarefas/listarconcluidas";
import naoconcluidas from "./components/pages/tarefas/listarnaoconcluidas";
import alterar from "./components/pages/tarefas/alterar";



function App() {
  return (
    <div>
      <ListaTarefa></ListaTarefa>
      <CadastroTarefas></CadastroTarefas>
      <concluidas></concluidas>
      <naoconcluidas></naoconcluidas>
      <alterar></alterar>


    </div>
  );
}

export default App;