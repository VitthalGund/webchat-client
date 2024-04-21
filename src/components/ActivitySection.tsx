
const ActivitySection = () => {
    return (
        <>
            <main className="layout">
                <div className="container">
                    <div className="layout__box">
                        <div className="layout__boxHeader">
                            <div className="layout__boxTitle">
                                <a href="index.html">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                        <title>arrow-left</title>
                                        <path
                                            d="M13.723 2.286l-13.723 13.714 13.719 13.714 1.616-1.611-10.96-10.96h27.625v-2.286h-27.625l10.965-10.965-1.616-1.607z">
                                        </path>
                                    </svg>
                                </a>
                                <h3>Recent Activities</h3>
                            </div>
                        </div>

                        <div className="activities-page layout__body">
                            {/* Component */}


                            {/* <div className="activities__box">
                              <div className="activities__boxHeader roomListRoom__header">
                                  <a href="profile.html" className="roomListRoom__author">
                                      <div className="avatar avatar--small active">
                                          <img src="https://randomuser.me/api/portraits/men/13.jpg" />
                                      </div>
                                      <p>
                                          @mr_spshuvo
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
                          </div> */}
                        </div>
                    </div>
                </div>
                {/* For Home page */}

                <div className="activities" >
                    <div className="activities__header">
                        <h2>Recent Activities</h2>
                    </div>
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

                    <div className="activities__box">
                        <div className="activities__boxHeader roomListRoom__header">
                            <a href="profile.html" className="roomListRoom__author">
                                <div className="avatar avatar--small active">
                                    <img src="https://randomuser.me/api/portraits/men/13.jpg" />
                                </div>
                                <p>
                                    @mr_spshuvo
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
                </div>
            </main>
        </>
    )
}

export default ActivitySection
