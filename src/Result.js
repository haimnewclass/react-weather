import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import {SearchAction,clearAction} from './Reducers/weather_reducer';

let RunHttpFlag = true;

export const Result = ()=>{

    let weaterState = useSelector(s=>s.weather);

    
    // https://api.weatherapi.com/v1/current.json?key=b480e7a490374b44be472511222103&q=London&aqi=no
    return <div>Page Result
        **
temp_c:{weaterState?.lastSearthResult?.current?.temp_c}<br/>
humidity:{weaterState?.lastSearthResult?.current?.humidity}<br/>
cloud:{weaterState?.lastSearthResult?.current?.cloud}<br/>
 
    </div>
}