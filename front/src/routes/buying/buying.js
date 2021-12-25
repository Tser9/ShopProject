import React, {useState} from "react";
import classes from "../../style.module.css"
import Navbar from "../../modules/navigation/nvabar";
import Header from "../../modules/navigation/header";
import ContextData from "../../context/data/contextData";

import {Link} from "react-router-dom";


const Buying=()=>{
    const [items, setItems] = useState([]);
    const handleSubmit = (e) => {

        e.preventDefault();
        fetch('http://127.0.0.1:8000/api/cart'
        ).then(res=>res.json() )

            .then(
                (result) => {
                    setItems(result);console.log(JSON.stringify(result));console.log(123)
                },

                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.

            )
        console.log((items.filter(item => item.id >0)))

        console.log(items.filter(item => item.id >33))


         for (let t =0;t<items.length;t++) {
        fetch('http://127.0.0.1:8000/api/cart/'+items[t].id,{
            method: 'DELETE',
            headers:{"Content-Type":"application/json"},
        }).then(()=>{

            console.log(JSON.stringify(items[t].id))
        })

        }


    }

    return(
        <div>
            <div className={classes.main}>
                <div className={classes.navigation}>
                    <Navbar />

                </div>
                <div className={classes.content}>
                    <Header />
                    <form className={classes.Forms}>
                      <dev>
                            Номер карты:
                            <input  type="text" name="name" />
                      </dev>
                        <dev style={{ marginTop:"10px" }}>
                            Годен до:
                            <input type="text" name="name" />
                        </dev>
                        <dev  style={{ marginTop:"10px" }}>
                            CVV:
                            <input type="text" name="name" />
                        </dev>
                    </form>
<div className={classes.button2} onClick={handleSubmit}> ToUCH</div>
                </div>

            </div>

        </div>
    )



}
export default Buying