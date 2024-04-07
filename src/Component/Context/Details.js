import { createContext, useState } from "react";

export let DetailsContext=createContext();

export default function DetailsContextProvider(props){

let[ottp,SetOttp]=useState();
let[Details,SetDetails]=useState({})
    return <DetailsContext.Provider value={{ottp,SetOttp,Details,SetDetails}}>
{props.children}
    </DetailsContext.Provider>
}