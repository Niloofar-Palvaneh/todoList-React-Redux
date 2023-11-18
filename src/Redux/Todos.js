const addTodo = "ADD_TODO"
const removeTodo = "REMOVE_TODO"
const doTodo = "DO_TODO"

export default function reduser(state = [], action) {
    switch (action.type) {
        case addTodo: {
            return [...state, action.payload]
        }
        case removeTodo: {
            const copyStore = [...state]
            const newStore = copyStore.filter(todo => todo.id !== action.payload.id)
            return newStore
        }

        case doTodo: {
            let newState = [...state]
            newState.some(todo => {
                if (todo.id === action.id) {
                    todo.isCompleted = !todo.isCompleted
                }
            })
            return newState
        }

        default: {
            return [...state]
        }
    }
}

export const addTodoAction = (title) => ({
    type: addTodo,
    payload: {
        id: Math.floor(Math.random() * 100),
        title: title,
        isCompleted: false
    }
})

export const removeTodoAction = (id) => ({
    type: removeTodo,
    payload: { id }
})

export const doTodoAction = (id) => ({
    type: doTodo,
    id
})