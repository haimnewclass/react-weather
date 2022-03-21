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
export const reducerWeather=(state,action)=>{
    //export const reducerWeather=(state={},action)=>{

    console.log('reducer');
    console.log(state);
    console.log(action);
    const resetO = {lastSearthResult:{},history:[],refresh:0};
    if(state===0)
    {
        state = resetO;                                                                         
    }
   
    let tmp={};

    switch(action.type)                                                                                                                                                                                        
    {
        case "WEATHER.SEARCH":            
            Object.assign(tmp,state);
            Object.assign(tmp.lastSearthResult,action.data);
            
        return tmp;
        break;
        case "WEATHER.ADD-TO-HISTORY":
            Object.assign(tmp,state);
            tmp.history.push(action.data);
            return tmp;
        break;
            case "WEATHER.CLEAR":
        return resetO;
        break;
        
        default:
            return 0;
    }

}
