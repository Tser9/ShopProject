import React from "react";
import classes from "../../style.module.css";
import Navbar from "../../modules/navigation/nvabar";
import Header from "../../modules/navigation/header";
import ContextData from "../../context/data/contextData";
//import NewCart from "./newcartitem/newcart";
//import NewItem from "../shop/modules/newitem";
import {Link, useHistory} from "react-router-dom";
import CommentItem from "./modules/commentItem";
//import Courses from "../buying/buying";
//import Destroy from "../buying/vsevse";
//import Shop from "../shop/shop";

const Comments=()=>{

    const {stateData, dispatchData} = React.useContext(ContextData)
    const comments=stateData.news;

    React.useEffect(()=>{
        const fetchComments= async ()=>{
            try{
                const response=await fetch('http://127.0.0.1:8000/api/comments')
                if (response.status===200){
                    const result= await   response.json()
                    dispatchData({
                        type:"FETCH_COMMENTS",
                        payload: result
                    })
                }
            } catch (e) {
                console.log(e)
            }
        }
        fetchComments()
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

                </div>

            </div></div>
    )
}
export default Comments