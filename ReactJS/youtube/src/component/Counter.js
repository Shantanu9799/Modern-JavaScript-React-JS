import { useState } from "react";
function Counter() {
    const [number, setNumber] = useState(0);
    function handelClick() {
        setNumber(number => number+1)
        console.log(number);
    }
    return (
        <>
        <h3 style={{color: "#fff"}}>{number}</h3>
        <button onClick={handelClick}>Add</button>
        </>
        
    )
}

export default Counter;