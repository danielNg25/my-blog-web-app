import "./sidebarLeft.css"

export default function SidebarLeft() {
    return (
        <div className="sidebarLeft">
            <div className="sidebarLeftItem">
                <span className="sidebarLeftTitle">CATEGORIES</span>
                <ul className="sidebarLeftList">
                    <li className="sidebarCategoryItem">IT</li>
                    <li className="sidebarCategoryItem">ECONOMY</li>
                    <li className="sidebarCategoryItem">SPORT</li>
                    <li className="sidebarCategoryItem">MOVIE</li>
                    <li className="sidebarCategoryItem">MUSIC</li>
                    <li className="sidebarCategoryItem">BOOK</li>
                    <li className="sidebarCategoryItem">OTHER</li>
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
    )
}
