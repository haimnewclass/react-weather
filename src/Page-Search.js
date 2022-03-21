import { useEffect, useState } from "react";

let RunHttpFlag = true;

export const PageSearch = ()=>{

    const [state,setState] = useState(0);

    const refresh=()=>{
        setState(Math.random());
    }

    const load=()=>
    {                                                                             
      console.log('Start Load');
      let url="https://api.weatherapi.com/v1/current.json?key=b480e7a490374b44be472511222103&q=London&aqi=no";
      fetch(url)
      .then(res => res.json())
      .then(
          (result) => {      
      console.log("OK");
      console.log(result);  
           
      },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
          alert(error);
  
          }
      )                                                                                                                                               
    }

    useEffect(load,[RunHttpFlag]);
    
    // https://api.weatherapi.com/v1/current.json?key=b480e7a490374b44be472511222103&q=London&aqi=no
    return <div>Page Search
        <button onClick={()=>{
            console.log("Get button");
            console.log(RunHttpFlag);
            RunHttpFlag=!RunHttpFlag;
            refresh();
                    
        }}>Get</button> 
        
        <input onChange={(e)=>{
           
        }
        
    }></input>


 
    </div>
}