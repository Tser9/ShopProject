import React from "react";

import {Route, Routes, Switch} from "react-router-dom";
import Shop from "./routes/shop/shop";
import cart from "./routes/cart/cart";
import General from "./routes/general/general";
import ContextData from "./context/data/contextData";
import ReducerData from "./context/data/reducerData";
import StateData from "./context/data/stateData";
import ReducerTwoData from "./context/data/redtwo";
import Auth from "./routes/auth/authpage";
import Buying from "./routes/buying/buying";
import Comments from "./routes/comments/comments";
import ReducerThreeData from "./context/data/redthree";

function App() {

    const [stateData, dispatchData,arr]=React.useReducer(ReducerData, StateData)
    const [stateDataTwo, dispatchDataTwo]=React.useReducer(ReducerTwoData, StateData)
    const [stateDataThree, dispatchDataThree]=React.useReducer(ReducerThreeData, StateData)
    return (

        <Switch>
        <ContextData.Provider value={{stateDataThree, dispatchDataThree}}>
<ContextData.Provider value={{stateDataTwo, dispatchDataTwo}}>
<ContextData.Provider value={{stateData, dispatchData,arr}}>
<Route path="/shop" component={Shop}/>
    <Route path="/auth" component={Auth}/>
    <Route path="/" exact component={General}/>
    <Route path="/buying" component={Buying}/>

    </ContextData.Provider>

    <Route path="/cart" component={cart}/>
    </ContextData.Provider>
    <Route path="/comments" component={Comments}/>
    </ContextData.Provider>
    </Switch>


);
}

export default App;
