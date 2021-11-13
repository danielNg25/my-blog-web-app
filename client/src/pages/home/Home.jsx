import { useState, useEffect } from 'react'
import'./home.css'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import SidebarRight from '../../components/sidebarRight/SidebarRight'
import SidebarLeft from '../../components/sidebarLeft/SidebarLeft'
import axios from "axios"

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async() =>{
            const res = await axios.get('/posts');
            setPosts(res.data);
            
        }
        fetchPosts();
    }, [])
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
