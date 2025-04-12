
import { useParams } from 'react-router-dom';

export default function Animal() {
  const { name } = useParams<{ name: string }>();
  
  return (
    <div>
      <h1>Animal Page</h1>
      <p>O animal é: {name}</p>
    </div>
  );
}