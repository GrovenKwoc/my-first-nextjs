'use client';

import GwoLogo from '../ui/gwo-logo';
import {Navbar} from './components/navbar';

export default function Page() {
  return (
    <main className="m-4 flex h-screen flex-col rounded bg-red-300 p-4">
      <section className="flex flex-row p-4 justify-between bg-white rounded">
        <GwoLogo />
        <Navbar/>
      </section>

      <section className="flex flex-row h-full mt-4 gap-10 rounded">
          <section className='w-2/5 p-4 bg-white rounded-xl'>111</section>
          <section className='w-3/5 p-4 bg-white rounded-xl'>222</section>
      </section>

      <section className="h-1/5 mt-4 mb-2 bg-white rounded-2xl">
      </section>
    </main>
  );
}
