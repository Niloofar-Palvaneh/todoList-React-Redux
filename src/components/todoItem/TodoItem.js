import { removeTodoAction } from "../../Redux/Todos"
import { useDispatch } from "react-redux"

export default function TodoItem(todo) {
    const deispatch = useDispatch()
    const removeTodoHandler = (id) => deispatch(removeTodoAction(id))
    return (
        <>
            <div className='bg-white flex items-center justify-between w-[400px] sm:w-full md:w-full rounded mt-4'>
                <p className='pl-2 text-gray-700'>
                    {todo.title}
                </p>
                <div className='flex gap-2'>
                    <div className='cursor-pointer py-4 px-2 flex items-center justify-center transition hover:bg-green-100'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 text-green-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </div>
                    <div
                        onClick={() => removeTodoHandler(todo.id)}
                        className='cursor-pointer py-2 px-2 flex items-center justify-center transition hover:bg-red-100'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 text-red-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

