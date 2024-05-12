import Link from 'next/link';

export async function Claim() {
  return (
    <div className="flex w-fit flex-col justify-center">
      <div className="h-0 w-0 border-b-[20px] border-l-[10px] border-r-[10px] border-b-green-400 border-l-transparent border-r-transparent" />
      <p className="mt-4 text-base leading-tight md:text-2xl">
        <strong>
          欢迎来到Soulers
          <br />
          吐槽区
        </strong>
      </p>
      <p className="my-8 text-xs leading-loose md:text-lg">
        这里没河蟹
        <br />
        这里没封禁
        <br />
        这里没删帖
        <br />
        这里没违规
        <br />
        这里没广告
      </p>
      <Link
        href="/signup"
        className="bg-green-400 p-2 text-center text-xs text-white transition-colors hover:bg-blue-400 md:text-base"
      >
        <span>极速注册</span>
      </Link>
      <Link
        href="/login"
        className=" mt-4 bg-green-400 p-2 text-center text-xs text-white transition-colors hover:bg-red-400 md:text-base"
      >
        <span>火爆登录</span>
      </Link>
    </div>
  );
}
