import React, {useState} from "react";
import ContextData from "../../context/data/contextData";
import classes from "./../../style.module.css";
import {useAuth0} from "@auth0/auth0-react";
import {Redirect} from "react-router-dom";


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
        <div> qwesd</div>
        <button  onClick={func }> CLICK </button>
        <button onClick={ (e) => {
        logout() ;
        func1();
    }}> exit </button>
    <h3>user is {isAuthenticated ? (  localStorage.setItem("token", user.name),'logged', <Redirect to={'/shop'}/>):'notloggoed'}</h3>
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