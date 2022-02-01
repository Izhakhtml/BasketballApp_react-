import React,{useState} from "react";
export const ProviderCon = React.createContext();
export const ContextProvider =({children})=>{
const [object,setObject] = useState({}) 
return(
   <ProviderCon.Provider value={{object,setObject}}>
       {children}
   </ProviderCon.Provider>
)
}