import { Link } from "react-router-dom";
import { Message } from "../types/typeContext";

const MessageComponent = ({ user, id, body, created, room, updated, deletMsg }: Message) => {

    return (
        <>
            <div className="thread">
                <div className="thread__top">
                    <div className="thread__author">
                        <Link to={`/profile/${id}/`} className="thread__authorInfo">
                            <div className="avatar avatar--small">
                                <img src={`https://api.multiavatar.com/${user.name.replace(" ", "%")}`} />
                            </div>
                            <span>@{user.username}</span>
                        </Link>
                        <span className="thread__date">{new Date(created).toUTCString()}</span>
                    </div>


                    <Link to="#" onClick={(e) => deletMsg(e, id)}>
                        <div className="thread__delete">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <title>remove</title>
                                <path d="M27.314 6.019l-1.333-1.333-9.98 9.981-9.981-9.981-1.333 1.333 9.981 9.981-9.981 9.98 1.333 1.333 9.981-9.98 9.98 9.98 1.333-1.333-9.98-9.98 9.98-9.981z">
                                </path>
                            </svg>
                        </div>
                    </Link>

                </div>
                <div className="thread__details">
                    {body}
                </div>
            </div>

        </>
    )
}

export default MessageComponent
