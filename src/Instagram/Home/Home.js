import React from "react";
import './Home.css'
import logo from '../../Assets/insta.png'
import home from '../../Assets/home.png'
import search from '../../Assets/search.png'
import explore from '../../Assets/explore.png'
import reels from '../../Assets/reels.png'
import messages from '../../Assets/messages.png'
import notification from '../../Assets/notification.png'
import create from '../../Assets/create.png'
import more from '../../Assets/more.jpg'
import dot from '../../Assets/dot.png'
import person from '../../Assets/me.png'
import comment from '../../Assets/comment.png'
import save from '../../Assets/save.png'

function Home(){
    return(
        <div className="main">
            <div className="sideMenu">
                <div className="logo">
                    <img src={logo} height='40px' /> 
                </div>
                <div>
                    <div className="row">
                        <img src={home} height='25px' /> 
                        <h4 className="active">Home</h4>
                    </div>
                    <div className="row">
                        <img src={search} height='25px' /> 
                        <h4>Search</h4>
                    </div>
                    <div className="row">
                        <img src={explore} height='25px' /> 
                        <h4>Explore</h4>
                    </div>
                    <div className="row">
                        <img src={reels} height='25px' /> 
                        <h4>Reels</h4>
                    </div>
                    <div className="row">
                        <img src={messages} height='25px' /> 
                        <h4>Message</h4>
                    </div>
                    <div className="row">
                        <img src={notification} height='25px' /> 
                        <h4>Notification</h4>
                    </div>
                    <div className="cust_row">
                        <img src={create} height='45px' /> 
                        <h4>Create</h4>
                    </div>
                    <div className="row">
                        <div className="profile">B</div>
                        <h4>Profile</h4>
                    </div>
                    <div className="cust_row">
                        <img src={more} height='45px' /> 
                        <h4>More</h4>
                    </div>
                </div>
            </div>
            <div className="container commonRow">
                <div className="post">
                    <div className="commonRow">
                        <div className="status">
                            <div className="subStatus"></div>
                            <div className="name">
                                <span className="ellipsis">Kishore</span>
                            </div>
                        </div>
                        <div className="status">
                            <div className="subStatus"></div>
                            <div className="name">
                                <span className="ellipsis">Kishore</span>
                            </div>
                        </div>
                        <div className="status">
                            <div className="subStatus"></div>
                            <div className="name">
                                <span className="ellipsis">Kishore</span>
                            </div>
                        </div>
                        <div className="status">
                            <div className="subStatus"></div>
                            <div className="name">
                                <span className="ellipsis">Kishore</span>
                            </div>
                        </div>
                        <div className="status">
                            <div className="subStatus"></div>
                            <div className="name">
                                <span className="ellipsis">Kishore</span>
                            </div>
                        </div>
                        <div className="status">
                            <div className="subStatus"></div>
                            <div className="name">
                                <span className="ellipsis">Kishore</span>
                            </div>
                        </div>
                        <div className="status">
                            <div className="subStatus"></div>
                            <div className="name">
                                <span className="ellipsis">Kishore</span>
                            </div>
                        </div>
                        <div className="status">
                            <div className="subStatus"></div>
                            <div className="name">
                                <span className="ellipsis">Kishore</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="postContainer">
                            <div className="postRow">
                                <div className="commonRow">
                                    <div className="postProfile"></div>
                                    <div>
                                        <div>
                                            <span className="postName">love_medics</span>
                                            <span className="postDay">. 1d</span>
                                        </div>
                                        <span className="PostDesc">Beast Inside Beats • Vibes</span>
                                    </div>
                                </div>
                                <img src={dot} height="20px" /> 
                            </div>
                            <div>
                                <img src={person} height='500px' /> 
                                <div className="postRow">
                                    <div className="activity">
                                        <img src={notification} height="30px" />
                                        <img src={comment} height="37px" />
                                        <img src={messages} height="25px" />
                                    </div>
                                    <img src={save} height='30px' />
                                </div>
                                <div className="commonRow">
                                    <div className="liked">
                                        <div className="likedProfile"></div>
                                        <div className="likedProfile1"></div>
                                    </div>
                                    <span className="likeCount">5 likes</span>
                                </div>
                                <div>
                                    <div>
                                        <span className="postName">love_medics</span>
                                        <span className="postDay"> Hiccups ...more</span>
                                    </div>
                                    <div>
                                        <div className="postRow">
                                            <span className="addComment">Add a comment...</span>
                                            <span className="emojiSize">☻</span>
                                        </div>
                                        <div className="commentBorder"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="postContainer">
                            <div className="postRow">
                                <div className="commonRow">
                                    <div className="postProfile"></div>
                                    <div>
                                        <div>
                                            <span className="postName">love_medics</span>
                                            <span className="postDay">. 1d</span>
                                        </div>
                                        <span className="PostDesc">Beast Inside Beats • Vibes</span>
                                    </div>
                                </div>
                                <img src={dot} height="20px" /> 
                            </div>
                            <div>
                                <img src={person} height='500px' /> 
                                <div className="postRow">
                                    <div className="activity">
                                        <img src={notification} height="30px" />
                                        <img src={comment} height="37px" />
                                        <img src={messages} height="25px" />
                                    </div>
                                    <img src={save} height='30px' />
                                </div>
                                <div className="commonRow">
                                    <div className="liked">
                                        <div className="likedProfile"></div>
                                        <div className="likedProfile1"></div>
                                    </div>
                                    <span className="likeCount">5 likes</span>
                                </div>
                                <div>
                                    <div>
                                        <span className="postName">love_medics</span>
                                        <span className="postDay"> Hiccups ...more</span>
                                    </div>
                                    <div>
                                        <div className="postRow">
                                            <span className="addComment">Add a comment...</span>
                                            <span className="emojiSize">☻</span>
                                        </div>
                                        <div className="commentBorder"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="suggestion">
                    <div className="postRow">
                        <div className="commonRow">
                            <div className="postProfile"></div>
                            <div className="suggestionProfile">
                                <span className="postName">coding__comics</span><br/>
                                <span className="postDay">Coding Comics</span>
                            </div>
                        </div>
                        <div>Switch</div>
                    </div>
                    <div className="postRow Suggested">
                        <div>Suggested for you</div>
                        <div className="seeAll">See All</div>
                    </div>
                    <div className="postRow pding">
                        <div className="commonRow">
                            <div className="postProfile"></div>
                            <div className="suggestionProfile">
                                <span className="postName">coding__comics</span><br/>
                                <span className="followedBy">Followed by Coding Comics</span>
                            </div>
                        </div>
                        <div className="switch">Follow</div>
                    </div>
                    <div className="postRow pding">
                        <div className="commonRow">
                            <div className="postProfile"></div>
                            <div className="suggestionProfile">
                                <span className="postName">coding__comics</span><br/>
                                <span className="followedBy">Followed by Coding Comics</span>
                            </div>
                        </div>
                        <div className="switch">Follow</div>
                    </div>
                    <div className="postRow pding">
                        <div className="commonRow">
                            <div className="postProfile"></div>
                            <div className="suggestionProfile">
                                <span className="postName">coding__comics</span><br/>
                                <span className="followedBy">Followed by Coding Comics</span>
                            </div>
                        </div>
                        <div className="switch">Follow</div>
                    </div>
                    <div className="postRow pding">
                        <div className="commonRow">
                            <div className="postProfile"></div>
                            <div className="suggestionProfile">
                                <span className="postName">coding__comics</span><br/>
                                <span className="followedBy">Followed by Coding Comics</span>
                            </div>
                        </div>
                        <div className="switch">Follow</div>
                    </div>
                    <div className="postRow pding">
                        <div className="commonRow">
                            <div className="postProfile"></div>
                            <div className="suggestionProfile">
                                <span className="postName">coding__comics</span><br/>
                                <span className="followedBy">Followed by Coding Comics</span>
                            </div>
                        </div>
                        <div className="switch">Follow</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;