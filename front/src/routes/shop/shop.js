import React, {useState} from "react";
import classes from "../../style.module.css";
import Navbar from "../../modules/navigation/nvabar";
import Header from "../../modules/navigation/header";
import ContextData from "../../context/data/contextData";
import NewItem from "./modules/newitem";
import {Link} from "react-router-dom";
const token=localStorage.getItem("token")
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
                        <button style={{ height: '50%', marginTop: '180px', marginLeft: '100px' }} className={classes.text11} onClick={()=>token==='tser9' ? (

                            window.location.href = "/procductput"
                        ) : (
                            console.log(123123)
                        )
                        }  >Добавить</button>
                    </div>

                </div>

            </div></div>
    )

}
export default Shop