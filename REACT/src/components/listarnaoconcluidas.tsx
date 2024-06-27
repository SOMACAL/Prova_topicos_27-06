import React, { useEffect, useState } from 'react';
import { Tarefa } from "../../../models/tarefa";
function naoconcluidas() {
const ListaTarefa: React.FC = () => {
    const [tarefas, setTarefa] = useState<[]>([]);

    useEffect(() => {
        fetch('http://localhost:5273/tarefas/naoconcluidas') 
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na requisição: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                setTarefa(data);
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    }, []);

    return (
        <div>
            <h1>Lista Tarefa nao concluidas</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>titulo</th>
                        <th>Descrição</th>
                        <th>categoriaId</th>
                    </tr>
                </thead>
                <tbody>
                    {tarefas.map(tarefa => (
                        <tr>
                            <td>{tarefa.titulo}</td>
                            <td>{tarefa.descricao}</td>
                            <td>{tarefa.categoriaid}</td>
                            </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
}
export default naoconcluidas;