import React, { useState } from 'react';
import { Tarefa } from '../models/tarefa';

function CadastroTarefas() {
    const [titulo, setTitulo] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');

    function handleSubmit (e: any) {
        e.preventDefault();

        const CadastroTarefas = {
            titulo,
            descricao,
            
            
        };

        fetch('http://localhost:5273/tarefas/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(CadastroTarefas)
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
            <h2>Cadastrar Nova Tarefa</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" value={titulo} onChange={e => setTitulo(e.target.value)} required />
                </label>
                <label>
                    Descrição:
                    <input type="text" value={descricao} onChange={e => setDescricao(e.target.value)} required />
                </label>
                
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastroTarefas;