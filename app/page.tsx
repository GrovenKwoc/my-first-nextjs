import GwoLogo from '@/app/ui/gwo-logo';
import Link from 'next/link';
import { Suspense } from 'react';
import Loading from './loading';
import { Claim } from '@/app/ui/claim';

export default function Page() {
  return (
    <main className="text-1xl flex min-h-screen flex-col bg-black p-4 font-bold text-green-400">
      {/* 顶部导航栏 */}
      <div className="flex h-16  shrink-0 items-end justify-around rounded-lg p-4 md:h-40">
        <GwoLogo />
        <Link href="/dashboard">&#128286; souler情绪记录</Link>
        <Link href="/tailwindcss-playground">&#128293; TailwindCSS学习</Link>
        <Link href="/aibots">
          <span className="">&#128488;</span> AI学习研究
        </Link>
        <Link href="/oe-mockup">&#128520; 欧易mockup</Link>
      </div>
      <Suspense fallback={<Loading />}>
        <Claim />
      </Suspense>
    </main>
  );
}
