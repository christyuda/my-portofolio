import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-transparent absolute w-full top-0">
      <h1 className="text-slate-900 dark:text-white text-xl font-bold">Christian Yuda Pratama</h1>
      <div className="space-x-4">
        <Link href="/about" className="text-slate-700 dark:text-slate-100 hover:text-indigo-700 dark:hover:text-cyan-300">About</Link>
        <Link href="/projects" className="text-slate-700 dark:text-slate-100 hover:text-indigo-700 dark:hover:text-cyan-300">Projects</Link>
        <Link href="/contact" className="text-slate-700 dark:text-slate-100 hover:text-indigo-700 dark:hover:text-cyan-300">Contact</Link>
      </div>
    </nav>
  );
}
