import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  // Estados para o Exercício 1
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  // Estados para o Exercício 2
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [submitStatus, setSubmitStatus] = useState(null);

  // Função para buscar usuário (Exercício 1)
  const fetchUser = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      if (!response.ok) throw new Error('Usuário não encontrado');
      const data = await response.json();
      setUser(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setUser(null);
    }
  };

  // Função para criar novo usuário (Exercício 2)
  const createUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      
      if (!response.ok) throw new Error('Falha ao cadastrar');
      
      const data = await response.json();
      setSubmitStatus({ success: true, message: 'Usuário cadastrado com sucesso!' });
      setNewUser({ name: '', email: '' });
      
      // Limpar mensagem após 3 segundos
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (err) {
      setSubmitStatus({ success: false, message: err.message });
    }
  };

  return (
    <div className="App">
      <div className="header">
        <img src={reactLogo} className="logo" alt="React logo" />
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </div>

      {/* Exercício 1: Buscar Usuário */}
      <div className="section">
        <h2>Buscar Usuário pelo ID</h2>
        <div className="search-box">
          <input
            type="text"
            placeholder="Digite o ID do usuário"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <button onClick={fetchUser}>Buscar</button>
        </div>

        {error && <p className="error">{error}</p>}
        
        {user && (
          <div className="user-card">
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
          </div>
        )}
      </div>

      {/* Exercício 2: Criar Novo Usuário */}
      <div className="section">
        <h2>Criar Novo Usuário</h2>
        <form onSubmit={createUser}>
          <div className="form-group">
            <label>Nome:</label>
            <input
              type="text"
              value={newUser.name}
              onChange={(e) => setNewUser({...newUser, name: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={newUser.email}
              onChange={(e) => setNewUser({...newUser, email: e.target.value})}
              required
            />
          </div>

          <button type="submit">Cadastrar</button>
        </form>

        {submitStatus && (
          <p className={`status ${submitStatus.success ? 'success' : 'error'}`}>
            {submitStatus.message}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;