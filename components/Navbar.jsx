import Link from "next/link"

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-black px-8 py-3 rounded-md">
        <Link href={'/login'} className="text-green-500 font-medium">LOGIN</Link>
        <Link href={'/'} className="text-red-400 font-medium">LOGOUT</Link>
    </nav>
  )
}

export default Navbar