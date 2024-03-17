import { useState } from "react"

// ___Start  of the code____//
export default function Team(){
    
const [teamCount,setTeam]= useState (11)  //____This is react hook

const handleAdd = () => {
    const newTeam= teamCount + 1
    setTeam(newTeam)
}

const handleClick = () => {
    const newTeam= teamCount - 1
    setTeam(newTeam)
}

    const teamStyle={
            border:'2px solid purple', 
            padding: '10px',
            margin: '10px', 
            borderRadius:'20px'
    }
    
    return (
        <div style={teamStyle}>
            <h1>Player: {teamCount}</h1>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleClick}>Remove</button>
        </div>
    )
}