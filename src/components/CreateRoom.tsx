import { useContext, useEffect, useState } from "react";
import AuthenticationContext from "../context/Auth/userContext";
import { AuthContext } from "../types/authContext";
import InfoContext from "../context/Data/InfoContext";
import { InfoContextType } from "../types/typeContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createRoom, getRoom, getTopics, updateRoomAPI } from "../api/axios";
import { toast } from "react-toastify";

const CreateRoom = ({ update }: { update: boolean }) => {
    const { id } = useParams();
    const router = useNavigate();
    const { auth } = useContext(AuthenticationContext) as AuthContext;
    const [loading, setLoading] = useState<boolean>(false)
    const {
        room,
        topics,
        user,
        updateTopics,
        updateRoom,
    } = useContext(InfoContext) as InfoContextType;


    useEffect(() => {
        setLoading(true)
        getTopics().then(data => {
            updateTopics(data?.data?.topics);

        });
        getRoom(Number(id), auth.accessToken).then(data => {
            // console.log("participant", data.data)
            updateRoom(data.data.room)
            setLoading(false)
        }).catch(err => {
            toast.error("Something went wrong!");
            // console.log(err);
        })
    }, [auth.accessToken, id]);

    const [newRoom, setNewRoom] = useState(() => {
        if (id && update) {
            return {
                "id": room.id,
                "host": room.host,
                "topic": room.topic,
                "name": room.name,
                "description": room.description,
                "participants": room.description,
                "updated": room.updated,
                "created": room.created
            }
        }
        return {
            "id": 0,
            "host": 0,
            "topic": "",
            "name": "",
            "description": "",
            "participants": [],
            "updated": "",
            "created": ""
        }
    });



    const onChange = (e) => {
        setNewRoom({ ...newRoom, [e.target.name]: e.target.value })
    }

    const createOrUpdate = async (e) => {
        e.preventDefault();
        if (!newRoom.name) {
            toast.info("Make sure to provide valid name");
            return;
        }
        if (!newRoom.topic) {
            toast.info("Make sure select or enter valid topic ");
            return;
        }

        const idtest = toast.info(`${update ? "Updating" : "Creating"} a Room!`);
        try {
            setLoading(true);
            let resp;
            if (id && update) {
                resp = await updateRoomAPI(+id, auth.accessToken, { host: user.id, description: newRoom.description, name: newRoom.name, topic: newRoom.topic.toString() });
            } else {
                resp = await createRoom(auth.accessToken, { host: user.id, description: newRoom.description, name: newRoom.name, topic: newRoom.topic.toString() });
            }

            if (resp?.status === 201 || (update && resp.status === 200)) {
                toast.success(`Room ${update ? "Updated" : "Created"} Successfully!`);
                router("/");
            } else {
                toast.error(resp.response.data.error);
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error("Invalid credentials");
        } finally {
            toast.dismiss(idtest);
            setLoading(false);
        }
    }

    return (
        <>
            <main className="create-room layout">
                <div className="container">
                    <div className="layout__box">
                        <div className="layout__boxHeader">
                            <div className="layout__boxTitle">
                                <a href="http://127.0.0.1:9090/room/2/">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                        <title>arrow-left</title>
                                        <path d="M13.723 2.286l-13.723 13.714 13.719 13.714 1.616-1.611-10.96-10.96h27.625v-2.286h-27.625l10.965-10.965-1.616-1.607z">
                                        </path>
                                    </svg>
                                </a>
                                <h3>Create/Update Study Room</h3>
                            </div>
                        </div>
                        <div className="layout__body">
                            <form className="form" action="" method="POST" onSubmit={(e) => createOrUpdate(e)}>

                                <div className="form__group">
                                    <label htmlFor="room_name">Room Name</label>
                                    <input type="text" name="name" maxLength={200} required={true} id="id_name"
                                        value={newRoom.name} onChange={onChange}
                                    />
                                </div>

                                <div className="form__group">
                                    <label htmlFor="room_topic">Topic</label>
                                    <input required type="text" name="topic" id="room_topic" list="topic-list" value={newRoom.topic.toString()}
                                        onChange={onChange}
                                    />
                                    <datalist id="topic-list">
                                        <select id="room_topic">
                                            <option value="">Select your topic</option>
                                            {topics.map(item => (
                                                <option value={item.topic}>{item.topic}</option>
                                            ))}
                                        </select>
                                    </datalist>
                                </div>

                                <div className="form__group">
                                    <label htmlFor="room_description">Room Description</label>
                                    <textarea name="description" cols={40} rows={10} id="id_description"
                                        value={newRoom.description} onChange={onChange}
                                    ></textarea>
                                </div>


                                <div className="form__action">
                                    <Link className="btn btn--dark" to={"#"} onClick={() => router(-1)}>Cancel</Link>
                                    <button className="btn btn--main" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default CreateRoom
