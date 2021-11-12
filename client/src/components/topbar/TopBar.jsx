import React from 'react'
import "./topbar.css"
export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
                <h3 className="topTitle">Blog của Trường</h3>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className='topListItem'>HOME</li>
                    <li className="topListItem">IT</li>
                    <li className="topListItem">ECONOMY</li>
                    <li className="topListItem">OTHER</li>
                    <li className="topListItem">ABOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img className="topImg" src="https://i.ibb.co/R2R3q2P/depositphotos-9431737-stock-photo-portrait-of-gray-striped-cat.jpg" alt="" /> <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
