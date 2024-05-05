"use client";
import {useState} from "react";

export default function Page() {
    const [current,setCurrent] = useState('');
    const [low,setLow] = useState('');
    const [high,setHigh] = useState('');
    const [distance,setDistance] = useState('');
  return (
    <div>
      <h1>欧易</h1>
      <label>
        盘面价格:{current}
        <input type="text" value={current} onChange={(e) => {setCurrent(e.target.value)}} />
        最低价格:{low}
        <input type="text" value={low} onChange={(e) => {setLow(e.target.value)}} />
        最高价格:{high}
        <input type="text" value={high} onChange={(e) => {setHigh(e.target.value)}} />
        间距:{distance}
        <input type="text" value={distance} onChange={(e)=>setDistance(e.target.value)}/>

        <button type="button" onClick={() => {alert('预估头寸强平价:'+current+',持仓平均价:'+low)}}>计算</button>
      </label>
    </div>
  );
}
