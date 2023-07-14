import { useDispatch } from "react-redux"
import styles from "./index.module.css"
import { createTodoItem } from "../features/todo/todoSlice"

const Input = ({todo, setTodo}) => {
    const dispatch = useDispatch()
    function addTodo(e){
        dispatch(createTodoItem(todo))
        setTodo("")
        e.preventDefault()
    }
    
    function inputHandler(e){
        setTodo(e.target.value)
    }

    return(
        <form className={styles.inputBar} onSubmit={addTodo}>
            <input className={styles.input} onChange={inputHandler} type='text' placeholder="Enter todo item" value={todo}></input>
            <button className={styles.addButton} type="submit">Add</button>
        </form>
    )
}

export default Input