const SearchBar = ({todo, setTodo, backendData, setBackendData}) => {
    function addTodo(e){
        e.preventDefault()
        setBackendData({"users": [...backendData.users, todo]
        })
        setTodo("")
    }
    
    function inputHandler(e){
        setTodo(e.target.value)
    }

    return(
        <div>
            <form>
                <input onChange={inputHandler} type='text' placeholder="Enter todo item" value={todo}></input>
                <button type="submit" onClick={addTodo}>Add</button>
            </form>
        </div>
    )
}

export default SearchBar