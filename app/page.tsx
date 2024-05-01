import GwoLogo from '@/app/ui/gwo-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="text-1xl flex min-h-screen flex-col bg-yellow-300 p-4 font-bold text-yellow-300">
      {/* 顶部导航栏 */}
      <div className="flex h-20  shrink-0 items-end justify-around rounded-lg bg-blue-500 p-4 md:h-52">
        <GwoLogo />
        <Link href="/dashboard">&#128286; 企业记账系统</Link>
        <Link href="/tailwindcss-playground">&#128293; TailwindCSS学习</Link>
        <Link href="/aibots">
          <span className="text-red-500">&#128488;</span> AI学习研究
        </Link>
        <Link href="/material-development">&#128520; IT教育资料开发</Link>
      </div>

      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-yellow-100 px-6 py-10 md:w-2/5 md:px-20">
          <div className="h-0 w-0 border-b-[20px] border-l-[10px] border-r-[10px] border-b-blue-500 border-l-transparent border-r-transparent" />
          <p
            className={`${lusitana.className} text-xl text-blue-500 md:text-3xl md:leading-normal`}
          >
            <strong>欢迎来到G.W.O专为Soul友们提供的吐槽圣地。</strong>
            <br />
            这里不用怕被河蟹，不用怕被封禁，是真正意义的
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              &#34;圣地 伊甸园 神殿 神社 寺庙 神坛&#34;
            </a>
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />

          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}
