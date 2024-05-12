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
    template: '%s | G.W.O ☢ 情绪价值管理平台',
    default: 'G.W.O ☢ 情绪价值管理平台',
  },
  description:
    '全Soul最大情绪管理平台，专注于情绪价值管理，助力全Soul成员提升情绪价值！',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
  auth,
}: {
  children: React.ReactNode;
  auth: React.ReactNode;
}) {
  return (
    <html lang="zh_CN">
      <body
        className={`${inter.className} max-w-screen flex h-screen flex-col overflow-auto bg-gray-100 text-gray-800 antialiased`}
      >
        <header className="flex flex-col justify-between space-y-2 border-b border-gray-200 bg-white p-4 md:flex-row">
          <GwoLogo />
          <Navbar />
        </header>
        <main className="flex grow flex-row content-center justify-start space-x-4 p-4">
          <Claim />
          {auth}
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </main>
      </body>
    </html>
  );
}
