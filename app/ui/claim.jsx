export async function Claim() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
      <div className="flex flex-col justify-center gap-6 rounded-lg px-6 py-10 md:w-2/5 md:px-20">
        <div className="h-0 w-0 border-b-[20px] border-l-[10px] border-r-[10px] border-b-green-400 border-l-transparent border-r-transparent" />
        <p className="text-xl md:text-3xl md:leading-normal">
          <strong>欢迎来到G.W.O专为Soul友们提供的吐槽圣地。</strong>
          <br />
          这里不用怕被河蟹，不用怕被封禁，是真正意义的
          <a href="https://nextjs.org/learn/">
            &#34;圣地 伊甸园 神殿 神社 寺庙 神坛&#34;
          </a>
        </p>
        {/* <Link
          href="/login"
          className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
        </Link> */}
      </div>
    </div>
  );
}
