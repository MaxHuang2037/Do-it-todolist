import React, {useEffect, useState} from 'react'

function App(){
	const [backendData, setBackendData] = useState([{}]);
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
			{(typeof backendData.users === "undefined") ? (
				<p>Loading...</p>
			) : (
				backendData.users.map((user, i) => (
					<p key={i}>{user}</p>
				))
			)}
		</div>
	)
}

export default App