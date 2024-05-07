export default function Page() {
  return (
    <div className="bg-slate-300 relative p-4 border-black border">
      <h1>布局练习</h1>
      <div className="flex flex-col w-96 h-96 absolute float-left border border-black">
        <p className="bg-blue-500">flex-child-0</p>
        <div className=" bg-yellow-500 ">flex-child-1</div>
        <span className="bg-red-500">flex-child-2</span>
        <div className="overflow-auto">
        <span className="bg-green-500 h-96 block flex-none">flex-child-3</span>
        </div>
        <span className=" bg-purple-100 ">bottom left</span>
      </div>
    </div>
  );
}
