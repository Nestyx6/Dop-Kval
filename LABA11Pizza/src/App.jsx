import { useState } from 'react'
import './App.css'
import Todo from './components/Todo.jsx';
import img1 from './components/images/piz.jpg';


function App() {


  return (
    <>
      <div className='text'>Самая класическая пицца по выгодной цене</div>
      <div className="todo_list">
        <Todo title='Пепперони' img={img1} text='Ничего лишнего! Томатный соус, колбаски пепперони и сыр моцарелла.'/>
        
        </div>
    </>
  )
}

export default App
