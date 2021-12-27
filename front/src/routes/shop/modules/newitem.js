import React from "react";
import classes from "./../../../style.module.css";
import {Link} from "react-router-dom";
import axios, {Axios} from "axios";
const token=localStorage.getItem("token")
const NewItem = ({data}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://127.0.0.1:8000/api/cart',{
            method: 'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(data)

        }).then(()=>{console.log(data)


        })

    }

    const handle = (e) => {
        e.preventDefault();
        fetch('http://127.0.0.1:8000/api/products/'+data.id,{
            method: 'DELETE',
            headers:{"Content-Type":"application/json"},


        }).then(()=>{
            window.location.reload();

        })


    }


    return (

        <div className={classes.news} >

        <img className={classes.picture} src={data.image}/>

    <div>
        <div className={classes.text3}>{data.title} </div>
    <div>{data.description} </div>
    <div style={{cursor:'pointer'}} className={classes.button} onClick={handleSubmit}> Добавить в корзину </div>
        <div onClick={()=>token==='tser9' ? (console.log(JSON.stringify(data.id)),
            handle
        ) : (
            console.log(123123)
        )
        } style={{cursor:'pointer'}} className={classes.button1} > Удалить </div>
    </div>
    </div>
)
}
export default NewItem

