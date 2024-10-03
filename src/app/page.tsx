import { prisma } from "@/db";
import Link from "next/link";
import todoItem from "@/components/todoitem";
import TodoItem from "@/components/todoitem";

const getTodos = () => {
  return prisma.todo.findMany();
};
const toggleTodo = async (id: string, completed: boolean) => {
  "use server";
  await prisma.todo.update({ where: { id }, data: { completed } });
};

export default async function Home() {
  const todos = await getTodos();
  return (
    <>
      <header className="flex justify-between">
        <h1 className="text-2xl">Todos</h1>
        <Link
          href="/new"
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              toggleTodo={toggleTodo}
              id={todo.id}
              completed={todo.completed}
              title={todo.title}
            />
          );
        })}
      </ul>
    </>
  );
}
