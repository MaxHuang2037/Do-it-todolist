import React, {useEffect, useState} from 'react'
import SearchBar from './components/SearchBar';
import Container from './components/Container';

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
		<div>
			<SearchBar todo={todo} setTodo={setTodo} backendData={backendData} setBackendData={setBackendData}></SearchBar>
			<Container backendData={backendData} setBackendData={setBackendData}></Container>
		</div>
	)
}

export default App