import React, {useState} from "react";
import classes from "../../style.module.css";
import Navbar from "../../modules/navigation/nvabar";
import Header from "../../modules/navigation/header";


const Productput=()=>{
    const [value,setValue] =useState()
    const [value1,setValue1] =useState()
    const [value2,setValue2] =useState()
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://127.0.0.1:8000/api/products',{
            method: 'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({"id": '',"title":value,"description":value1, "image":value2})

        }).then(()=>{
        })


    }

    return(
        <div>
            <div className={classes.main}>
                <div className={classes.navigation}>
                    <Navbar />

                </div>
                <div className={classes.content}>
                    <Header />



                    <form className={classes.Forms}>
                        <div style={{marginTop: "10px"}}>
                            Навзание:
                            <input type="text" value={value} onChange={event => setValue(event.target.value)}/>
                        </div>
                        <div style={{marginTop: "10px"}}>
                            Описание:
                            <input type="text" value1={value1} onChange={event => setValue1(event.target.value)}/>
                        </div>
                        <div style={{marginTop: "10px"}}>
                            Изображение:
                            <input type="text" value2={value2} onChange={event => setValue2(event.target.value)}/>
                        </div>
                    </form>
<button onClick={handleSubmit}>Добавить</button>
                </div>

            </div></div>
    )

}
export default Productput