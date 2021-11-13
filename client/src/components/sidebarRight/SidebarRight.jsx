import "./sidebarRight.css";

export default function SidebarRight() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="./myAvatar.jpg"
          alt=""
        />
        <p>
          Tớ là Trường.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">IT</li>
          <li className="sidebarListItem">Economy</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Movie</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Book</li>
          <li className="sidebarListItem">Other</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
      </div>
      <div className="sidebarSocial">
        <i className="sidebarIcon fab fa-facebook-square"></i>
        <i className="sidebarIcon fab fa-github-square"></i>
        <i className="sidebarIcon fab fa-linkedin"></i>
        <i className="sidebarIcon fab fa-instagram-square"></i>
      </div>
    </div>
  );
}
