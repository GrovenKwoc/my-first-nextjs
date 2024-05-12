import Link from 'next/link';
export function Navbar() {
  return (
    <nav className="text-nowrap flex flex-row justify-end space-x-2 text-xs md:space-x-4 md:text-lg">
      <Link href="/diary">&#128286; 情绪记录</Link>
      <Link href="/aibots">&#128488; AI学习</Link>
      <Link href="/oe-mockup">&#128520; 欧易mockup</Link>
    </nav>
  );
}
