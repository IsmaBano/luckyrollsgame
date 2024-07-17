import {useState} from "react";
 import Square from "./Square";
 import imag1 from "../assets/dice-1.png";
 import imag2 from "../assets/dice-2.png";
 import imag3 from "../assets/dice-3.png";
 import imag4 from "../assets/dice-4.png";  
 import imag5 from "../assets/dice-5.png";
 import imag6 from "../assets/dice-6.png";
 import style from "./Game.module.css";


function Game(){
  const image=["",imag1,imag2,imag3,imag4,imag5,imag6];
  const[selectednum,setselectednum]=useState(0);
  const [showrules,setshowrules]=useState(false);
   const [score,setscore]=useState(0);

    const [random,setrandom]=useState(1);
    const changerule=()=>{setshowrules((prev)=>!prev)}
    const generaterandom=()=>{
      if(selectednum!=0){
         const val=Math.floor(Math.random() * 6) + 1;
        setrandom(val);
       if(val===selectednum){
        setscore((prev)=>prev+val);
      }
      else {
        setscore((prev)=>prev-1);
      }
    }
      setselectednum(0);
    }

const reset=()=>{setscore(0)}
    return (
    <div className={style.game}>
         <Square score={score} selectednum={selectednum} setselectednum={setselectednum}/>

        <div className={style.box}> 
            <div>
       <div onClick={generaterandom}> <img src={image[random]}  alt="dice" /> 
       <h3>Click to roll dice</h3></div>
       <div> <button onClick={reset} >Reset Score</button> </div>
      <div> <button onClick={changerule}>Show me Rules</button> </div>
       </div>
       </div>
       <div className={showrules?style.rulebox:style.notvisible}>
       <div className={style.rules}> 
        <h2>Rules</h2>
        <ul>
          <li>Select any number</li>
          <li>Then click on dice</li>
          <li>If both numbers are same score will get increased by that number</li>
          <li>otherwise score will be deducted by 1.</li></ul></div> </div>
    </div>
);
}
export default Game; 
