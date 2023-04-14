

import { useState } from "react"


// function App(){ 
// //     return <> 
// //     </>
//       const [todo,setTodo]=useState('')
//         // const [todoList,setTodoList]=useState([])

//         // const onaddtodo= ()=>{
//         // console.log(todo);
//         //   let newArr=[...todoList]
//         //   newArr.push(todo)
//         //   setTodoList(newArr)
//         // }
//       return <>
//       <h1>TO DO LIST</h1>
//       <input type="Text"  onChange={e => setTodo(e.target.value)} value={todo}/>
//       <input type="button" value="ADD" onClick={onaddtodo}/>
//       {
//         todoList.map((elem,idx)=> <h1 key={idx}>{elem}</h1>)
//       }
//       </>

// }

// export default App

import  './App.css'
import img from './itemlister.png'
const App=()=>{
  const [todo,setTodo]= useState('')
  const [todoList,setTodoList]=useState([])
  const onClickHandler =()=>{
     
    let newtodolist= [...todoList]
    let newItem={
      id:Math.random(),
      value:todo
    }
    newtodolist.push(newItem)
    setTodoList(newtodolist)
    setTodo('')
   }
  const onDeleteHandler=(myId)=>{
//  const newArr=todoList.filter(todoitem=> todoitem!==text)
//  setTodoList(newArr);
// or
// setTodoList(todoList.filter(todoitem=> todoitem!==text))
//  setTodoList(todoList.filter((_,idx) => idx!==text))
setTodoList(todoList.filter(item => item.id!==myId))
  }
  return <div>
    <img src={img} width={100} height={100} className="logo"/>
  <h1 className="app-title">React To Do List</h1>
  <div className="container">
    Add Tasks 
    <br/>
    <input className="input-text" type="Text" placeholder="Enter Task" value={todo} onChange={e=> setTodo(e.target.value)}/>
  <button type="button" className="add-btn" onClick={()=> onClickHandler()}>ADD</button>
  <div className="list">
    <br/>
    <ul>
   { 
   todoList.map((item,index)=> {
    return <div key={index}>

     <li  onClick={()=>onDeleteHandler(item.id )}>
      <input type="checkbox" name="" id="" checked={item.isDone}/>
           {item.value}</li>
    </div>
   })}
   </ul>

   </div>
  </div>
  
  </div>
}

export default App