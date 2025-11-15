import type { Metadata } from 'next'
import { Inter, Allura } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });
const allura = Allura({ 
  subsets: ["latin"],
  variable: '--font-allura',
  weight: ['400']
});

export const metadata: Metadata = {
  title: 'A.M. SAT Tutoring',
  description: 'Expert SAT tutoring from a high-achieving student. 1530 SAT score, 800 in Math. Located in New Jersey.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${allura.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
