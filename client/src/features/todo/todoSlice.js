import {createSlice} from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const getTodoItems = createAsyncThunk("todo/getTodoItems",
    async () => {
        try {
            const res = await fetch("/api")
            return await res.json()
        } catch(err) {
            return console.log(err.message)
        }
    }
)

const initialState = {
    todoItems: [],
    isLoading: false
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        deleteTodo: (state, {payload}) => {
            const todo = payload
            state.todoItems = state.todoItems.filter((item) => (todo._id !== item._id))
            fetch('/api', {
                method: 'DELETE',
                body: JSON.stringify(todo),
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                }
            })
        },
        updateTodo: (state, {payload}) => {
            const id = payload.id
            const name = payload.name
            const done = payload.done
            const todo = state.todoItems.find((item) => item._id === id)
            todo.todoItem = name
            todo.done = done
            fetch('/api', {
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({_id: id, done: done, todoItem: name})
            })
        },
        createTodo: (state, {payload}) => {
            state.todoItems = [...state.todoItems, payload]
        }
    },
    extraReducers: {
        [getTodoItems.pending]: (state) => {
            state.isLoading = true
        },
        [getTodoItems.fulfilled]: (state, action) => {
            state.isLoading = false
            state.todoItems = action.payload.todo
        },
        [getTodoItems.rejected]: (state) => {
            state.isLoading = false
        },
    }
})

export const {deleteTodo, updateTodo, createTodo} = todoSlice.actions
export default todoSlice.reducer