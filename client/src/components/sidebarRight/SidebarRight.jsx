import "./sidebarRight.css";

export default function SidebarRight() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://i.ibb.co/NK7VNmZ/myAvatar.jpg"
          alt=""
        />
        <p>
          Tớ là Trường.
        </p>
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
