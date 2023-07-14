import Todo from './Todo'
import { useSelector } from 'react-redux'
const Container = () => {
    const {todoItems} = useSelector((store) => store.todo)
    return(
        <div>
			{(typeof todoItems === "undefined") ? 
				<p>Loading...</p> : 
				todoItems.map((todo) => {
					return <Todo key={todo._id} data={todo}></Todo>
                })
			}
        </div>
    )
}

export default Container