'use client';

import { Navbar } from './components/navbar';

export default function Page() {
  return (
    <main className="m-4 flex h-screen flex-col rounded bg-red-300 p-4">
      <section className="flex flex-row justify-between rounded bg-white p-4">
        <Navbar />
      </section>

      <section className="mt-4 flex h-full flex-row gap-10 rounded">
        <section className="w-2/5 rounded-xl bg-white p-4">111</section>
        <section className="w-3/5 rounded-xl bg-white p-4">222</section>
      </section>

      <section className="mb-2 mt-4 h-1/5 rounded-2xl bg-white"></section>
    </main>
  );
}
