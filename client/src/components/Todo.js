const Todo = ({data, backendData, setBackEndData}) => {
    function deleteTodo(){
        setBackEndData({"users": backendData.users.filter((user) => 
            user !== data
        )})
    }

    return(
        <div>
            {data}
            <button onClick={deleteTodo}>X</button>
        </div>
    )
}

export default Todo