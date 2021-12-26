import React, {useState} from "react";
import ContextData from "../../context/data/contextData";
import classes from "./../../style.module.css";
import {useAuth0} from "@auth0/auth0-react";
import {Redirect} from "react-router-dom";


const Auth=()=>{
    const [login,setLogin]=useState()
    const{loginWithPopup,loginWithRedirect, logout,user, isAuthenticated}=useAuth0()
    function func() {

        loginWithRedirect();




    }
    function func1() {

            localStorage.setItem("token", '0')



    }

    return(

        <div className={classes.test1}>
            {isAuthenticated ?( <button onClick={ (e) => {
                    logout() ;
                    func1();
                }}> exit </button>)
             :     <Redirect to={'/shop'}/>   }



            {isAuthenticated &&(
                <pre style={{textAlign:'start'}}>

              <div>  Имя : {user.given_name}</div>
               <div> Фамилие : {user.family_name}</div>
                     <div> Псевдоним : {user.nickname}</div>
                  <img src={"https://lh3.googleusercontent.com/a/AATXAJzxcssSLxfYwWQp_nwUQ0YuBKkd7TxCtJrEceQX=s96-c"}  />
                </pre>


            )}
        </div>

    )

}
export default Auth