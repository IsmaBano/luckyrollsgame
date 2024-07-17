import React from "react";
import styles from "./Hero.module.css"
 function Hero(props){
    return (
        <div className={styles.container}>
          <div className={styles.container2}>
            <h1>Lets Play game</h1>
            <button onClick={props.toggle}>start</button>
        </div>
        </div>
    );
 }
  export default Hero;