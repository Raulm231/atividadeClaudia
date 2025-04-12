import './Card.css';

function Card({ title, children }) {
  return (
    <div className="responsive-card">
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

export default Card;