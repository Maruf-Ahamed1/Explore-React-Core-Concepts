import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'



function App() {

//no parameter
  function handleClick(){
    alert('Button Clicked')
  }

  //jodi parameter nei 
  const addToFive = (num) =>{
    alert(num + 5)
  }

  return (
    <>
       <h1> React Core Concept-2</h1>
    {/* Friends UserEffect */}
    <Friends></Friends>

    {/* UserEffect  */}
    <Users></Users>


    {/* ___Team jsx Starts____ */}
    <Team></Team>
 

      <Counter></Counter>


       <button onClick={handleClick}>Click me</button>
       {/* Parameter */}
       <button onClick={() => addToFive(3)}>Click me 2</button>
    </>
  )
}

export default App
