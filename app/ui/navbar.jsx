import Link from 'next/link';
export function Navbar() {
  return (
    <nav>
      <Link href="/dashboard">&#128286; souler情绪记录</Link>
      <Link href="/tailwindcss-playground">&#128293; TailwindCSS学习</Link>
      <Link href="/aibots">
        <span className="">&#128488;</span> AI学习研究
      </Link>
      <Link href="/oe-mockup">&#128520; 欧易mockup</Link>
    </nav>
  );
}
