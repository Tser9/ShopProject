import React from "react";
import classes from "../../style.module.css";
import Navbar from "../../modules/navigation/nvabar";
import Header from "../../modules/navigation/header";
import {Link} from "react-router-dom";



const aboutus=()=>{



    return(
        <div>
            <div className={classes.main}>
                <div className={classes.navigation}>
                    <Navbar />

                </div>
                <div className={classes.content}>
                    <Header />
        <div className={classes.about}>
                    <div>Мы - команда начинающих разработчиков</div>

                    <div>Наша задача - сделать мир лучше, приятнее и красивее</div>

                    <div>Поэтому мы решили создать вот такую красоту</div>

                    <div>В наших планах в ближайшие пять лет преобразить весь Интернет в благоухающее цветущее месево</div>

                    <div>Если вы хотите поддержать нас, свяжитесь с нами: </div>
    <br></br>
                    <a href="https://vk.com/tseren4ik">Церен Будиев</a>
                    <br></br>
                    <a href="https://vk.com/pok_laad">Гончарук Даниил</a>
                    <br></br>
                    <a href="https://github.com/Tser9/webproject">GitHub</a>
                    <br></br>
                    < img src="https://i.imgur.com/nSgvgmS.png"/>
                </div>
        </div>

            </div></div>
    )

}
export default aboutus