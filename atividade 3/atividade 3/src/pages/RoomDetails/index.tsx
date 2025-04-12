
import { useParams, useNavigate } from 'react-router-dom';

export default function RoomDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const handleReserve = () => {

    navigate('/booking-success');
  };
  
  return (
    <div>
      <h1>Detalhes do Quarto {id}</h1>
      <p>Descrição detalhada do quarto...</p>
      <button onClick={handleReserve}>Reservar Agora</button>
    </div>
  );
}