import { useEffect, useState } from "react";
import { Search } from "./Search";
import { Result } from "./Result";
import { History } from "./History"; 
export const PageSearch = ()=>{
    
    return(
    <div><Search/><Result/><History/>
    </div>);
}