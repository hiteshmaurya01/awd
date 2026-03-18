import { useState } from 'react';
import Count from './component/Counter';

import './App.css'

function App() {

  const [counter, setCounter]  = useState(15)

  //let counter = 15

  const addValue = () => {
    setCounter(counter + 1)

    
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  
  return (
    <>
      <Count counter={counter} addValue={addValue} removeValue={removeValue}/>
      
    </>
  )
}

export default App