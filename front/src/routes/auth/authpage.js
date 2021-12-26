import React, {useState} from "react";
import ContextData from "../../context/data/contextData";
import classes from "./../../style.module.css";
import {useAuth0} from "@auth0/auth0-react";
import {Link, Redirect} from "react-router-dom";


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

            {isAuthenticated &&(
            <div className={classes.user}>
                <pre style={{textAlign:'start'}}>
            < img src="https://grilliato-nsk.ru/upload/green-check.png" alt="Название изображения"/>
                <div >{user.given_name}, Вы выполнили вход в систему</div>
            <br></br>
            <div >Теперь вам доступа <Link to="/cart">корзина</Link></div>
            <br></br>
            <br></br>
            <div >Ваши данные: </div>
            <br></br>
              <div>Имя : {user.given_name}</div>
               <div>Фамилия : {user.family_name}</div>
            <div >Псевдоним : {user.nickname}</div>
            <br></br>
    {isAuthenticated ?
        ( <button styles={{ backgroundColor: "#44014C", width: "300px", minHeight: "200px"}} onClick={ (e) => { logout(); func1(); }}> exit </button>)
    :

    <Redirect to={'/'}/>   }

                </pre>
            </div>


            )}
        </div>

    )

}
    export default Auth