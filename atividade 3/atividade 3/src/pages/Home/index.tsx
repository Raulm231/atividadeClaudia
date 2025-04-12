
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigate('/about')}>
        Ir para About
      </button>
    </div>
  );
}