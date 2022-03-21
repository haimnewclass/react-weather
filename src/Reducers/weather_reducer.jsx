// Action
export const SearchAction=(data)=>{
    return {type:'WEATHER.SEARCH',
            data:data};
}
export const addToHistoryAction=(data)=>{
    return {type:'WEATHER.ADD-TO-HISTORY',
            data:data};
}
export const clearAction=()=>{
    return {type:'WEATHER.CLEAR'};
}

// Reducer
//export const reducerWeather=(state={lastSearthResult:'',history:[]},action)=>{
    export const reducerWeather=(state={},action)=>{

    

    switch(action.type)
    {
        case "WEATHER.SEARCH":
        return state=action.data;
        break;
        case "WEATHER.ADD-TO-HISTORY":
            return state=action.data;
        break;
            case "WEATHER.CLEAR":
        return state={};
        break;
        
        default:
            return 0;
    }

}
