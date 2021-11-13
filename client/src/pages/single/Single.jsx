import SidebarLeft from "../../components/sidebarLeft/SidebarLeft"
import SidebarRight from "../../components/sidebarRight/SidebarRight"
import SinglePost from "../../components/singlePost/SinglePost"
import "./single.css"
export default function Single() {
    return (
        <div className="single">
            <SidebarLeft/>
            <SinglePost/>
            <SidebarRight/>
        </div>
    )
}
