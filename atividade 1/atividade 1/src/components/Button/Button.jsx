import './Button.css';

function Button({ children }) {
  return (
    <button className="custom-button">
      {children}
    </button>
  );
}

export default Button;