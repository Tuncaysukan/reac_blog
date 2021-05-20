import React from 'react';
import './sidebar.css'

export default function sidebar() {
    return (
        <>
            <div className="sidebar">
                <div className="sidebarItem">
                    <span className="sidebarTitle">
                        ABOUT ME
                </span>
                    <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
                        alt="" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum est ut, dolores modi possimus ullam delectus amet repellendus quam quis fuga iste fugit sunt sint cumque molestiae, non praesentium sequi!
                        </p>
                </div>
                <div className="sidebarItem">
                    <span className="sidebarTitle">
                        Categories
                    </span>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">Life</li>
                        <li className="sidebarListItem">Musıc</li>
                        <li className="sidebarListItem">Style</li>
                        <li className="sidebarListItem">Sport</li>
                        <li className="sidebarListItem">Tech</li>
                        <li className="sidebarListItem">Cinema</li>
                    </ul>
                </div>
                <div className="sidebarItem">
                    <span className="sidebarTitle">
                        Floow Us
                    </span>
                    <div className="sidebarsocial">
                        <i className=" sidebarIcon fab fa-facebook-square"></i>
                        <i className=" sidebarIcon fab fa-twitter-square"></i>
                        <i className=" sidebarIcon fab fa-pinterest-square"></i>
                        <i className=" sidebarIcon fab fa-instagram-square"></i>
                    </div>
                </div>
            </div>
        </>
    )
}
