import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'PayaGo Recruitment — Warehouse Staffing Agency | Night Shifts & Short-Notice Cover',
  description: 'UK warehouse staffing agency specialising in night shifts, short-notice cover, and full PAYE compliance. One all-inclusive rate, no hidden fees. Get started with a free trial.',
  icons: {
    icon: '/payago-logo.png',
    apple: '/payago-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
