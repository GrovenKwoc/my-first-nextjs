'use client';
import { useState } from 'react';
import GwoLogo from '../ui/gwo-logo';
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
      price: parseFloat(price),
    }));
  }

  if (open && high && low && ratio && style && style == '等比') {
    arr = prices.map((price, idx) => ({
      //当前手数
      num: (parseFloat(open) * parseFloat(ratio) ** idx).toFixed(2),
      //当前价格
      price: parseFloat(price),
    }));
  }

  if(arr){
    //处理累计部分
    for(let i = 0; i< arr.length; i++){
      arr[i].acc_num = i==0?parseFloat(arr[i].num):parseFloat(arr[i-1].acc_num)+parseFloat(arr[i].num);
      arr[i].acc_price = i==0?arr[i].price*arr[i].num : arr[i].price*arr[i].num + arr[i-1].acc_price;
      arr[i].avg_price = (arr[i].acc_price/arr[i].acc_num).toFixed(2);
      arr[i].acc_ratio = i==0?"N/A":(100*(arr[i].avg_price/arr[i-1].avg_price-1)).toFixed(2); 
    }
    // arr = arr.forEach((cur,idx,array)=>{
    //   return ({...cur,
    //     acc_num: idx==0?cur.num:cur.num + array[idx-1].acc_num,
        // acc_price: idx==0?cur.price*cur.num : cur.price*cur.num,
        // avg_price: cur.acc_price/cur.acc_num,
        // acc_ratio: idx==0?1:cur.avg_price/cur.avg_price,
      // })
    // });
    console.log(arr);
  }

  const total = arr
    ? {
        total_price: arr.reduce((acc, cur) => acc + cur.num * cur.price, 0),
        total_num: arr.reduce((acc, cur) => acc + parseFloat(cur.num), 0),
      }
    : { total_price: 0, total_num: 1 };

  console.log(total);
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
            *网格数量:
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
              公比:
              <input
                type="text"
                className="ml-4 rounded-md ring-2 ring-gray-200"
                value={ratio}
                onChange={(e) => {
                  setRatio(e.target.value);
                  setDiff('');
                }}
              />{' '}
            </label>
          ) : (
            <label>
              公差:
              <input
                type="text"
                className="ml-4 rounded-md ring-2 ring-gray-200"
                value={diff}
                onChange={(e) => {
                  setDiff(e.target.value);
                  setRatio('');
                }}
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
            网格数值：
            {distanceRange}
          </span>
          <br />
          {/* <span>单网格收益率：{parseFloat(distance).toFixed(2)}</span>
          <br /> */}
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
                <th>当前手数</th>
                <th>当前网格交易成本</th>
                <th>累计手数</th>
                <th>累计网格平均交易成本</th>
                <th>单网格收益率</th>
              </tr>
            </thead>
            <tbody>
              {arr &&
                arr.map((i, idx) => (
                  <tr key={idx} className="hover:bg-white hover:bg-opacity-20">
                    <td>{i.num}</td>
                    <td>{i.price}</td>
                    <td>{i.acc_num}</td>
                    <td>{i.avg_price}</td>
                    <td>{i.acc_ratio}</td>
                  </tr>
                ))}
            </tbody>
            <tfoot className="border-t border-white">
              <tr>
                <td colSpan={2}>
                  总保证金：{(total.total_price * coeffient).toFixed(2)}
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  持仓平均数：
                  {arr ? (total.total_price / total.total_num).toFixed(2) : 0}
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
