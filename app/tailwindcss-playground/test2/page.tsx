import {List} from '@/app/tailwindcss-playground/components/list.jsx';
import {MyTable} from '@/app/tailwindcss-playground/components/table.jsx';

export default async function Page() {
  return (
    <main className="flex flex-col divide-cyan-500">
      <List/>
      <MyTable/>
    </main>
  );
}
