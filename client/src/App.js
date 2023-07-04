import React, {useState, useEffect} from 'react'
import Input from './components/Input';
import Container from './components/Container';
import styles from "./components/index.module.css"

function App(){
	const [backendData, setBackendData] = useState([{}]);
	const [todo, setTodo] = useState("")
	// fetch data
	useEffect(() => {
		// route (do not need to put localhost:5000 because already defined in proxy)
		fetch("/api").then(
			response => response.json()
		).then(
			data => {
				setBackendData(data)
			}
		)
	}, []) // pass in empty array so this only runs on the first render of the component
	return(
		<div className={styles.todoList}>
			<h1 className={styles.title}>TODO LIST</h1>
			<Input todo={todo} setTodo={setTodo}></Input>
			<Container backendData={backendData}></Container>
		</div>
	)
}

export default App