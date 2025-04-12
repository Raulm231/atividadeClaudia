export type Room = {
    id: number;
    name: string;
    price: number;
    amenities?: string[];
  };
  
  export type RoomDetailsParams = {
    id: string;
  };