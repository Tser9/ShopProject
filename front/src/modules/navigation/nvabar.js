import React from "react";
import {Link} from "react-router-dom";
import classes from "./navigation.module.css"
const Navbar = () =>{
    return (
        <div className={classes.navigation}>
               <div>
                   <Link to="/courses"> Тест</Link>
               </div>
            <div>
                <Link to="/shop">Корзина</Link>
            </div>
            <div>
                <Link to="/news"> Магазин</Link>
            </div>

        </div>

    );


}
export default Navbar