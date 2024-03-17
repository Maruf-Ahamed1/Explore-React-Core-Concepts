import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0)

    const handleClick= () =>{
        const newCount = count + 1;
        setCount(newCount)
    }

    const handleClick2 = () =>{
        const newCount2= count-1;
        setCount(newCount2)
    }
    
    return (
        <div style={{border:"2px solid red"}}>
            <h2>Counter: {count} </h2>
            <button onClick={handleClick}>Add</button>
            <button onClick={handleClick2}>Remove</button>
        </div>
    )
}