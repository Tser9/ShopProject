import React from "react";

import {Route, Routes, Switch} from "react-router-dom";
import Courses from "./routes/courese/courese";
import News from "./routes/news/news";
import shop from "./routes/shop/shop";
import General from "./routes/general/general";
import ContextData from "./context/data/contextData";
import ReducerData from "./context/data/reducerData";
import StateData from "./context/data/stateData";
import ReducerTwoData from "./context/data/redtwo";

function App() {

    const [stateData, dispatchData,arr]=React.useReducer(ReducerData, StateData)
    const [stateDataTwo, dispatchDataTwo]=React.useReducer(ReducerTwoData, StateData)

  return (

      <Switch>
          <ContextData.Provider value={{stateDataTwo, dispatchDataTwo}}>
          <ContextData.Provider value={{stateData, dispatchData,arr}}>
              <Route path="/news" component={News}/>
          <Route path="/" exact component={General}/>
              <Route path="/courses" component={Courses}/>
          </ContextData.Provider>

        <Route path="/shop" component={shop}/>
      </ContextData.Provider>

      </Switch>


  );
}

export default App;
