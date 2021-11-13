import React from 'react'
import "./topbar.css"
export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
                <h3 className="topTitle">Trường's Blog</h3>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className='topListItem'>HOME</li>
                    <li className="topListItem">IT</li>
                    <li className="topListItem">ECONOMY</li>
                    <li className="topListItem">SPORT</li>
                    <li className="topListItem">MOVIE</li>
                    <li className="topListItem">MUSIC</li>
                    <li className="topListItem">BOOK</li>
                    <li className="topListItem">OTHER</li>
                    <li className="topListItem">ABOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img className="topImg" src="./myAvatar.jpg" alt="" /> <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
