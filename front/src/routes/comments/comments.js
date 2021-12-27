import React, {useState} from "react";
import classes from "../../style.module.css";
import Navbar from "../../modules/navigation/nvabar";
import Header from "../../modules/navigation/header";
import ContextData from "../../context/data/contextData";
import {Link, useHistory} from "react-router-dom";

import CommentItem from "./modules/commentItem";
import Modal from "../../modules/navigation/modal";
const token=localStorage.getItem("token")

const Comments=()=>{   const [modalActive, serModalActive]=useState(false)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {stateDataThree, dispatchDataThree} = React.useContext(ContextData)
    const comments=stateDataThree.comments;
    const [value,setValue] =useState()
    const [value1,setValue1] =useState()
    const handleSubmit = (e) => {
        e.preventDefault();console.log(token);console.log(value1);
        fetch('http://127.0.0.1:8000/api/comments',{
            method: 'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({"comment_id": '',"fio":token,"feedback":value1})

        }).then(()=>{    window.location.reload();
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
    Комментарий:
        <input type="text" value1={value1} onChange={event => setValue1(event.target.value)}/>
    </dev>
    </form>
    <div style={{cursor:'pointer'}} className={classes.button2} onClick={()=>token==='0' ? (

            serModalActive(true)
    ) : (
        handleSubmit()
    )
    }  >Отправить комментарий</div>
    </div>
    </div>

    </div> <Modal active={modalActive} setActive={serModalActive}/></div>
)

}
export default Comments