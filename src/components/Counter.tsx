import { useState } from "react";
import classes from "./Counter.module.scss"

export const Counter = () => {
    const [count, setCount] = useState(0);

    function onCountClick() {
        setCount(count + 1)
    }

    return(
        <div>
            <h1>{count}</h1>
            <button className={classes.btn} onClick={onCountClick}>Click to +1</button>
        </div>
    )
}