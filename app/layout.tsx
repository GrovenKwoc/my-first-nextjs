import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';

import { Metadata } from 'next';
 
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
