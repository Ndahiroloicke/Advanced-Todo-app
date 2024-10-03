"use client"
type todoItemProps ={
    id:string,
    title:string,
    completed: boolean,
    toggleTodo: (id:string,completed:boolean) => void
}

export default function TodoItem({id,title,completed, toggleTodo}:todoItemProps) {
    return <li className="flex gap-1 items-center">
        <input type="checkbox" id={id} className="cursor-pointer peer" defaultChecked={completed} onChange={e => toggleTodo(id,e.target.checked)}/>
        <label htmlFor={id} className="peer-checked:line-through peer-checked:text-slate-500">{title}</label>
    </li>
}