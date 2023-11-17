import './App.css';
import TodoItem from './components/todoItem/TodoItem';
import { addTodoAction } from './Redux/Todos';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function App() {
  const [newTodo, setNewTodo] = useState('')
  const dispatch = useDispatch()
  const todos = useSelector(state => state)

  const getNewTodoTotleHandler = (e) => {
    setNewTodo(e.target.value)
  }

  const addTodoHandler = () => {
    dispatch(addTodoAction(newTodo))
    setNewTodo("")
  }


  return (
    <>
      <div className='w-full flex items-start justify-center '>
        <div className='w-1/2 sm:w-full  flex flex-col items-center justify-center'>
          <h1 className='font-bold text-4xl my-8 text-gray-500'>
            TodoListApp
          </h1>
          <div className='flex items-center gap-4'>
            <input
              onChange={(e) => getNewTodoTotleHandler(e)}
              value={newTodo}
              type="text" placeholder='write yor work...' className='border-none outline-none bg-white p-2 rounded-xl shadow' />
            <div
              onClick={addTodoHandler}
              className='bg-white rounded-full w-max p-1'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor"
                class="w-7 h-7 bg-yellow-400 text-white rounded-full">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
            <div className=''>
              <select name="todos" className='p-2 rounded-xl outline-none'>
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Uncompleted">Uncompleted</option>
              </select>
            </div>
          </div>
          <div className='flex flex-col'>
            {
              todos.map(todo => (
                <TodoItem {...todo} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}