import { useState } from "react";
import "./App.css";
import Hero from './components/Hero.jsx';
import Game from "./components/Game.jsx";


function App() {
  const [isGamestarted,setisGamestarted]=useState(false);
  const toggleGamePlay=()=>{
    setisGamestarted((prev)=>(!prev));
  };
  return (
    <div>
     { isGamestarted?<Game/>:<Hero toggle={toggleGamePlay}/>}
    </div>
  );
}

export default App;
