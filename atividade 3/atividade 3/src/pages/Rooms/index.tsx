
import { Link } from 'react-router-dom';

const rooms = [
  { id: 1, name: 'Quarto Standard' },
  { id: 2, name: 'Quarto Deluxe' },
  { id: 3, name: 'Suíte Presidencial' },
];

export default function Rooms() {
  return (
    <div>
      <h1>Quartos Disponíveis</h1>
      <ul>
        {rooms.map(room => (
          <li key={room.id}>
            <Link to={`/rooms/${room.id}`}>{room.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}