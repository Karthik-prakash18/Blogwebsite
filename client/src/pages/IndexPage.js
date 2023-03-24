import { useEffect, useState } from "react";
import Post from "../Post";
export default function IndexPage(){
    const [posts,setPosts]= useState([]);
    useEffect(()=>{
        const response=fetch('https://shy-pear-nematode-tie.cyclic.app/post').then(response=>{
            response.json().then(posts=>{
                setPosts(posts);
            });
        });
    },[])
    return (
        <>
            {posts.length>0 && posts.map(post =>(
                <Post {...post} />
            ))}
        </>
    );
}