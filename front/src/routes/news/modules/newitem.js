import React from "react";
import classes from "./../../../style.module.css";
import {Link} from "react-router-dom";
import axios, {Axios} from "axios";

const NewItem = ({data}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://127.0.0.1:8000/api/cart',{
            method: 'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(data)

        }).then(()=>{

            console.log(JSON.stringify(data))
        })


    }


    return (

        <div className={classes.news} >

                <img className={classes.picture} src={data.image}/>

            <div><Link to="/courses">
                <div className={classes.text3}>{data.title} </div></Link>
                <div>{data.description} </div>
                <div className={classes.button} onClick={handleSubmit}> Добавить в корзину </div>
            </div>
        </div>
    )
}
export default NewItem

