'use client';
import { useState } from 'react';
import { set } from 'zod';

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

  function calDiff(diff, open, number) {
    const arr = [];
    for (let i = open; i < number; i += diff) {
      arr.push(i);
    }
    return arr;
  }

  function calRatio(ratio, open, number) {
    const arr = [];
    if(ratio == 1){
      return arr;
    }
    for (let i = open; i < number; i *= ratio) {
      arr.push(i);
    }
    return arr;
  }

  let arr;
  if (open && high && low && diff && style && style == '等差') {
    arr = calDiff(parseFloat(diff), parseFloat(open), (parseFloat(high)-parseFloat(low))/parseFloat(distance));
  }
  if (open && high && low && ratio && style && style == '等比') {
    arr = calRatio(parseFloat(ratio),  parseFloat(open), (parseFloat(high)-parseFloat(low))/parseFloat(distance));
  }
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">欧易计算器</h1>
      <div className="p-4">
        <label>
          盘面价格:{current}
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
          最低价格:{low}
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
          最高价格:{high}
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
          间距:{distance}
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
          杠杆系数:{coeffient}
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
          开仓手数：{' '}
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
          等比/等差:{style}
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
            公差：{' '}
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
          {(
            (parseFloat(high) - parseFloat(low)) /
            parseFloat(distance)
          ).toFixed(2)}
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
        className="w-24 rounded-md bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        type="button"
        onClick={() => {
          arr && setIsDialogOpen(true);
        }}
      >
        计算
      </button>
      <dialog
        open={isDialogOpen}
        className=" w-4/5 rounded-lg bg-slate-600 p-4"
      >
        <table>
          <caption className="text-4xl font-bold">计算结果:</caption>
          <thead>
            <th>手数</th>
            <th>持仓成本</th>
          </thead>
          <tbody>
          {arr && arr.map((i, idx) => (
            <tr key={idx}>
              <td>{i}</td>
              <td>{(parseFloat(current) * i).toFixed(2)}</td>
            </tr>
          ))}
          </tbody>
        </table>
        <button
          className="w-full rounded-md bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={() => setIsDialogOpen(false)}
        >
          关闭
        </button>
      </dialog>
    </div>
  );
}
