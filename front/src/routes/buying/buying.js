import React, {useState} from "react";
import classes from "../../style.module.css"
import Navbar from "../../modules/navigation/nvabar";
import Header from "../../modules/navigation/header";
import ContextData from "../../context/data/contextData";

import {Link} from "react-router-dom";



const Buying=()=> {
    const [login,setLogin]=useState()
    const [items, setItems] = useState([]);
    const handleSubmit = (e) => {

        e.preventDefault();
        fetch('http://127.0.0.1:8000/api/cart'
        ).then(res => res.json())

            .then(
                (result) => {
                    setItems(result);
                    console.log(JSON.stringify(result));
                    console.log(123)
                },


            )

        console.log(items.filter(item => item.id > 113))


        for (let t = 0; t < items.length; t++) {
            fetch('http://127.0.0.1:8000/api/cart/' + items[t].id, {
                method: 'DELETE',
                headers: {"Content-Type": "application/json"},
            }).then(() => {

                console.log(JSON.stringify(items[t].id))
            })

        }


    }

    return (
        <div >

        <div className={classes.main}>
        <div className={classes.navigation}>
        <Navbar/>

        </div>
        <div className={classes.content}>
        <Header onLoad={handleSubmit} />
    <form className={classes.Forms}>
        <dev>
        Номер карты:
        <input type="text" name="name"/>
        </dev>
        <dev style={{marginTop: "10px"}}>
    Годен до:
        <input type="text" name="name"/>
        </dev>
        <dev style={{marginTop: "10px"}}>
    CVV:
        <input type="text" name="name"/>
        </dev>
        </form>
        <div style={{cursor:'pointer'}} className={classes.button2} onClick={handleSubmit}> Оплатить</div>
        </div>

        </div>
    {login}
</div>
)



}
export default Buying