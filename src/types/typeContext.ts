export type User = {
  id: number;
  username: string;
  AdminAccount: boolean;
  name: string;
  email: string;
  bio: string;
  avatar: string;
};

export type Topic = {
  topic: string;
  num_rooms: number;
};

export type Room = {
  id: number;
  host: User;
  topic: Topic & { name: string };
  name: string;
  description: string;
  participants: User[];
  updated: string;
  created: string;
};

export type Message = {
  id: number;
  user: User;
  room: number;
  body: string;
  updated: string;
  created: string;
  deletMsg: (e, id: number) => void;
};

export type InfoContextType = {
  user: User;
  updateUser: (data: User) => void;
  roomCount: number;
  updateRoomCount: (data: number) => void;
  topics: Topic[];
  updateTopics: (data: Topic[]) => void;
  room: Room;
  updateRoom: (data: Room) => void;
  allRoom: Room[];
  updateAllRoom: (data: Room[]) => void;
  message: Message[];
  updateMessage: (data: Message[]) => void;
};
