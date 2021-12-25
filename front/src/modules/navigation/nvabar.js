import React from "react";
import {Link} from "react-router-dom";
import classes from "./navigation.module.css"
const Navbar = () =>{
    return (
        <div className={classes.navigation}>
               <div>
                   <Link to="/buying"> Покупка</Link>
               </div>
            <div>
                <Link to="/cart">Корзина</Link>
            </div>
            <div>
                <Link to="/shop"> Магазин</Link>
            </div>

        </div>

    );


}
export default Navbar