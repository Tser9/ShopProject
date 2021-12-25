import React from "react";
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

    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(()=>{
        const fetchShop= async ()=>{
            try{
                const response=await fetch('http://127.0.0.1:8000/api/cart')
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
        <Link  className={classes.buy} to={"/buying"} > Покупка</Link>
        </div>

        </div></div>
)

}
export default Comments