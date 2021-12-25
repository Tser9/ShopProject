import React from "react";
import classes from "../../style.module.css";
import Navbar from "../../modules/navigation/nvabar";
import Header from "../../modules/navigation/header";
import ContextData from "../../context/data/contextData";
import NewCart from "./newcartitem/newcart";
import NewItem from "../news/modules/newitem";
import {Link, useHistory} from "react-router-dom";
import Courses from "../courese/courese";
import Destroy from "../courese/vsevse";


const shop=()=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {stateDataTwo, dispatchDataTwo} = React.useContext(ContextData)
    const shop=stateDataTwo.shop;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(()=>{
        const fetchShop= async ()=>{
            try{
                const response=await fetch('http://127.0.0.1:8000/api/cart')
                if (response.status===200){
                    const result= await   response.json()
                    dispatchDataTwo({
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
                    {shop.map((elem,index)=>{
                            return(

                                <NewCart data={elem} key ={index} />

                            )

                        }

                    )}
                   <Link  className={classes.buy} to={"/courses"} > Покупка</Link>
                </div>

            </div></div>
    )

}
export default shop