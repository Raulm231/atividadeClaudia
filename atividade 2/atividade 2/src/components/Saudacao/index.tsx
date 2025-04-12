import { useState } from 'react';
import styles from './Saudacao.module.css';

export default function Saudacao({ nomeInicial = "Visitante" }) {
  const [nome, setNome] = useState(nomeInicial);
  const [novoNome, setNovoNome] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (novoNome.trim()) {
      setNome(novoNome);
      setNovoNome('');
    }
  };

  return (
    <div className={styles.saudacaoContainer}>
      <p>Olá, <span className={styles.nome}>{nome}</span>!</p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={novoNome}
          onChange={(e) => setNovoNome(e.target.value)}
          placeholder="Digite um novo nome"
          className={styles.input}
        />
        <button type="submit" className={styles.botao}>Atualizar</button>
      </form>
    </div>
  );
}