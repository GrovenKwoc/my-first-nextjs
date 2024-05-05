"use client";
export default function Page() {
  return (
    <div>
      <h1>欧易</h1>
      <label>
        请输入:
        <input type="text" name="princpal"/>
        <p>您的成本均价为：0.00</p>
        <button type="button" onClick={() => {alert('计算中...')}}>计算</button>
      </label>
    </div>
  );
}
