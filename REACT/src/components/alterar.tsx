import React, { useState } from 'react';
import { Tarefa } from '../models/tarefa';

function AlterarTarefas() {
    const [titulo, setTitulo] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');

    function handleSubmit (e: any) {
        e.preventDefault();

        const AlterarTarefas = {
            titulo,
            descricao,
            
            
        };

        fetch('http://localhost:5273/tarefas/alterar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(AlterarTarefas)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            setTitulo('');
            setDescricao('');
         
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    };

    return (
        <div>
            <h2>Alterar Tarefas</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" value={titulo} onChange={e => setTitulo(e.target.value)} required />
                </label>
                <label>
                    Descrição:
                    <input type="text" value={descricao} onChange={e => setDescricao(e.target.value)} required />
                </label>
                
                <button type="submit">Alterar</button>
            </form>
        </div>
    );
};

export default AlterarTarefas;