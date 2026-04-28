import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Header from '@/components/header';
import Footer from '@/components/footer';

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Playfair({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Ardell Living | Housing-Led Supported Living',
  description: 'Ardell Living provides safe, effective, and compassionate housing-led supported living services for vulnerable adults.',
  // , meeting CQC standards for safety and quality care.',
  icons: {
    icon: [
      // {
      //   url: '/icon-light-32x32.png',
      //   media: '(prefers-color-scheme: light)',
      // },
      // {
      //   url: '/icon-dark-32x32.png',
      //   media: '(prefers-color-scheme: dark)',
      // },
      {
        url: '/ArdellLogo.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/ArdellLogo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
