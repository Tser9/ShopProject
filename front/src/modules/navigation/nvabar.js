import React, {useState} from "react";
import {Link, Redirect} from "react-router-dom";
import classes from "./navigation.module.css"
import Modal from "./modal";
const token=localStorage.getItem("token")



const Navbar = () =>{
    const [modalActive, serModalActive]=useState(false)
    return (
        <div className={classes.navigation}>
        <div>
        <Link to="/buying"> Покупка</Link>
        </div>
        <div>

        <div className={classes.text11} onClick={()=>token==='0' ? (
        console.log(123123),
            serModalActive(true)
    ) : (
        window.location.href = "/cart"
    )
}  >Корзина</div>
    </div>
    <div>
    <Link to="/shop"> Магазин</Link>
        </div>
        <div>
        <Link to="/comments"> Отзывы</Link>
        </div>
        <Modal active={modalActive} setActive={serModalActive}/>
    </div>

);


}
export default Navbar