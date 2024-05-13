import {useState} from "react";

function Todo(props) {
  const [count, setCount] = useState(0);

  function increment(){
    setCount((prevCount)=>{
      return prevCount +1;
    })
    setCount(prev=>prev)
  }

  function decrement(){
    setCount((prevCount)=>{
      if(count>=1) return prevCount -1;
      else return prevCount = 0;
    })
    setCount(prev=>prev)
  }
  
  function backet_done(){
      return alert('В корзине:' + [count]);
  }

  return (
    <div className="todo_item">
      <img src={props.img} className="todo_item__image"/>
      <div className="todo_item__text">{props.title}</div>
      <div className="todo_item__textabout">{props.text}</div>
      <select name="diam"  className="select_d">
        <option value="value1">20 см</option>
        <option value="value1">30 см</option>
        <option value="value1">40 см</option>
      </select>
      <div className="coast_text">От 500 &#8381;</div>
      <h3 className="request_text">Добавлено в заказ:{count}</h3>
      <div className="buts">
        <button className='butn_inc' onClick={increment}>+</button>
        <button className="backet" onClick={backet_done}>Корзина</button>
        <button className='butn_dec' onClick={decrement}>-</button>
      </div>
    </div>
  )
}

export default Todo
