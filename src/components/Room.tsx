import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import InfoContext from "../context/Data/InfoContext";
import { InfoContextType } from "../types/typeContext";
import { craeteMessage, deleteMessage, getRoom } from "../api/axios";
import AuthenticationContext from "../context/Auth/userContext";
import { AuthContext } from "../types/authContext";
import MessageComponent from "./Message";
import { toast } from "react-toastify";

const Room = () => {
    const { id } = useParams();
    const { auth, } = useContext(AuthenticationContext) as AuthContext;
    const [newMsg, setNewMsg] = useState<string>("")
    // console.log(id)
    const {
        user,
        room,
        updateRoom,
        message,
        updateMessage,
    } = useContext(InfoContext) as InfoContextType;

    const [loading, setLoaing] = useState<boolean>(true);

    useEffect(() => {
        setLoaing(true)
        getRoom(Number(id), auth.accessToken).then(data => {
            // console.log("participant", data.data)
            updateRoom(data.data.room)
            updateMessage(data.data.messages)
            setLoaing(false)
        }).catch(err => {
            toast.error("Something went wrong!");
            // console.log(err);
        })
    }, [auth.accessToken, id]);
    // console.log(message);

    const deletMsg = async (e, id: number) => {
        e.preventDefault();

        const resp = await deleteMessage(id, auth.accessToken);
        if (resp.data.success) {
            updateMessage(message.filter((item) => item.id !== id));
            toast.success("Message has been deleted!");
        } else {
            toast.error(resp.response.data.error);
            // toast.error("unable to delete the message!");
        }

    }

    const createNewMsg = async () => {

        const resp = await craeteMessage(Number(id), auth.accessToken, { user_id: user.id, body: newMsg });
        if (resp.data.success) {
            toast.success(resp?.data?.success);
            updateMessage(resp?.data?.room_messages);
            updateRoom({ ...room, participants: resp?.data?.participants })
            // console.log(resp?.data?.participants)
        } else {
            toast.error(resp.response.data.error);
            // toast.success("Something went wrong!");
        }
    }

    return (
        <>
            <main className="profile-page layout layout--2">
                <div className="container">
                    {/* <!-- Room Start --> */}
                    <div className="room">
                        <div className="room__top">
                            <div className="room__topLeft">
                                <Link to="/">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                        <title>arrow-left</title>
                                        <path d="M13.723 2.286l-13.723 13.714 13.719 13.714 1.616-1.611-10.96-10.96h27.625v-2.286h-27.625l10.965-10.965-1.616-1.607z">
                                        </path>
                                    </svg>
                                </Link>
                                <h3>Chat Room</h3>
                            </div>

                            <div className="room__topRight">
                                <Link to={`/update-room/${id}/`}>
                                    <svg enable-background="new 0 0 24 24" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
                                        <title>edit</title>
                                        <g>
                                            <path d="m23.5 22h-15c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h15c.276 0 .5.224.5.5s-.224.5-.5.5z"></path>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="m2.5 22c-.131 0-.259-.052-.354-.146-.123-.123-.173-.3-.133-.468l1.09-4.625c.021-.09.067-.173.133-.239l14.143-14.143c.565-.566 1.554-.566 2.121 0l2.121 2.121c.283.283.439.66.439 1.061s-.156.778-.439 1.061l-14.142 14.141c-.065.066-.148.112-.239.133l-4.625 1.09c-.038.01-.077.014-.115.014zm1.544-4.873-.872 3.7 3.7-.872 14.042-14.041c.095-.095.146-.22.146-.354 0-.133-.052-.259-.146-.354l-2.121-2.121c-.19-.189-.518-.189-.707 0zm3.081 3.283h.01z"></path>
                                            </g>
                                            <g>
                                                <path d="m17.889 10.146c-.128 0-.256-.049-.354-.146l-3.535-3.536c-.195-.195-.195-.512 0-.707s.512-.195.707 0l3.536 3.536c.195.195.195.512 0 .707-.098.098-.226.146-.354.146z"></path>
                                            </g>
                                        </g>
                                    </svg>
                                </Link>
                                <Link to={`/delete-room/${id}/${room.name}`} >
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                        <title>remove</title>
                                        <path d="M27.314 6.019l-1.333-1.333-9.98 9.981-9.981-9.981-1.333 1.333 9.981 9.981-9.981 9.98 1.333 1.333 9.981-9.98 9.98 9.98 1.333-1.333-9.98-9.98 9.98-9.981z">
                                        </path>
                                    </svg>
                                </Link>
                            </div>


                        </div>
                        <div className="room__box scroll">
                            <div className="room__header scroll">
                                <div className="room__info">
                                    <h3>{room.name}</h3>
                                    <span>3&nbsp;months, 2&nbsp;weeks ago</span>
                                </div>
                                <div className="room__hosted">
                                    <p>Hosted By</p>
                                    <a href="/profile/1/" className="room__author">
                                        <div className="avatar avatar--small">
                                            <img src={`https://api.multiavatar.com/${user.name.replace(" ", "%")}`} />
                                        </div>
                                        <span>@{room.host.name}</span>
                                    </a>
                                </div>
                                <div className="room__details">
                                    {room.description}
                                </div>
                                <span className="room__topics">{room.topic.name}</span>
                            </div>

                            <div className="room__conversation">
                                <div className="threads scroll">
                                    <div className="thread">
                                        {
                                            message && message.sort((a, b) => {
                                                const dateA = new Date(a.created);
                                                const dateB = new Date(b.created);

                                                return dateA - dateB;
                                            }).map((item) => {
                                                return <MessageComponent
                                                    created={item.created}
                                                    updated={item.updated}
                                                    room={item.room}
                                                    user={item.user}
                                                    body={item.body}
                                                    id={item.id}
                                                    key={item.id}
                                                    deletMsg={deletMsg}
                                                />
                                            })
                                        }

                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="room__message">
                            <form action="" method="POST" onSubmit={(e) => {
                                e.preventDefault();
                                createNewMsg(e)
                            }}>
                                <input name="body" placeholder="Write your message here..."
                                    value={newMsg} onChange={(e) => setNewMsg(e.target.value)}
                                // fdprocessedid="o98rbb"
                                />
                            </form>
                        </div>
                    </div>

                    <div className="participants">
                        <h3 className="participants__top">Participants <span>({room.participants.length + 1} Joined)</span></h3>
                        <div className="participants__list scroll">
                            <h1>Admin</h1>
                            <Link to="/profile/1/" className="participant">
                                <div className="avatar avatar--medium">
                                    <img src="/images/Profile_picture_QKqsL3j.png" />
                                </div>
                                <p>
                                    {room.host.name}
                                    <span>@{room.host.username}</span>
                                </p>
                            </Link>
                            <h1>Users</h1>
                            {
                                room.participants && room.participants.map((item, idx) => {
                                    return <Link key={idx} to="/profile/1/" className="participant">
                                        <div className="avatar avatar--medium">
                                            <img src="/images/Profile_picture_QKqsL3j.png" />
                                        </div>
                                        <p>
                                            {item.name}
                                            <span>@{item.username}</span>
                                        </p>
                                    </Link>

                                })
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Room
