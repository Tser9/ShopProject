import React from "react";

import {Route, Routes, Switch} from "react-router-dom";
import Courses from "./routes/buying/buying";
import Shop from "./routes/shop/shop";
import cart from "./routes/cart/cart";
import General from "./routes/general/general";
import ContextData from "./context/data/contextData";
import ReducerData from "./context/data/reducerData";
import StateData from "./context/data/stateData";
import ReducerTwoData from "./context/data/redtwo";
import Auth from "./routes/auth/authpage";
import Buying from "./routes/buying/buying";

function App() {

    const [stateData, dispatchData,arr]=React.useReducer(ReducerData, StateData)
    const [stateDataTwo, dispatchDataTwo]=React.useReducer(ReducerTwoData, StateData)

  return (

      <Switch>
          <ContextData.Provider value={{stateDataTwo, dispatchDataTwo}}>
          <ContextData.Provider value={{stateData, dispatchData,arr}}>
              <Route path="/shop" component={Shop}/>
              <Route path="/auth" component={Auth}/>
          <Route path="/" exact component={General}/>
              <Route path="/buying" component={Buying}/>
          </ContextData.Provider>

        <Route path="/cart" component={cart}/>
      </ContextData.Provider>

      </Switch>


  );
}

export default App;
