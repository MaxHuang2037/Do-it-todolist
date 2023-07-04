import styles from "./index.module.css"
import {useEffect, useState} from 'react'

const Todo = ({data}) => {
    const [currentTodo, setCurrentTodo] = useState(data.todoItem)
    const elem = document.getElementById(data._id)
    
    useEffect(() => {
        if (data.done){
            const elem = document.getElementById(data._id)
            elem.style.textDecoration = "line-through"
        }
    }, [data._id, data.done]);
    
    function deleteTodo(){
        fetch('/api', {
            method: 'DELETE',
            body: JSON.stringify(data),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            }
        })
        window.location.reload(false)
    }
    
    function done(){
        let temp
        if (data.done){
            temp = false
        } else {
            temp = true
        }
        updateData(data.todoItem, temp)
        window.location.reload(false)
    }

    function updateData(item, done){
        fetch('/api', {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({_id: data._id, done: done, todoItem: item})
        })
    }
    
    function editTodo(){
        if (elem.readOnly){
            elem.readOnly = false
            elem.focus()
        } else {
            elem.readOnly = true
            updateData(currentTodo, data.done)
            window.location.reload(false)
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
            <button className={styles.deleteButton} onClick={deleteTodo}>
                <span class="material-symbols-outlined">delete</span>
            </button>
        </div>
        
    )
}

export default Todo