import React from "react";
import classes from "../../style.module.css";
import Navbar from "../../modules/navigation/nvabar";
import Header from "../../modules/navigation/header";
import ContextData from "../../context/data/contextData";
import NewCart from "./newcartitem/newcart";
import NewItem from "../shop/modules/newitem";
import {Link, Redirect, useHistory} from "react-router-dom";
import Courses from "../buying/buying";
import Destroy from "../buying/vsevse";


const cart=()=>{
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
    function BoilingVerdict(elem,index) {
        // eslint-disable-next-line no-unused-expressions
        localStorage.setItem("token1", elem.user_id),console.log(token1)
        if(token1==='2'){ }
        else { console.log(123123)}



    }

    const token1=localStorage.getItem("token1")
    return(
        <div>
            <div className={classes.main}>
                <div className={classes.navigation}>
                    <Navbar />

                </div>
                <div className={classes.content}>
                    <Header />
                    <div className={classes.product}>

                        {shop.map((elem,index)=>{return( <NewCart data={elem} key ={index} />)





                            }







                    )}
        </div>
        <div className={classes.buy}>
                   <Link to={"/buying"} > Покупка</Link>
        </div>
                </div>

            </div></div>
    )

}
export default cart