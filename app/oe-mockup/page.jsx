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
  const [many, setMany] = useState('many');

  const distanceRange = (
    (parseFloat(high) - parseFloat(low)) /
    parseFloat(distance)
  ).toFixed(2);

  function generatePrices(current, low, high, distanceRange, many) {
    const arr = [];
    if (many == 'many') {
      for (let i = current; i <= high; i += distanceRange) {
        arr.push(i.toFixed(2));
      }
    } else {
      for (let i = current; i >= low; i -= distanceRange) {
        arr.push(i.toFixed(2));
      }
    }
    return arr;
  }

  const prices = generatePrices(
    parseFloat(current),
    parseFloat(low),
    parseFloat(high),
    parseFloat(distanceRange),
    many,
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

  const total = arr
    ? {
        //总交易额
        total_price: arr.reduce((acc, cur) => acc + cur.num * cur.price, 0),
        //总手数
        total_num: arr.reduce((acc, cur) => acc + parseFloat(cur.num), 0),
      }
    : '';

  if (total) {
    //处理累计部分
    for (let i = 0; i < arr.length; i++) {
      //累计手数，本项手数+上一项的累计手数
      arr[i].acc_num =
        i == 0
          ? parseFloat(arr[i].num)
          : (parseFloat(arr[i - 1].acc_num) + parseFloat(arr[i].num)).toFixed(
              2,
            );

      //累计交易额，本项交易额+上一项的累计交易额
      arr[i].acc_price =
        i == 0
          ? arr[i].price * arr[i].num
          : arr[i].price * arr[i].num + arr[i - 1].acc_price;

      //截至本项的平均交易成本
      arr[i].avg_price = (arr[i].acc_price / arr[i].acc_num).toFixed(2);

      //单网格收益率
      if (i > 0) {
        switch (many) {
          case 'many':
            arr[i].acc_ratio = (
              ((arr[i].price - arr[i].avg_price) / (current * coeffient)) *
              100
            ).toFixed(2);
            break;
          case 'empty':
            arr[i].acc_ratio = Math.abs(
              ((arr[i - 1].price - arr[i].avg_price) / (current * coeffient)) *
                100,
            ).toFixed(2);
            break;
          case 'many_reverse':
            arr[i].acc_ratio = (
              ((arr[i].num * arr[i - 1].price) /
                (arr[i].acc_num * current * coeffient)) *
              100
            ).toFixed(2);
            break;
          case 'empty_reverse':
            arr[i].acc_ratio = (
              ((arr[i].num * arr[i - 1].price) /
                (arr[i].acc_num * current * coeffient)) *
              100
            ).toFixed(2);
            break;
        }
      } else {
        arr[i].acc_ratio = 'N/A';
      }

      //浮亏数值
      arr[i].moving_ratio = (
        Math.abs(arr[i].avg_price - arr[i].price) * arr[i].acc_num
      ).toFixed(2);
    }
  }

  return (
    <div>
      <div className="h-16 bg-blue-500 p-4 text-white">
        <GwoLogo />
      </div>
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="w-1/3 rounded-md bg-blue-500 p-4 text-center text-2xl text-white">
          欧易计算器
        </h1>
        <div className="space-x-8 p-4 text-lg">
          <label for="many">
            顺势做多
            <input
              defaultChecked
              type="radio"
              id="many"
              name="strategy"
              onChange={() => setMany('many')}
            />
          </label>
          <label for="empty">
            顺势做空
            <input
              type="radio"
              id="empty"
              name="strategy"
              onChange={() => setMany('empty')}
            />
          </label>
          <label for="many_reverse">
            逆势做多
            <input
              type="radio"
              id="many_reverse"
              name="strategy"
              onChange={() => setMany('many_reverse')}
            />
          </label>
          <label for="empty_reverse">
            逆势做空
            <input
              type="radio"
              id="empty_reverse"
              name="strategy"
              onChange={() => setMany('empty_reverse')}
            />
          </label>
        </div>
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
            单笔最小保证金：
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
          {many == 'many' || many == 'many_reverse' ? (
            <span>
              预估头寸强平价：
              {(parseFloat(current) * (1 - parseFloat(coeffient))).toFixed(2)}
            </span>
          ) : (
            <span>
              预估头寸强平价：
              {(parseFloat(current) * (1 + parseFloat(coeffient))).toFixed(2)}
            </span>
          )}
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
          className="h-1/2 w-4/5 rounded-lg bg-slate-800 p-4 text-left text-white opacity-80"
        >
          <table className="block h-full w-full justify-self-center overflow-hidden pl-10 hover:overflow-auto">
            <caption className="mb-4 text-2xl font-bold">
              {style}
              {many == 'many'
                ? '顺势多单'
                : many == 'empty'
                ? '顺势空单'
                : many == 'many_reverse'
                ? '逆势多单'
                : '逆势空单'}
              计算结果:
            </caption>
            <thead className="border-b border-white">
              <tr>
                <th className="w-12 border border-white">手数</th>
                <th className="w-24 border border-white">当前网格价</th>
                <th className="w-24 border border-white">累计手数</th>
                <th className="w-32 border border-white">平均交易成本</th>
                <th className="w-32 border border-white">盈/亏值</th>
                <th className="w-32 border border-white">单网格收益率</th>
                <th className="w-24 border border-white">强平价</th>
              </tr>
            </thead>
            <tbody className="h-full">
              {arr &&
                arr.map((i, idx) => (
                  <tr
                    key={idx}
                    className="h-10 border-white hover:bg-white hover:bg-opacity-30"
                  >
                    <td>{i.num}</td>
                    <td>{i.price}</td>
                    <td>{i.acc_num}</td>
                    <td>{i.avg_price}</td>
                    <td>{i.moving_ratio}</td>
                    <td>{i.acc_ratio}</td>
                    <td>
                      {many == 'many' || many == 'many_reverse'
                        ? (
                            i.price -
                            parseFloat(current) * parseFloat(coeffient)
                          ).toFixed(2)
                        : (
                            parseFloat(i.avg_price) +
                            parseFloat(current) * parseFloat(coeffient)
                          ).toFixed(2)}
                    </td>
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
                  持仓平均价：
                  {arr ? (total.total_price / total.total_num).toFixed(2) : 0}
                </td>
              </tr>
            </tfoot>
          </table>
          <button
            className="mt-4 w-full rounded-md bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={() => setIsDialogOpen(false)}
          >
            关闭
          </button>
        </dialog>
      </div>
    </div>
  );
}
