import Todo from './Todo'

const Container = ({backendData, setBackendData}) => {
    return(
        <div>
			{(typeof backendData.users === "undefined") ? (
				<p>Loading...</p>
			) : (
				backendData.users.map((user, i) => (
					<Todo key={i} setBackEndData={setBackendData} backendData={backendData} data={user}></Todo>
				))
			)}
        </div>
    )
}

export default Container