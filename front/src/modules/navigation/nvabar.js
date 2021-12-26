import React, {useState} from "react";
import {Link, Redirect} from "react-router-dom";
import classes from "./navigation.module.css"
import Modal from "./modal";
const token=localStorage.getItem("token")



const Navbar = () =>{
    const [modalActive, serModalActive]=useState(false)
    return (
        <div className={classes.navigation}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div>
            <Link to="/buying"> Покупка</Link>
        </div>
        <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className={classes.text11} onClick={()=>token==='0' ? (
        console.log(123123),
            serModalActive(true)
    ) : (
        window.location.href = "/cart"
    )
}  >Корзина</div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div>
    <Link to="/shop"> Магазин</Link>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div>
        <Link to="/comments"> Отзывы</Link>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
            <Link to="/aboutus"> О нас</Link>
        <Modal active={modalActive} setActiААve={serModalActive}/>
    </div>

);


}
export default Navbar