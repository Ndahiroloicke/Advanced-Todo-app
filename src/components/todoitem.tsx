type todoItemProps ={
    id:string,
    title:string,
    completed: boolean
}

export default function TodoItem({id,title,completed}:todoItemProps) {
    return <li className="flex gap-1 items-center">
        <input type="checkbox" id={id} className="cursor-pointer peer"/>
        <label htmlFor={id} className="peer-checked:line-through peer-checked:text-slate-500">{title}</label>
    </li>
}