import styles from "./index.module.css"
import {useEffect, useState} from 'react'
import { useDispatch } from "react-redux"
import { deleteTodo, updateTodo } from "../features/todo/todoSlice"

const Todo = ({data}) => {
    const dispatch = useDispatch()
    const [currentTodo, setCurrentTodo] = useState(data.todoItem)
    
    useEffect(() => {
        const elem = document.getElementById(data._id)
        if (data.done){
            elem.style.textDecoration = "line-through"
        } else {
            elem.style.textDecoration = "none"
        }
    }, [data.done]);
    
    
    function done(){
        let temp
        if (data.done){
            temp = false
        } else {
            temp = true
        }
        dispatch(updateTodo({id: data._id, name: data.todoItem, done: temp}))
    }
    
    function editTodo(){
        const elem = document.getElementById(data._id)
        if (elem.readOnly){
            elem.readOnly = false
            elem.focus()
        } else {
            elem.readOnly = true
            dispatch(updateTodo({id: data._id, name: currentTodo, done: data.done}))
        }
    }

    function inputHandler(e){
        setCurrentTodo(e.target.value)
    }

    return(
        <div className={styles.todo}>
            <input 
                id={data._id}
                className={styles.todoInput} 
                type="text" readOnly={true} 
                value={currentTodo}
                onChange={inputHandler}
            ></input>
            <button className={styles.doneButton} onClick={done}>
                <span class="material-symbols-outlined">done</span>
            </button>
            <button className={styles.updateButton} onClick={editTodo}>
                <span class="material-symbols-outlined">edit</span>
            </button>
            <button 
                className={styles.deleteButton} 
                onClick={() => dispatch(deleteTodo(data))}>
                <span class="material-symbols-outlined">delete</span>
            </button>
        </div>
        
    )
}

export default Todo