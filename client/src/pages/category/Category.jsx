import Posts from '../../components/posts/Posts'
import SidebarLeft from '../../components/sidebarLeft/SidebarLeft'
import SidebarRight from '../../components/sidebarRight/SidebarRight'
import './category.css'

export default function Category() {
    return (
        <>
            <div className="categoryTitleWrapper">
                <div className="categoryTitle ">CATEGORY</div>
                <i className="categoryArrow fas fa-chevron-right"></i>
                <div className=" categoryTitle">IT</div>
            </div>
            <div className="categoryContent">
                <SidebarLeft/>
                <Posts/>
                <SidebarRight/>
            </div>
            
        </>
    )
}
