import Todo from './Todo'

const Container = ({backendData}) => {
    return(
        <div>
			{(typeof backendData.todo === "undefined") ? (
				<p>Loading...</p>
			) : (
				backendData.todo.map((todos, i) => (
					<Todo key={i} data={todos}></Todo>
				))
			)}
        </div>
    )
}

export default Container