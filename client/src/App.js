import React, {useState, useEffect} from 'react'
import Input from './components/Input';
import Container from './components/Container';
import styles from "./components/index.module.css"

import { useDispatch, useSelector } from 'react-redux';
import { getTodoItems } from './features/todo/todoSlice';

function App(){
    const dispatch = useDispatch()

	const [todo, setTodo] = useState("")
    useEffect(() => {
        dispatch(getTodoItems())
    }, [])
    
	return(
		<div className={styles.todoList}>
			<h1 className={styles.title}>TODO LIST</h1>
			<Input todo={todo} setTodo={setTodo}></Input>
			<Container></Container>
		</div>
	)
}

export default App