import React from "react";
import classes from "../../style.module.css";
import Navbar from "../../modules/navigation/nvabar";
import Header from "../../modules/navigation/header";
import ContextData from "../../context/data/contextData";
import NewItem from "./modules/newitem";
import {Link} from "react-router-dom";

const Shop=()=>{

    const {stateData, dispatchData} = React.useContext(ContextData)
    const news=stateData.news;

    React.useEffect(()=>{
        const fetchNews= async ()=>{
            try{
                const response=await fetch('http://127.0.0.1:8000/api/products')
                if (response.status===200){
                    const result= await   response.json()
                    dispatchData({
                        type:"FETCH_NEWS",
                        payload: result
                    })
                }
            } catch (e) {
                console.log(e)
            }
        }
        fetchNews()
    },[])



    return(
        <div>
            <div className={classes.main}>
                <div className={classes.navigation}>
                    <Navbar />

                </div>
                <div className={classes.content}>
                    <Header />
                    <div className={classes.product}>

                        {news.map((elem,index)=>{
                                return(

                                    <NewItem data={elem} key ={index} />

                                )

                            }

                        )}
                    </div>

                </div>

            </div></div>
    )

}
export default Shop