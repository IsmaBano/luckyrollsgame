import styles from "./Square.module.css";


function Square({score,selectednum,setselectednum}) {
    const arraynum=[1,2,3,4,5,6];
    const changeselect=(value)=>{
      setselectednum(value);
    }
  return (
    <div className={styles.sqr}>
    <div className={styles.square}>
        <h1 >{score}</h1>
        <h3>Total Score</h3>
    </div>
    <div className={styles.mbox}>
        {arraynum.map((value,i) => ( <div className={selectednum===value?styles.selected:styles.box}  onClick={()=>changeselect(value)} key={i}>{value}</div>)
)}
    </div>
    </div>
  );
}

export default Square;