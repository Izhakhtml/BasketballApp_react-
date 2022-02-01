import React from "react";
import { ContextProvider } from "./ContextProvider.component";
import Game from "./Game.component";
const Home = ()=>{
return(
<ContextProvider>
            <Game/>
</ContextProvider>
)    
}
export default Home;