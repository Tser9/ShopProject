const ReducerTwoData=(state, action)=>{
    switch (action.type){
        case "FETCH_NEWS":


            return {
                ...state,
                shop:action.payload

            }
        default:
            return state

    }


}
export default ReducerTwoData