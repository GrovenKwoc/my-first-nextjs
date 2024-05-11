import Link from 'next/link';

export async function Claim() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div className="flex max-w-xs flex-col justify-center">
      <div className="h-0 w-0 border-b-[20px] border-l-[10px] border-r-[10px] border-b-green-400 border-l-transparent border-r-transparent" />
      <p className="text-xl md:text-2xl md:leading-normal">
        <strong>欢迎来到Soulers抱怨圣地。</strong>
        <br />
        这里不怕河蟹，不怕封禁，是真正的&#34;圣地 伊甸园 神殿 神社 寺庙
        神坛&#34;
      </p>
      <Link
        href="/signup"
        className="flex items-center gap-5 self-start bg-green-400 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
      >
        <span>极速注册</span>
      </Link>
      <Link
        href="/login"
        className="flex items-center gap-5 self-start bg-green-400 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
      >
        <span>抢滩登录</span>
      </Link>
    </div>
  );
}
