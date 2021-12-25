import React from "react";
import classes from "../../style.module.css"
import Navbar from "../../modules/navigation/nvabar";
import Header from "../../modules/navigation/header";
import ContextData from "../../context/data/contextData";

import {Link} from "react-router-dom";


const Buying=()=>{
    const handleSubmit = (e) => {

        e.preventDefault();
        fetch('http://127.0.0.1:8000/api/cart'
        ).then(res=>res.json() )
            .then(data=>console.log(data))

        for (let i = 0; i < 100; i++){
        fetch('http://127.0.0.1:8000/api/cart/'+i,{
            method: 'DELETE',
            headers:{"Content-Type":"application/json"},


        }).then(()=>{

            console.log(JSON.stringify(i))
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

            </div></div>
    )



}
export default Buying