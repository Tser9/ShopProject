import React from "react";
import ContextData from "../../context/data/contextData";
import classes from "./testcss.scss";
import {useAuth0} from "@auth0/auth0-react";

const General=()=>{

    const{loginWithPopup,loginWithRedirect, logout,user, isAuthenticated}=useAuth0()


    return(

        <div className={classes.test1}>
             <div> qwesd</div>
<button onClick={loginWithRedirect}> CLICK </button>
            <button onClick={logout}> exit </button>
       <h3>user is {isAuthenticated ? 'logged':'notloggoed'}</h3>
            {isAuthenticated &&(
                <pre style={{textAlign:'start'}}>
                    {JSON.stringify(user,null,2)}
                    {user.name}
                </pre>


            )}
        </div>

    )

}
export default General