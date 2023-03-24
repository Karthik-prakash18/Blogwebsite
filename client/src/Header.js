import { useContext,useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { UserContext } from "./UserContext";
export default function Header(){
  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(()=>{
    fetch('https://shy-pear-nematode-tie.cyclic.app/profile',{
      credentials:'include',
    }).then(response => {
      response.json().then(userInfo=>{
        setUserInfo(userInfo);
      });
    })
  },[]);

  function logout(){
    fetch('https://shy-pear-nematode-tie.cyclic.app/logout',{
        credentials:'include',
        method:'POST',
    });
    setUserInfo(null);
  }

  const username=userInfo?.username;
    return (
        <header>
        <Link to="/" className="logo">MyBlog</Link>
        <nav>
          {username && (
            <>
              
              <Link to="/create">Create a new post</Link> 
              <a onClick={logout}>Logout</a>
              {/* <Link to="/">Logout</Link> */}
            </>
          )}
          {!username && (
            <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            </>
          )}
          
        </nav>
      </header>
    );
}