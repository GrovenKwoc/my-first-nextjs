'use client';
import { useState } from 'react';
import GwoLogo from '../ui/gwo-logo';

export default function Page() {
  const [current, setCurrent] = useState('');
  const [low, setLow] = useState('');
  const [high, setHigh] = useState('');
  const [distance, setDistance] = useState('');
  const [coeffient, setCoeffient] = useState('');
  const [style, setStyle] = useState('等差');
  const [ratio, setRatio] = useState('');
  const [diff, setDiff] = useState('');
  const [open, setOpen] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const distanceRange = (
    (parseFloat(high) - parseFloat(low)) /
    parseFloat(distance)
  ).toFixed(2);

  function generatePrices(current, distanceRange, targetPrice) {
    const arr = [];
    for (let i = current; i <= targetPrice; i += distanceRange) {
      arr.push(i.toFixed(2));
    }
    return arr;
  }

  const prices = generatePrices(
    parseFloat(current),
    parseFloat(distanceRange),
    parseFloat(high),
  );

  let arr;
  if (open && high && low && diff && style && style == '等差') {
    arr = prices.map((price, idx) => ({
      num: parseFloat(open) + idx * parseFloat(diff),
      price: price,
    }));
  }

  if (open && high && low && ratio && style && style == '等比') {
    arr = prices.map((price, idx) => ({
      num: (parseFloat(open) * parseFloat(ratio) ** idx).toFixed(2),
      price: price,
    }));
  }

  const total = arr
    ? arr.reduce((acc, cur) => acc + cur.num * cur.price, 0)
    : 0;
  return (
    <div>
      <div className="h-16 bg-blue-500 p-4 text-white">
        <GwoLogo />
      </div>
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="w-1/3 rounded-md bg-blue-500 p-4 text-center text-2xl text-white">
          欧易计算器
        </h1>
        <div className="p-4">
          <label>
            *盘面价格:
            <input
              className="ml-4 rounded-md ring-2 ring-gray-200 hover:ring-4 hover:ring-gray-300"
              type="text"
              value={current}
              onChange={(e) => {
                setCurrent(e.target.value);
              }}
            />
          </label>
        </div>
        <div className="p-4">
          <label>
            *最低价格:
            <input
              className="ml-4 rounded-md ring-2 ring-gray-200 hover:ring-4 hover:ring-gray-300"
              type="text"
              value={low}
              onChange={(e) => {
                setLow(e.target.value);
              }}
            />
          </label>
        </div>
        <div className="p-4">
          <label>
            *最高价格:
            <input
              className="ml-4 rounded-md ring-2 ring-gray-200 hover:ring-4 hover:ring-gray-300"
              type="text"
              value={high}
              onChange={(e) => {
                setHigh(e.target.value);
              }}
            />
          </label>
        </div>
        <div className="p-4">
          <label>
            *间距:
            <input
              className="ml-4 rounded-md ring-2 ring-gray-200 hover:ring-4 hover:ring-gray-300"
              type="text"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
            />
          </label>
        </div>
        <div className="p-4">
          <label>
            *杠杆系数:
            <input
              type="text"
              className="ml-4 rounded-md ring-2 ring-gray-200 hover:ring-4 hover:ring-gray-300"
              value={coeffient}
              onChange={(e) => setCoeffient(e.target.value)}
            />
          </label>
          <span> ={1 / parseFloat(coeffient)}倍杠杆</span>
        </div>
        <div>
          <label>
            *开仓手数
            <input
              type="number"
              className="ml-4 rounded-md ring-2 ring-gray-200"
              value={open}
              onChange={(e) => setOpen(e.target.value)}
            />
          </label>
        </div>
        <div className="p-4">
          <label>
            *等比/等差:
            <select
              onChange={(e) => setStyle(e.target.value)}
              className="ml-4 w-44 rounded-md ring-2 ring-gray-200"
            >
              <option value="等比">等比</option>
              <option value="等差">等差</option>
            </select>
          </label>
        </div>
        <div>
          {style == '等比' ? (
            <label>
              公比：{' '}
              <input
                type="text"
                className="ml-4 rounded-md ring-2 ring-gray-200"
                value={ratio}
                onChange={(e) => setRatio(e.target.value)}
              />{' '}
            </label>
          ) : (
            <label>
              公差:
              <input
                type="text"
                className="ml-4 rounded-md ring-2 ring-gray-200"
                value={diff}
                onChange={(e) => setDiff(e.target.value)}
              />
            </label>
          )}
        </div>
        <div className="p-4">
          <span>
            单手最小保证金：
            {(parseFloat(current) * parseFloat(coeffient)).toFixed(2)}
          </span>
          <br />
          <span>
            网格数：
            {distanceRange}
          </span>
          <br />
          <span>单网格收益率：{parseFloat(distance).toFixed(2)}</span>
          <br />
          <span>
            预估头寸强平价：
            {(parseFloat(current) * (1 - parseFloat(coeffient))).toFixed(2)}
          </span>
          <br />
        </div>
        <button
          className="w-1/3 rounded-md bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          type="button"
          onClick={() => {
            arr && setIsDialogOpen(true);
          }}
        >
          计算
        </button>
        <dialog
          open={isDialogOpen}
          className=" w-4/5 rounded-lg bg-slate-800 p-4 text-left text-white opacity-80"
        >
          <table className="w-full">
            <caption className="mb-4 text-2xl font-bold">
              {style}计算结果:
            </caption>
            <thead className="border-b border-white">
              <tr>
                <th>手数</th>
                <th>持仓成本</th>
              </tr>
            </thead>
            <tbody>
              {arr &&
                arr.map((i, idx) => (
                  <tr key={idx} className="hover:bg-white hover:bg-opacity-20">
                    <td>{i.num}</td>
                    <td>{i.price}</td>
                  </tr>
                ))}
            </tbody>
            <tfoot className="border-t border-white">
              <tr>
                <td colSpan={2}>总保证金：{(total * coeffient).toFixed(2)}</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  持仓平均数：
                  {arr
                    ? (
                        total / arr.reduce((acc, cur) => acc + cur.num, 0)
                      ).toFixed(2)
                    : 0}
                </td>
              </tr>
            </tfoot>
          </table>
          <button
            className="w-full rounded-md bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={() => setIsDialogOpen(false)}
          >
            关闭
          </button>
        </dialog>
      </div>
    </div>
  );
}
