const ReducerThreeData=(state, action)=>{
    switch (action.type){
        case "FETCH_NEWS":


            return {
                ...state,
                comments:action.payload

            }
        default:
            return state

    }


}
export default ReducerThreeData