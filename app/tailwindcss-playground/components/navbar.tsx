import Link from 'next/link';

export function Navbar(){
    return(
        <nav className="flex flex-row space-x-20 font-bold text-2xl">
            <Link href="/">回到首页</Link>
            <Link href="/tailwindcss-playground/test2">排版练习</Link>
            <Link href="#">Home3</Link>
            <Link href="#">Home4</Link>
        </nav>
    )
}