import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-transparent absolute w-full top-0">
      <h1 className="text-white text-xl font-bold">Christian Yuda</h1>
      <div className="space-x-4">
        <Link href="/about" className="text-white hover:text-gray-300">About</Link>
        <Link href="/projects" className="text-white hover:text-gray-300">Projects</Link>
        <Link href="/contact" className="text-white hover:text-gray-300">Contact</Link>
      </div>
    </nav>
  );
}
