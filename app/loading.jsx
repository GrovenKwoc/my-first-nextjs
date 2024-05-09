import Image from 'next/image';

export default function Loading() {
  return (
    <div>
      <Image
        className="h-full w-full object-contain"
        src="/momo.jpg"
        width="1080"
        height="608"
      />
    </div>
  );
}
