import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between m-auto max-w-3xl bg-slate-800 text-slate-300 p-4">
      <Link href={"/"}>Task management</Link>
      <Link href={"/add_task"}>Add task</Link>
    </nav>
  );
}
