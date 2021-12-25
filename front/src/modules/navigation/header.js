import React from "react";

import classes from "./navigation.module.css"
import {Link} from "react-router-dom";

const Header = () =>{
    return (
        <div className={classes.header}>
            PROJECT KEKICH
<Link className={classes.login} to={"/auth"} > Login </Link>
        </div>
    )


}
export default Header