import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Contador from './components/Contador';
import Saudacao from './components/Saudacao';
import ListaTarefas from './components/ListaTarefas';
import ToggleVisibilidade from './components/ToggleVisibilidade';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <img src={reactLogo} alt="Logo" className="navbar-logo" />
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#exercises">Exercícios</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="exercises" className="exercises-section">
        <h2>Exercícios React</h2>

        <div className="exercise">
          <h3>1. Contador Simples</h3>
          <Contador inicial={5} />
        </div>

        <div className="exercise">
          <h3>2. Saudação Personalizada</h3>
          <Saudacao nomeInicial="Visitante" />
        </div>

        <div className="exercise">
          <h3>3. Lista de Tarefas</h3>
          <ListaTarefas tarefasIniciais={['Comprar pão', 'Estudar React']} />
        </div>

        <div className="exercise">
          <h3>4. Controle de Visibilidade</h3>
          <ToggleVisibilidade 
            texto="Este é um texto secreto que pode ser mostrado ou ocultado!" 
          />
        </div>
      </section>

      <section id="contact">
        <h2>Contact Form</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* ... (mantido igual ao original) ... */}
        </form>
      </section>
    </div>
  );
}

export default App;