import React from "react";

import classes from "./navigation.module.css"
import {Link} from "react-router-dom";
const token= (localStorage.getItem("token")==0) ? "Вы не авторизованы" : localStorage.getItem("token");
const Header = () =>{
    return (
        <div className={classes.header}>
        <br></br>
            <div className={classes.name}>Магазин "Вкусно"</div>
            <div className={classes.token}>{token}</div>
            <div className={classes.login}>
                <Link to={"/auth"} > <div className={classes.textLogin}>Login</div> </Link>
            </div>
        </div>
    )


}
export default Header