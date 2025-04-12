import { useState } from 'react';
import styles from './ToggleVisibilidade.module.css';

export default function ToggleVisibilidade({ texto = "Texto padrão" }) {
  const [visivel, setVisivel] = useState(false);

  return (
    <div className={styles.container}>
      <button 
        onClick={() => setVisivel(!visivel)} 
        className={styles.botao}
      >
        {visivel ? 'Ocultar' : 'Mostrar'}
      </button>
      {visivel && <p className={styles.conteudo}>{texto}</p>}
    </div>
  );
}