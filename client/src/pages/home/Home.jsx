import { useState, useEffect } from 'react'
import'./home.css'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import SidebarRight from '../../components/sidebarRight/SidebarRight'
import SidebarLeft from '../../components/sidebarLeft/SidebarLeft'
import axios from "axios"
import { useLocation } from 'react-router'

export default function Home() {
    const [posts, setPosts] = useState([]);
    const{search} = useLocation();
    useEffect(() => {
        const fetchPosts = async() =>{
            const res = await axios.get('/posts' + search);
            setPosts(res.data);
            
        }
        fetchPosts();
    }, [search])
    return (
        <>
        <Header/>
        <div className="home">
            <SidebarLeft/>
            <Posts posts={posts}/>
            <SidebarRight/>
        </div>
        </>
    )
}
