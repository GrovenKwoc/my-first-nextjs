// async function fetchData() {
//   // const response = await fetch(
//   //   'http://127.0.0.1:4523/m1/4277651-3919651-default/test2',
//   //   {
//   //     method: 'GET', // *GET, POST, PUT, DELETE, etc.
//   //     // mode: 'same-origin', // no-cors, *cors, same-origin
//   //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//   //     // credentials: 'same-origin', // include, *same-origin, omit
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //       // 'Content-Type': 'application/x-www-form-urlencoded',
//   //     },
//   //     redirect: 'follow', // manual, *follow, error
//   //     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//   //     // body: JSON.stringify(data), // body data type must match "Content-Type" header
//   //   },
//   // );
//   // if (!response.ok) {
//   //   // This will activate the closest `error.js` Error Boundary
//   //   throw new Error('Failed to fetch data');
//   // }
//   // return response.json();
// }
'use client';
import { useState } from 'react';
export default function Page() {
  // const res = await fetchData();
  const [hover, setHover] = useState(0);

  return (
    <div className="relative border border-black bg-slate-300 p-4">
      <h1>布局练习</h1>
      <div className="absolute flex h-96 w-96 flex-col border border-black">
        <p className="bg-blue-500">flex-child-0</p>
        <div className=" bg-yellow-500 ">flex-child-1</div>
        <span className="bg-red-500">flex-child-2</span>
        <div className="overflow-auto">
          <span className="block h-96 flex-none bg-green-500">
            flex-child-3
          </span>
        </div>
        <span className=" bg-purple-100 ">bottom left</span>
      </div>

      {/* 表格练习 */}
      <table className="absolute left-1/3 w-1/2">
        <caption className="">我是一个caption</caption>
        <thead className="text-center">
          <tr className="flex w-full bg-black text-white">
            <th className="w-1/6 p-4 hover:text-red-400">姓名</th>
            <th className="w-1/6 p-4">年龄</th>
            <th className="w-1/6 p-4">性别</th>
            <th className="w-1/2 p-4">简介</th>
          </tr>
        </thead>
        <tbody className="flex h-72 w-full flex-col overflow-auto text-center">
          {/* {res.data.map((item, index) => (
            <tr className="mb-2 flex h-1/6 w-full hover:h-32" key={index}>
              <td className="w-1/6 p-4">{item.name}</td>
              <td className="w-1/6  p-4">{item.age}</td>
              <td className="w-1/6   p-4">{item.sex ? '男' : '女'}</td>
              <td className="w-1/2 overflow-hidden p-4 hover:overflow-y-visible">
                {item.profile}
              </td>
            </tr>
          ))} */}
        </tbody>
        <tfoot className=" bg-purple-100 ">
          <tr>
            <td colSpan="3">bottom left-4</td>
          </tr>
        </tfoot>
      </table>

      <div className="... absolute top-[500px] table w-full">
        <div className="... table-header-group">
          <div className="table-row">
            <div
              className="... table-cell text-left hover:text-red-400"
              onMouseOver={() => setHover(1)}
              onMouseOut={() => setHover(0)}
            >
              Song
            </div>
            <div className="... table-cell text-left">Artist</div>
            <div className="... table-cell text-left">Year</div>
          </div>
        </div>
        <div className="table-row-group">
          <div className="table-row">
            <div
              className={`... table-cell ${hover === 1 ? 'text-red-400' : ''}`}
            >
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </div>
            <div className="... table-cell">Malcolm Lockyer</div>
            <div className="... table-cell">1961</div>
          </div>
          <div className="table-row">
            <div
              className={`... table-cell ${hover === 1 ? 'text-red-400' : ''}`}
            >
              Witchy Woman
            </div>
            <div className="... table-cell">The Eagles</div>
            <div className="... table-cell">1972</div>
          </div>
          <div className="table-row">
            <div
              className={`... table-cell ${hover === 1 ? 'text-red-400' : ''}`}
            >
              Shining Star
            </div>
            <div className="... table-cell">Earth, Wind, and Fire</div>
            <div className="... table-cell">1975</div>
          </div>
        </div>
      </div>
    </div>
  );
}
