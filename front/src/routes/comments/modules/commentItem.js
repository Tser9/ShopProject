import React from "react";
import classes from "./../../../style.module.css";
import {Link} from "react-router-dom";
let arr = [];

const CommentItem = ({data}) => {
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



        <div>
        <div className={classes.text3} >{data.title} </div>
        <div>{data.description} </div>

        </div>

        </div>
)
}
export default CommentItem

