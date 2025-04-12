import React, { useState } from 'react';
import axios from 'axios';

function UserManagementApp() {

  const [userId, setUserId] = useState('');
  const [searchedUser, setSearchedUser] = useState(null);
  const [searchError, setSearchError] = useState(null);
  const [searchLoading, setSearchLoading] = useState(false);


  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [creationMessage, setCreationMessage] = useState(null);
  const [creationLoading, setCreationLoading] = useState(false);


  const handleSearch = async () => {
    if (!userId) return;
    
    setSearchLoading(true);
    setSearchError(null);
    
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
      setSearchedUser(response.data);
    } catch (err) {
      setSearchError('Usuário não encontrado');
      setSearchedUser(null);
    } finally {
      setSearchLoading(false);
    }
  };


  const handleCreateUser = async (e) => {
    e.preventDefault();
    
    if (!newUserName || !newUserEmail) {
      setCreationMessage({ text: 'Preencha todos os campos', type: 'error' });
      return;
    }
    
    setCreationLoading(true);
    
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
        name: newUserName,
        email: newUserEmail,
      });
      
      setCreationMessage({ text: 'Usuário criado com sucesso!', type: 'success' });
      setNewUserName('');
      setNewUserEmail('');
      
      console.log('Dados enviados para a API:', response.data);
    } catch (err) {
      setCreationMessage({ text: 'Erro ao criar usuário', type: 'error' });
    } finally {
      setCreationLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Gerenciamento de Usuários</h1>
      
     
      <div style={{ 
        marginBottom: '40px', 
        padding: '20px', 
        border: '1px solid #ddd', 
        borderRadius: '8px' 
      }}>
        <h2 style={{ color: '#444' }}>Buscar Usuário por ID</h2>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Digite o ID do usuário"
            style={{ 
              padding: '8px', 
              marginRight: '10px', 
              width: '200px',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
          <button 
            onClick={handleSearch} 
            disabled={searchLoading}
            style={{
              padding: '8px 16px',
              backgroundColor: '#4CAF50',
              color: 'black',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {searchLoading ? 'Buscando...' : 'Buscar'}
          </button>
        </div>
        
        {searchError && (
          <p style={{ color: 'red', marginTop: '10px' }}>{searchError}</p>
        )}
        
        {searchedUser && (
          <div style={{ 
            marginTop: '20px', 
            padding: '15px', 
            backgroundColor: '#f9f9f9',
            borderRadius: '4px'
          }}>
            <h3 style={{ marginTop: '0' }}>Dados do Usuário</h3>
            <p><strong>Nome:</strong> {searchedUser.name}</p>
            <p><strong>Email:</strong> {searchedUser.email}</p>
          </div>
        )}
      </div>
      

      <div style={{ 
        padding: '20px', 
        border: '1px solid #ddd', 
        borderRadius: '8px' 
      }}>
        <h2 style={{ color: '#444' }}>Criar Novo Usuário</h2>
        <form onSubmit={handleCreateUser}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              Nome:
            </label>
            <input
              type="text"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
              style={{ 
                padding: '8px', 
                width: '100%',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              Email:
            </label>
            <input
              type="email"
              value={newUserEmail}
              onChange={(e) => setNewUserEmail(e.target.value)}
              style={{ 
                padding: '8px', 
                width: '100%',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
          </div>
          <button 
            type="submit" 
            disabled={creationLoading}
            style={{
              padding: '8px 16px',
              backgroundColor: '#2196F3',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {creationLoading ? 'Enviando...' : 'Cadastrar'}
          </button>
        </form>
        
        {creationMessage && (
          <p style={{ 
            color: creationMessage.type === 'error' ? 'red' : 'green',
            marginTop: '10px'
          }}>
            {creationMessage.text}
          </p>
        )}
      </div>
    </div>
  );
}

export default UserManagementApp;