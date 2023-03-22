import { useEffect, useState } from "react";
import Post from "../Post";
export default function IndexPage(){
    const [posts,setPosts]= useState([]);
    useEffect(()=>{
        const response=fetch('https://blogwebsite-7hh2.vercel.app/post').then(response=>{
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