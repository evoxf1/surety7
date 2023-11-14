"use client";
import Link from "next/link"
import { signOut, useSession } from "next-auth/react";

function Navbar() {
  const { data: session } = useSession();
  return (
    <nav className="flex justify-between items-center bg-black px-8 py-3 rounded-md">
        <Link href={'/login'} className="text-green-500 font-medium">LOGIN</Link>
        <Link href={'/'} className="text-red-400 font-medium">HOME</Link>
        <Link href={'/'} onClick={() => signOut()} className="text-red-400 font-medium">LOGOUT</Link>
    </nav>
  )
}

export default Navbar