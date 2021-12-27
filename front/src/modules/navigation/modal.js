import React from "react";
import "./modal.css"
const Modal=({active,setActive})=>{
    return(
        <div className={active ? "modal active":'modal'} onClick={()=>setActive(false)}>
            <div className="modal_content" onClick={e=>e.stopPropagation()}>
                Вы не авторизованы, корзина недоступна
            </div>

        </div>



)}
export default Modal