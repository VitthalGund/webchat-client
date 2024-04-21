
const ActivityBox = () => {
    return (
        <>
            <div className="activities__box">
                <div className="activities__boxHeader roomListRoom__header">
                    <a href="profile.html" className="roomListRoom__author">
                        <div className="avatar avatar--small">
                            <img src="https://randomuser.me/api/portraits/women/11.jpg" />
                        </div>
                        <p>
                            @sulamita_ivy
                            <span>5 days ago</span>
                        </p>
                    </a>
                    <div className="roomListRoom__actions">
                        <a href="#">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <title>remove</title>
                                <path
                                    d="M27.314 6.019l-1.333-1.333-9.98 9.981-9.981-9.981-1.333 1.333 9.981 9.981-9.981 9.98 1.333 1.333 9.981-9.98 9.98 9.98 1.333-1.333-9.98-9.98 9.98-9.981z">
                                </path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="activities__boxContent">
                    <p>replied to post “<a href="room.html">100 Days of code challenge!</a>”</p>
                    <div className="activities__boxRoomContent">
                        I’ll have to try this sometime. Really like this idea. Wanna talk about it? I ‘m....
                    </div>
                </div>
            </div>
        </>
    )
}

export default ActivityBox
