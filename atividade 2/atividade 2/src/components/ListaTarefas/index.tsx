import { useState } from 'react';
import './ListaTarefas.css';

export default function ListaTarefas({ tarefasIniciais = [] }) {
  const [tarefas, setTarefas] = useState(tarefasIniciais);
  const [novaTarefa, setNovaTarefa] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (novaTarefa.trim()) {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa('');
    }
  };

  return (
    <div className="lista-tarefas">
      <form onSubmit={handleSubmit} className="form-tarefa">
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Nova tarefa"
          className="input-tarefa"
        />
        <button type="submit" className="botao-adicionar">Adicionar</button>
      </form>
      <ul className="lista">
        {tarefas.map((tarefa, index) => (
          <li key={index} className="item-tarefa">{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}