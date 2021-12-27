import React, {useState} from "react";
import ContextData from "../../context/data/contextData";
import classes from "./../../style.module.css";
import {useAuth0} from "@auth0/auth0-react";
import {Link, Redirect} from "react-router-dom";


const General=()=>{
    const [login,setLogin]=useState()
    const{loginWithPopup,loginWithRedirect, logout,user, isAuthenticated}=useAuth0()
    function func() {
        loginWithRedirect();
    }
    function func1() {
        localStorage.setItem("token", '0')
    }

    const token=localStorage.getItem("token")
    return(

        <div className={classes.test1}>

        <button style={{cursor:'pointer'}} className={classes.but1}  onClick={func }> LogIn </button>

        <Link to={"/shop"} className={classes.but2} onClick={ (e) => {

    }}> Назад в меню </Link>
    <h3>{isAuthenticated ? (  localStorage.setItem("token", user.name), <Redirect to={'/shop'}/>):''}</h3>
    {isAuthenticated &&(
    <pre style={{textAlign:'start'}}>
        {JSON.stringify(user,null,2)}

        {token}
    </pre>


    )}
    </div>

    )

    }
    export default General