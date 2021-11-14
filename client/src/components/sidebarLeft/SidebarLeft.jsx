import { Link } from "react-router-dom";
import "./sidebarLeft.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SidebarLeft() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebarLeft">
      <div className="sidebarLeftItem">
        <span className="sidebarLeftTitle">CATEGORIES</span>
        <ul className="sidebarLeftList">
          {cats.map((c) => {
            return (
              <li className="sidebarCategoryItem">
                <Link to={`/?category=${c.name}`} className="link">
                  {c.name}
                </Link>
              </li>
            );
          })}
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
