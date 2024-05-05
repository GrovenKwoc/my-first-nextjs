'use client';
import { useState } from 'react';

export default function Page() {
  const [current, setCurrent] = useState('');
  const [low, setLow] = useState('');
  const [high, setHigh] = useState('');
  const [distance, setDistance] = useState('');
  const [coeffient, setCoeffient] = useState('');
  const [style, setStyle] = useState('');
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">欧易计算器</h1>
      <div className='p-4'>
      <label>
        盘面价格:{current}
        <input className="ring-2 ring-gray-200 rounded-md hover:ring-4 hover:ring-gray-300 ml-4"
          type="text"
          value={current}
          onChange={(e) => {
            setCurrent(e.target.value);
          }}
        />
      </label>
      </div>
      <div className='p-4'>
      <label>
        最低价格:{low}
        <input className="ring-2 ring-gray-200 rounded-md hover:ring-4 hover:ring-gray-300 ml-4"
          type="text"
          value={low}
          onChange={(e) => {
            setLow(e.target.value);
          }}
        />
      </label>
      </div>
      <div className='p-4'>
      <label>
        最高价格:{high}
        <input className="ring-2 ring-gray-200 rounded-md hover:ring-4 hover:ring-gray-300 ml-4"
          type="text"
          value={high}
          onChange={(e) => {
            setHigh(e.target.value);
          }}
        />
      </label>
      </div>
      <div className='p-4'>
      <label>
        间距:{distance}
        <input className="ring-2 ring-gray-200 rounded-md hover:ring-4 hover:ring-gray-300 ml-4"
          type="text"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
      </label>
      </div>
      <div className='p-4'>
      <label>
        杠杆系数:{coeffient}
        <input
          type="text" className="ring-2 ring-gray-200 rounded-md hover:ring-4 hover:ring-gray-300 ml-4"
          value={coeffient}
          onChange={(e) => setCoeffient(e.target.value)}
        />
      </label>
      </div>
      <div className='p-4'>
      <label>
        等比/等差:{style}
        <select onChange={(e) => setStyle(e.target.value)} className="ring-2 ring-gray-200 rounded-md ml-4">
          <option value="等比">等比</option>
          <option value="等差">等差</option>
        </select>
      </label>
      </div>
      <div className='p-4'>
      <span>单手最小保证金：{(parseFloat(current) * parseFloat(coeffient)).toFixed(2)}</span>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-24"
        type="button"
        onClick={() => {
          alert('预估头寸强平价:' + current + ',持仓平均价:' + low);
        }}
      >
        计算
      </button>
    </div>
  );
}
