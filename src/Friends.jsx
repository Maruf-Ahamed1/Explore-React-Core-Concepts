import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend'
export default function Friends(){
//____ Step-1---->state to hod data
    const [countFriends,setFriends]= useState([])
//____ Step-2--->use effect with dependency array
useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{return response.json()})
    .then ((data) => setFriends(data))
}, [])
    return (
        <div className='box'>
            <h1>Friends:{countFriends.length}</h1>
            {
                countFriends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}


