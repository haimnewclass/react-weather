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
    else{
        console.log('Refresh counter');
        if(state)
        {
       if(state.refresh!=undefined)
        {
            console.log(state.refresh);
            state.refresh = Math.random();
        }
        }
        
    }

    switch(action.type)                                                                                                                                                                                        
    {
        case "WEATHER.SEARCH":
            let tmp={}
            Object.assign(tmp,state);
            Object.assign(tmp.lastSearthResult,action.data);
            //Object.assign(state,tmp);
        return tmp;
        break;
        case "WEATHER.ADD-TO-HISTORY":
          //  state.history.push(action.data)
//            Object.assign(state.history.push(action.data);
            return state;
        break;
            case "WEATHER.CLEAR":
        return resetO;
        break;
        
        default:
            return 0;
    }

}
