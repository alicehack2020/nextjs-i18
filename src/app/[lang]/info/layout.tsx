import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'info page',
  description: 'info page',
}

export default function layout({
  children,params
}: {
    children: React.ReactNode
    params:any
  }) {
  
  console.log("params",params.lang)
  return (
    <html lang={params.lang}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
