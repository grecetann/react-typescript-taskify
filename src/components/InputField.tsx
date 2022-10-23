import React, { useRef, useState } from 'react'
import './styles.css'

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e:React.FormEvent)=>void;
}


 const InputField: React.FC<Props>= ({todo,setTodo,handleAdd}) => {

    const InputRef=useRef<HTMLInputElement>(null)
    
  return (
   <form className="input" onSubmit={(e)=>{
    handleAdd(e)
  InputRef.current?.blur()
   }}>
<input 
ref={InputRef}
type="input" 
  value={todo}
onChange={(e)=>setTodo(e.target.value)}
placeholder="enter a task" 

className="input__box"/>
<button className="input__submit" type="submit">Go</button>
   </form>
  )
}

export default InputField
