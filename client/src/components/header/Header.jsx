import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog của Trường</span>
            </div>
            <img className="headerImg" src="https://i.ibb.co/R2R3q2P/depositphotos-9431737-stock-photo-portrait-of-gray-striped-cat.jpg" alt="" />
        </div>
    )
}
