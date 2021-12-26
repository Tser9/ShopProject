import React from "react";
import classes from "./../../../style.module.css";
import {Link} from "react-router-dom";
let arr = [];

const CommentItem = ({data}) => {


    return (

        <div className={classes.coment} >




        <div>
        <div className={classes.text5} >{data.fio} </div>
        <div>{data.feedback} </div>

        </div>

        </div>
)
}
export default CommentItem

