import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  // Estado para o formulário de contato
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
      {/* Navbar */}
      <nav className="navbar">
        <img src={reactLogo} alt="Logo" className="navbar-logo" />
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#exercises">Exercícios</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Seção de Exercícios */}
      <section id="exercises" className="exercises-section">
        <h2>Exercícios React</h2>

        {/* Exercício 1: Contador Simples */}
        <div className="exercise">
          <h3>1. Contador Simples</h3>
          <Contador inicial={5} />
        </div>

        {/* Exercício 2: Componente de Saudação Personalizada */}
        <div className="exercise">
          <h3>2. Saudação Personalizada</h3>
          <Saudacao nomeInicial="Visitante" />
        </div>

        {/* Exercício 3: Lista de Tarefas */}
        <div className="exercise">
          <h3>3. Lista de Tarefas</h3>
          <ListaTarefas tarefasIniciais={['Comprar pão', 'Estudar React']} />
        </div>

        {/* Exercício 4: Controle de Visibilidade */}
        <div className="exercise">
          <h3>4. Controle de Visibilidade</h3>
          <ToggleVisibilidade 
            texto="Este é um texto secreto que pode ser mostrado ou ocultado!" 
          />
        </div>
      </section>

      {/* Formulário de Contato */}
      <section id="contact">
        <h2>Contact Form</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>
    </div>
  );
}

// Componente do Exercício 1: Contador Simples
function Contador({ inicial }) {
  const [contador, setContador] = useState(inicial);

  return (
    <div className="contador">
      <p>Valor atual: {contador}</p>
      <div className="contador-botoes">
        <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        <button onClick={() => setContador(contador - 1)}>Decrementar</button>
      </div>
    </div>
  );
}

// Componente do Exercício 2: Saudação Personalizada
function Saudacao({ nomeInicial }) {
  const [nome, setNome] = useState(nomeInicial);
  const [novoNome, setNovoNome] = useState('');

  const atualizarNome = () => {
    if (novoNome.trim()) {
      setNome(novoNome);
      setNovoNome('');
    }
  };

  return (
    <div className="saudacao">
      <p>Olá, {nome}!</p>
      <div className="saudacao-controle">
        <input
          type="text"
          value={novoNome}
          onChange={(e) => setNovoNome(e.target.value)}
          placeholder="Digite um novo nome"
        />
        <button onClick={atualizarNome}>Atualizar</button>
      </div>
    </div>
  );
}

// Componente do Exercício 3: Lista de Tarefas
function ListaTarefas({ tarefasIniciais }) {
  const [tarefas, setTarefas] = useState(tarefasIniciais);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim()) {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa('');
    }
  };

  return (
    <div className="lista-tarefas">
      <div className="adicionar-tarefa">
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Nova tarefa"
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

// Componente do Exercício 4: Controle de Visibilidade
function ToggleVisibilidade({ texto }) {
  const [visivel, setVisivel] = useState(false);

  return (
    <div className="toggle-visibilidade">
      <button onClick={() => setVisivel(!visivel)}>
        {visivel ? 'Ocultar' : 'Mostrar'}
      </button>
      {visivel && <p className="conteudo-visibilidade">{texto}</p>}
    </div>
  );
}


export default App;