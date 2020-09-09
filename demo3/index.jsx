import React, { useState } from 'react'
import ReactDom from 'react-dom'

const App = () => {
    const [counter, setcounter] = useState(0)
    return (<>
        Counter: {counter}
        <button onClick={() => setcounter(val => val + 1)}>increment</button>
		<button onClick={()=> setcounter(val => val - 1)}>decrement</button>
    </>)
}
ReactDom.render(<App />, document.getElementById('app'))
