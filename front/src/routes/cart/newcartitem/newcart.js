import React from "react";
import classes from "./../../../style.module.css";
import {Link} from "react-router-dom";
let arr = [];

const NewCart = ({data}) => {
    arr=arr+data.id;
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://127.0.0.1:8000/api/cart/'+data.id,{
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
                <div className={classes.text3} >{data.title} </div>
                <div>{data.description} </div>
                <div  className={classes.button1} onClick={handleSubmit}>Delete</div>
            </div>

        </div>
    )
}
export default NewCart

