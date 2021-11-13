import { Link } from "react-router-dom";
import "./sidebarLeft.css";

export default function SidebarLeft() {
  return (
    <div className="sidebarLeft">
      <div className="sidebarLeftItem">
        <span className="sidebarLeftTitle">CATEGORIES</span>
        <ul className="sidebarLeftList">
          <li className="sidebarCategoryItem">
            <Link to="/it" className="link">
              IT
            </Link>
          </li>
          <li className="sidebarCategoryItem">
            <Link to="/economy" className="link">
              ECONOMY
            </Link>
          </li>
          <li className="sidebarCategoryItem">
            <Link to="/sport" className="link">
              SPORT
            </Link>
          </li>
          <li className="sidebarCategoryItem">
            <Link to="/movie" className="link">
              MOVIE
            </Link>
          </li>
          <li className="sidebarCategoryItem">
            <Link to="/music" className="link">
              MUSIC
            </Link>
          </li>
          <li className="sidebarCategoryItem">
            <Link to="/book" className="link">
              BOOK
            </Link>
          </li>
          <li className="sidebarCategoryItem">
            <Link to="/other" className="link">
              OTHER
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarLeftItem">
        <span className="sidebarLeftTitle">STORAGE</span>
        <ul className="sidebarLeftList">
          <li className="sidebarStorageItem">2021 November</li>
          <li className="sidebarStorageItem">2021 December</li>
          <li className="sidebarStorageItem">2022 January</li>
          <li className="sidebarStorageItem">2022 February</li>
          <li className="sidebarStorageItem">2022 March</li>
          <li className="sidebarStorageItem">2022 Apri</li>
          <li className="sidebarStorageItem">2022 July</li>
        </ul>
      </div>
    </div>
  );
}
