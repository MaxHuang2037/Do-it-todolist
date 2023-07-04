import styles from "./index.module.css"

const Input = ({todo, setTodo}) => {
    function addTodo(e){
        fetch('/api', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                todoItem: todo
            })
        })
        setTodo("")
    }
    
    function inputHandler(e){
        setTodo(e.target.value)
    }

    return(
        <div>
            <form className={styles.inputBar}>
                <input className={styles.input} onChange={inputHandler} type='text' placeholder="Enter todo item" value={todo}></input>
                <button className={styles.addButton} type="submit" onClick={addTodo}>Add</button>
            </form>
        </div>
    )
}

export default Input