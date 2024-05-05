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
    <div>
      <h1>欧易</h1>
      <label>
        盘面价格:{current}
        <input
          type="text"
          value={current}
          onChange={(e) => {
            setCurrent(e.target.value);
          }}
        />
      </label>
      <br/>
      <label>
        最低价格:{low}
        <input
          type="text"
          value={low}
          onChange={(e) => {
            setLow(e.target.value);
          }}
        />
      </label>
      <br/>
      <label>
        最高价格:{high}
        <input
          type="text"
          value={high}
          onChange={(e) => {
            setHigh(e.target.value);
          }}
        />
      </label>
      <br/>
      <label>
        间距:{distance}
        <input
          type="text"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
      </label>
      <br/>
      <label>
        杠杆系数:{coeffient}
        <input
          type="text"
          value={coeffient}
          onChange={(e) => setCoeffient(e.target.value)}
        />
      </label>
      <br/>
      <label>
        等比/等差:{style}
        <select onChange={(e) => setStyle(e.target.value)}>
          <option value="等比">等比</option>
          <option value="等差">等差</option>
        </select>
      </label>
      <br/>
      <span>单手最小保证金：{(parseFloat(current) * parseFloat(coeffient)).toFixed(2)}</span>
      <br />
      <button
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
