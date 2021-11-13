
import'./home.css'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import SidebarRight from '../../components/sidebarRight/SidebarRight'
import SidebarLeft from '../../components/sidebarLeft/SidebarLeft'

export default function Home() {
    return (
        <>
        <Header/>
        <div className="home">
            <SidebarLeft/>
            <Posts/>
            <SidebarRight/>
        </div>
        </>
    )
}
