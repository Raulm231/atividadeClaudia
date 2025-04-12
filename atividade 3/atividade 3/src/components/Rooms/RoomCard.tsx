import { Link } from 'react-router-dom';
import styles from './Rooms.module.css';

interface RoomCardProps {
  id: number;
  name: string;
  price: number;
}

export const RoomCard = ({ id, name, price }: RoomCardProps) => {
  return (
    <div className={styles.roomCard}>
      <h3>{name}</h3>
      <p>R$ {price}/noite</p>
      <Link to={`/rooms/${id}`}>Ver detalhes</Link>
    </div>
  );
};