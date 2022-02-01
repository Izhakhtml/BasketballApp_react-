import React,{useContext} from "react";
import { ProviderCon } from "./ContextProvider.component";
import Court from "./Court.component";
const Game =()=>{
const ContextValue = useContext(ProviderCon)
const ValueInput =(e)=>{
switch (e.target.name) {
    case "TeemNameA":
    ContextValue.object = {TeemNameA:e.target.value, TeemNameB:ContextValue.object.TeemNameB,CourtName:ContextValue.object.CourtName}    
    break;
        case "TeemNameB":
        ContextValue.object = {TeemNameA:ContextValue.object.TeemNameA,TeemNameB:e.target.value,CourtName:ContextValue.object.CourtName} 
        break;
            case "CourtName":
            ContextValue.object = {TeemNameA:ContextValue.object.TeemNameA,TeemNameB:ContextValue.object.TeemNameB,CourtName:e.target.value} 
            break;
    default:
        console.log("error");
        break;
}
} 
return(
    <div>
        <Court/>
                  <h1>Teem Name A:{ContextValue.object.TeemNameA }</h1>        
       <input  onChange={ValueInput} type="text"name="TeemNameA" /><br />
                  <h1>Teem Name B:{ContextValue.object.TeemNameB }</h1><br />                  
       <input  onChange={ValueInput} type="text"name="TeemNameB" /><br />
                  <h1>Court Name:{ContextValue.object.CourtName }</h1><br />                
       <input  onChange={ValueInput} type="text"name="CourtName" /><br />
  <button onClick={()=>{ContextValue.setObject(ContextValue.object);}}>Send</button>
    </div>
)
}
export default Game;