import { lusitana } from '@/app/ui/fonts';

export function GwoLogo() {
  return (
    <div className={`${lusitana.className} flex flex-row`}>
      <svg className="origin- h-10 w-10 animate-spin_ease rounded-full border-b-8 border-r-2 border-yellow-500 shadow-lg">
        {/* <rect x="25%" width="25%" height="25%" fill="green" />
        <rect x="25%" y="25%" width="25%" height="25%" fill="red" />
        <rect y="25%" width="25%" height="25%" fill="blue" />
        <rect width="25%" height="25%" fill="purple" /> */}
      </svg>
      <p className="text-4xl font-bold">G.W.O 禁乐园</p>
      <svg className="origin- animate-spin_reverse_ease h-10 w-10 rounded-full border-b-8 border-r-2 border-yellow-500 shadow-lg">
        {/* <rect x="25%" width="25%" height="25%" fill="green" />
        <rect x="25%" y="25%" width="25%" height="25%" fill="red" />
        <rect y="25%" width="25%" height="25%" fill="blue" />
        <rect width="25%" height="25%" fill="purple" /> */}
      </svg>
    </div>
  );
}
