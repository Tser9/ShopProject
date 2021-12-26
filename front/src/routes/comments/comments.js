import React, {useState} from "react";
import classes from "../../style.module.css";
import Navbar from "../../modules/navigation/nvabar";
import Header from "../../modules/navigation/header";
import ContextData from "../../context/data/contextData";
import {Link, useHistory} from "react-router-dom";

import CommentItem from "./modules/commentItem";


const Comments=()=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {stateDataThree, dispatchDataThree} = React.useContext(ContextData)
    const comments=stateDataThree.comments;
    const [value,setValue] =useState()
    const [value1,setValue1] =useState()
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://127.0.0.1:8000/api/comments',{
            method: 'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({"comment_id": '',"fio":value,"feedback":value1})

        }).then(()=>{
        })


    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(()=>{
        const fetchShop= async ()=>{
            try{
                const response=await fetch('http://127.0.0.1:8000/api/comments')
                if (response.status===200){
                    const result= await   response.json()
                    dispatchDataThree({
                        type:"FETCH_NEWS",
                        payload: result
                    })
                }
            } catch (e) {
                console.log(e)
            }
        }
        fetchShop()
    },[])



    return(
        <div>

        <div className={classes.main}>
        <div className={classes.navigation}>
        <Navbar />

        </div>
        <div className={classes.content}>
        <Header />
        {comments.map((elem,index)=>{
                    return(

                        <CommentItem data={elem} key ={index} />

                )

                }

            )}
        <div className={classes.content}>
        <form className={classes.Forms}>
        <dev style={{marginTop: "10px"}}>
    Автор:
        <input type="text" value={value} onChange={event => setValue(event.target.value)}/>
    </dev>
    <dev style={{marginTop: "10px"}}>
    Комментарий:
        <input type="text" value1={value1} onChange={event => setValue1(event.target.value)}/>
    </dev>
    </form>
    <div className={classes.button2} onClick={handleSubmit}>Отправить комментарий</div>
    </div>
    </div>

    </div></div>
)

}
export default Comments