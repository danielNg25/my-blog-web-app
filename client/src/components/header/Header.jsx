import "./header.css"
export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleLg">Blog của Trường</span>
            </div>
            <img className="headerImg" src="./cover.jpg" alt="" />
            <hr />
        </div>
    )
}
