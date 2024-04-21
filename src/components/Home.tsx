import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import InfoContext from "../context/Data/InfoContext";
import { InfoContextType } from "../types/typeContext";
import { getAllRooms, getAllRoomsCount, getTopics } from "../api/axios";
import RoomItem from "./RoomItem";

const Home = () => {
    const {
        topics,
        updateTopics,
        roomCount,
        updateRoomCount,
        allRoom,
        updateAllRoom
    } = useContext(InfoContext) as InfoContextType;

    const [loading, setLoaing] = useState<boolean>(true);

    useEffect(() => {
        setLoaing(true)
        getTopics().then(data => {
            updateTopics(data?.data?.topics);

        });

        getAllRoomsCount().then(data => {
            updateRoomCount(data.data.room_count);
        })

        getAllRooms().then(data => {
            updateAllRoom(data.data)
            setLoaing(false)
        })
    }, [])

    // console.log(allRoom);
    return (
        <>
            <main className="layout layout--3">
                <div className="container" >
                    <div className="topics">
                        <div className="topics__header">
                            <h2>Browse Topics</h2>
                        </div>
                        <ul className="topics__list">
                            {(!loading) && topics?.map((item) => (<li>
                                <Link to="/" className="active">{item?.topic} <span>{item?.num_rooms}</span></Link>
                            </li>))}
                        </ul>

                        <Link to={"/topics"} className="btn btn--link">
                            More
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <title>chevron-down</title>
                                <path d="M16 21l-13-13h-3l16 16 16-16h-3l-13 13z"></path>
                            </svg>
                        </Link>
                    </div>
                    <div className="roomList">
                        <div className="mobile-menu">
                            <form className="header__search">
                                <label>
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                        <title>search</title>
                                        <path
                                            d="M32 30.586l-10.845-10.845c1.771-2.092 2.845-4.791 2.845-7.741 0-6.617-5.383-12-12-12s-12 5.383-12 12c0 6.617 5.383 12 12 12 2.949 0 5.649-1.074 7.741-2.845l10.845 10.845 1.414-1.414zM12 22c-5.514 0-10-4.486-10-10s4.486-10 10-10c5.514 0 10 4.486 10 10s-4.486 10-10 10z">
                                        </path>
                                    </svg>
                                    <input placeholder="Search for posts" />
                                </label>
                            </form>
                            <div className="mobile-menuItems">
                                <Link className="btn btn--main btn--pill" to="/topcis">Browse Topics</Link>
                                <Link className="btn btn--main btn--pill" to="#">Recent Activities</Link>
                            </div>
                        </div>
                        <div className="roomList__header">
                            <div>
                                <h2>Study Room</h2>
                                <p>{roomCount} Rooms available</p>
                            </div>
                            <Link className="btn btn--main" to="/create-room">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                    <title>add</title>
                                    <path
                                        d="M16.943 0.943h-1.885v14.115h-14.115v1.885h14.115v14.115h1.885v-14.115h14.115v-1.885h-14.115v-14.115z">
                                    </path>
                                </svg>
                                Create Room
                            </Link>
                        </div>
                        <div >
                            {(!loading) && allRoom.map((item, idx) => (
                                <RoomItem
                                    id={item.id}
                                    created={item.created}
                                    description={item.description}
                                    host={item.host}
                                    name={item.name}
                                    participants={item.participants}
                                    topic={item.topic}
                                    updated={item.updated}
                                    key={idx}
                                />
                            ))}

                        </div>
                    </div>
                    <div style={{ visibility: "hidden" }}></div>

                </div>
            </main>
        </>
    )
}

export default Home
