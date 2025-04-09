import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Menu de navegação */}
        <nav className="navbar">
          <img src={reactLogo} alt="Logo" className="logo" />
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/rooms">Quartos</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/animal/:name" element={<Animal />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/booking-success" element={<BookingSuccess />} />
        </Routes>
      </div>
    </Router>
  );
}

// Componente Home
function Home() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>Bem-vindo ao Hotel React!</h1>
      <button onClick={() => navigate('/about')} className="nav-button">
        Ir para Sobre
      </button>
      <div className="animal-links">
        <h3>Exemplos de animais:</h3>
        <Link to="/animal/leão">Leão</Link>
        <Link to="/animal/tigre">Tigre</Link>
        <Link to="/animal/elefante">Elefante</Link>
      </div>
    </div>
  );
}

// Componente About
function About() {
  return (
    <div className="page">
      <h1>Sobre Nós</h1>
      <p>O melhor hotel em React do mundo!</p>
      <img src={viteLogo} alt="Vite Logo" className="hotel-image" />
    </div>
  );
}

// Componente Contact
function Contact() {
  return (
    <div className="page">
      <h1>Contato</h1>
      <p>Email: contato@hotelreact.com</p>
      <p>Telefone: (11) 9999-9999</p>
    </div>
  );
}

// Componente Animal
function Animal() {
  const { name } = useParams();

  return (
    <div className="page">
      <h1>Página do Animal</h1>
      <p>Nome do animal: {name}</p>
    </div>
  );
}

// Componente Rooms
function Rooms() {
  const rooms = [
    { id: 1, name: 'Quarto Standard', price: 200 },
    { id: 2, name: 'Quarto Deluxe', price: 350 },
    { id: 3, name: 'Suíte Presidencial', price: 600 }
  ];

  return (
    <div className="page">
      <h1>Nossos Quartos</h1>
      <div className="room-list">
        {rooms.map(room => (
          <div key={room.id} className="room-card">
            <h3>{room.name}</h3>
            <p>R$ {room.price}/noite</p>
            <Link to={`/rooms/${room.id}`}>Ver detalhes</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// Componente RoomDetails
function RoomDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const roomDetails = {
    1: { name: 'Standard', amenities: ['TV', 'Ar-condicionado', 'Wi-Fi'] },
    2: { name: 'Deluxe', amenities: ['TV', 'Ar-condicionado', 'Wi-Fi', 'Frigobar'] },
    3: { name: 'Presidencial', amenities: ['TV', 'Ar-condicionado', 'Wi-Fi', 'Jacuzzi'] }
  };

  return (
    <div className="page">
      <h1>Detalhes do Quarto</h1>
      {id && roomDetails[id] ? (
        <>
          <h2>Quarto {roomDetails[id].name}</h2>
          <ul>
            {roomDetails[id].amenities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <button 
            onClick={() => navigate('/booking-success')} 
            className="book-button"
          >
            Reservar Agora
          </button>
        </>
      ) : (
        <p>Quarto não encontrado</p>
      )}
    </div>
  );
}

// Componente BookingSuccess
function BookingSuccess() {
  return (
    <div className="page">
      <h1>Reserva Confirmada! 🎉</h1>
      <p>Sua reserva foi realizada com sucesso!</p>
      <Link to="/rooms" className="return-link">
        Voltar para quartos
      </Link>
    </div>
  );
}

export default App;