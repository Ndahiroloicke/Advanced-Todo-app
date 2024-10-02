import { prisma } from "@/db";

import Link from "next/link";
import { redirect } from "next/navigation";

const CreateTodos = async (data: FormData,) => {
  "use server";
  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid title");
  }
  const completed = false

  await prisma.todo.create({ data: { title, completed } });
  redirect("/");
  console.log("hi");
};

export default function page() {
  return (
    <>
      <header className="flex justify-between">
        <h1 className="text-2xl">Todos</h1>
      </header>
      <form action={CreateTodos} className="flex gap-2 flex-col">
        <input
          type="text"
          name="title"
          className="border p-2 border-slate-300 bg-transparent outline-none focus-within:border-slate-100"
        />
        <div className="flex gap-1  justify-end">
          <Link
            href=".."
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}
