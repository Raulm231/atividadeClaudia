import Button from './components/Button/Button';
import ProfileCard from './components/ProfileCard/ProfileCard';
import Card from './components/Card/Card';
import Gallery from './components/Gallery/Gallery';
import Navbar from './components/Navbar/Navbar';
import ContactForm from './components/ContactForm/ContactForm';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const navLinks = [
    { href: '#home', text: 'Home' },
    { href: '#gallery', text: 'Gallery' },
    { href: '#contact', text: 'Contact' }
  ];

  const galleryImages = Array.from({ length: 6 }, (_, i) => 
    `https://picsum.photos/200/30${i + 1}`
  );

  return (
    <div className="app-container">
      <Navbar logo={reactLogo} links={navLinks} />

      <section id="home">
        <h2>Styled Button</h2>
        <Button>Click Me</Button>
      </section>

      <section className="profile-section">
        <h2>Profile Card</h2>
        <ProfileCard
          image={viteLogo}
          name="John Doe"
          description="Frontend Developer | React Specialist"
        />
      </section>

      <section className="card-section">
        <h2>Responsive Card</h2>
        <Card title="Card Title">
          This card adapts to different screen sizes
        </Card>
      </section>

      <section id="gallery">
        <h2>Image Gallery</h2>
        <Gallery images={galleryImages} />
      </section>

      <section id="contact">
        <h2>Contact Form</h2>
        <ContactForm />
      </section>
    </div>
  );
}

export default App;