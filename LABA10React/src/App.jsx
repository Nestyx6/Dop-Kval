import { useState } from 'react'
import './App.css'
import Todo from './components/Todo.jsx';
import img1 from './components/images/f3.png';
import img2 from './components/images/f4.png';
import img3 from './components/images/f5.png';

function App() {
  const [count, setCount] = useState(0);

  function increment(){
    setCount((prevCount)=>{
      return prevCount +1;
    })
    setCount(prev=>prev)
  }

  function decrement(){
    setCount((prevCount)=>{
      return prevCount -1;
    })
    setCount(prev=>prev)
  }

  return (
    <>
      <div className='text'>Что вам нужно?</div>
      <div className="todo_list">
        <Todo title='one' img={img1}/>
        <Todo title='two' img={img2}/>
        <Todo title='three' img={img3}/>
      </div>
      <h3 className='text'>Count:{count}</h3>
      <div className='cont_butn'>
        <button className='butn_inc' onClick={increment}>+</button>
        <button className='butn_dec' onClick={decrement}>-</button>
      </div>
    </>
  )
}

export default App
