import { lusitana } from '@/app/ui/fonts';

export default function GwoLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row`}
    >
      <p className="text-2xl font-bold hover:drop-shadow-2xl">
        &#9198; G.W.O
        禁乐园 
        &#9197;
      </p>
    </div>
  );
}
