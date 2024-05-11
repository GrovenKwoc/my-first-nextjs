import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { GwoLogo } from '@/app/ui/gwo-logo';
import { Navbar } from '@/app/ui/navbar';
import { Metadata } from 'next';
import { Claim } from './ui/claim';
import { Suspense } from 'react';
import Loading from './loading';
export const metadata: Metadata = {
  title: {
    template: '%s | G.W.O ☢ 禁乐园',
    default: 'G.W.O ☢ 禁乐园',
  },
  description: '全Soul最强的禁乐园，欢迎广大Soul粉丝来禁！',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
  gptbot,
  auth,
}: {
  children: React.ReactNode;
  gptbot: React.ReactNode;
  auth: React.ReactNode;
}) {
  return (
    <html lang="zh_CN">
      <body
        className={`${inter.className} max-w-screen flex max-h-screen flex-col bg-gray-100 text-gray-800 antialiased`}
      >
        <header className="flex w-full flex-row items-center justify-between border-b border-gray-200 bg-white px-4 py-2">
          <GwoLogo />
          <Navbar />
        </header>
        <main className="flex min-h-screen flex-row divide-x-4 divide-gray-200">
          <Claim />
          <div>{auth}</div>
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <Suspense fallback={<Loading />}>{gptbot}</Suspense>
        </main>
      </body>
    </html>
  );
}
