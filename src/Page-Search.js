import { useEffect, useState } from "react";
import { Search } from "./Search";
import { Result } from "./Result";
 
export const PageSearch = ()=>{
    
    return(
    <div><Search/><Result/>
    </div>);
}