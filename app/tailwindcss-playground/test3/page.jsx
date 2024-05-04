export default function Page() {
  return (
    <div className="flex flex-col space-y-4 p-4 text-2xl">
      <h1>动画练习</h1>
      <button className="w-1/2 rounded-lg bg-indigo-500 px-4 py-2 text-white transition duration-1000 hover:translate-x-40">
        点击这里1000ms
      </button>
      <button className="w-1/2 rounded-lg bg-indigo-500 px-4 py-2 text-white transition duration-500 hover:translate-x-40">
        点击这里500ms
      </button>
      <button className="w-1/2 rounded-lg bg-indigo-500 px-4 py-2 text-white transition duration-150 hover:translate-x-80">
        点击这里150ms
      </button>

      <button className="flex flex-row bg-indigo-500 p-4">
        <span className="inline-block origin-top-right animate-spin">
          &#128508;
        </span>
        旋转
        <span className="inline-block origin-bottom animate-spin">
          &#128507;
        </span>
      </button>

      <span className="relative flex h-10 w-10">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-500 opacity-75"></span>
        <span className="relative inline-flex h-10 w-10 rounded-full bg-sky-500"></span>
      </span>

      <div className="h-20 w-20 rounded-full bg-indigo-500 motion-safe:animate-bounce"></div>

      <form>
        <label>
          <input type="checkbox" /> Browser default
        </label>
        <label>
          <input
            type="checkbox"
            className="accent-pink-300 motion-safe:animate-pulse"
          />
          Customized
        </label>
      </form>
    </div>
  );
}
