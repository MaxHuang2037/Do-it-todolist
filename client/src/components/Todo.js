import styles from "./index.module.css"

const Todo = ({data}) => {
    function deleteTodo(){
        fetch('/api', {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        console.log(data)
    }

    return(
        <div className={styles.todo}>
            <p1>{data.todoItem}</p1>
            <button className={styles.deleteButton} onClick={deleteTodo}>X</button>
        </div>
    )
}

export default Todo