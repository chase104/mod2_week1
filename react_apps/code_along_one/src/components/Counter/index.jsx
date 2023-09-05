import { useState } from 'react'


const Counter = () => {
    const [count, setCount] = useState(0);

    
    // setCount(7)
    const addOne = () => {
        setCount(count+1)
    }
    const minusOne = () => {
        setCount(count-1)
    }
  return (
    <div>
        <h3>Current Count: {count}</h3>
        {  count > 20 ? <p>Wow that is a high number!</p> : <p>That is a low number</p>}
        {  count > 20 && <p>You like clicking the + button!</p>  }
        <button onClick={addOne} >Add +</button>
        <button onClick={minusOne} >Subtract -</button>
        {/* if count is > 20, show message saying "Wow that's a high count!" */}
       
    </div>
  )
}

export default Counter