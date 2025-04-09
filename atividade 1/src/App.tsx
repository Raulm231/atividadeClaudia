import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

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
      {/* Navbar */}
      <nav className="navbar">
        <img src={reactLogo} alt="Logo" className="navbar-logo" />
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Botão Estilizado */}
      <section id="home">
        <h2>Styled Button</h2>
        <button className="custom-button">Click Me</button>
      </section>

      {/* Cartão de Perfil */}
      <section className="profile-section">
        <h2>Profile Card</h2>
        <div className="profile-card">
          <img src={viteLogo} alt="Profile" className="profile-photo" />
          <h3 className="profile-name">John Doe</h3>
          <p className="profile-description">Frontend Developer | React Specialist</p>
        </div>
      </section>

      {/* Card Responsivo */}
      <section className="card-section">
        <h2>Responsive Card</h2>
        <div className="responsive-card">
          <h3>Card Title</h3>
          <p>This card adapts to different screen sizes</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section id="gallery">
        <h2>Image Gallery</h2>
        <div className="gallery-grid">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <img 
              key={num}
              src={`https://picsum.photos/200/30${num}`}
              alt={`Gallery item ${num}`}
              className="gallery-item"
            />
          ))}
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

export default App;