import { useState } from "react";
import UserContext from "./InfoContext";
import { Message, Room, Topic, User } from "../../types/typeContext";


const SetInfo = (prop) => {
    const [topics, setTopics] = useState<Topic[]>([]);
    const [message, setMessage] = useState<Message[]>([]);

    const [user, setUser] = useState<User>({
        "id": 0,
        "username": "",
        "email": "",
        "name": "",
        "bio": "",
        "AdminAccount": false,
        "avatar": ""
    });
    const [roomCount, setRoomCount] = useState<number>(0);
    const [room, setRoom] = useState<Room>({
        id: 0,
        host: { id: 0, avatar: "", username: "", bio: "", email: "", name: "", AdminAccount: false },
        name: "",
        participants: [],
        topic: { name: "", num_rooms: 0, topic: "" },
        description: "",
        created: "",
        updated: "",
    });

    const [allRoom, setAllRoom] = useState<Room[]>([]);

    const updateRoom = (data: Room) => {
        setRoom(data)
    };

    const updateAllRoom = (data: Room[]) => {
        setAllRoom(data)
    };

    const updateTopics = (data: Topic[]) => {
        setTopics(data);
    }

    const updateRoomCount = (data: number) => {
        setRoomCount(data);
    }

    const updateUser = (data: User) => {
        setUser(data);
    }

    const updateMessage = (data: Message[]) => {
        setMessage(data);
    }

    return (
        <UserContext.Provider value={{ room, updateRoom, allRoom, updateAllRoom, topics, updateTopics, roomCount, updateRoomCount, user, updateUser, updateMessage, message }}>
            {prop.children}
        </UserContext.Provider>
    )
}
export default SetInfo;