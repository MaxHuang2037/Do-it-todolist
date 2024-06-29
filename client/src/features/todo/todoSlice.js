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

export const deleteTodoItem = createAsyncThunk("todo/deleteTodoItem",
    async (todo) => {
        try {
            const res = await fetch('/api', {
                method: 'DELETE',
                body: JSON.stringify(todo),
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                }
            })
            return await res.json()
        } catch(err) {
            return console.log(err.message)
        }
    }
)

export const updateTodoItem = createAsyncThunk("todo/updateTodoItem",
    async ({id, name, done}) => {
        try {
            const res = await fetch('/api', {
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({_id: id, done: done, todoItem: name})
            })
            return await res.json()
        } catch(err) {
            return console.log(err.message)
        }
    }
)

export const createTodoItem = createAsyncThunk("todo/createTodoItem",
    async (todo) => {
        try {
            const res = await fetch('/api', {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    todoItem: todo
                })
            })
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
    extraReducers: {
        [getTodoItems.pending]: (state) => {
            state.isLoading = true
        },
        [getTodoItems.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.todoItems = payload
        },
        [getTodoItems.rejected]: (state) => {
            state.isLoading = false
        },
        [deleteTodoItem.pending]: (state) => {
            state.isLoading = true
        },
        [deleteTodoItem.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.todoItems = state.todoItems.filter((item) => (payload._id !== item._id))
        },
        [deleteTodoItem.rejected]: (state) => {
            state.isLoading = false
        },
        [updateTodoItem.pending]: (state) => {
            state.isLoading = true
        },
        [updateTodoItem.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            let todo = state.todoItems.find((item) => item._id === payload._id)
            todo = payload
        },
        [updateTodoItem.rejected]: (state) => {
            state.isLoading = false
        },
        [createTodoItem.pending]: (state) => {
            state.isLoading = true
        },
        [createTodoItem.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.todoItems = [...state.todoItems, payload]
        },
        [createTodoItem.rejected]: (state) => {
            state.isLoading = false
        },
    }
})

export const { createTodo } = todoSlice.actions
export default todoSlice.reducer