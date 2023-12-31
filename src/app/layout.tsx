
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import ReduxProvider from './provider'
import { CssBaseline,Box } from '@mui/material'
import Header from '@/app/components/big/header'
import Footer from '@/app/components/big/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

type Props = {
  children: ReactNode
}

export default function RootLayout({children}:Props) {
  return (
    <html lang="ja">
      <body className={`inter.className`}>
        <>
          <CssBaseline />
          <ReduxProvider>
            <Header />
          {children}
            <Footer />
          </ReduxProvider>
        </>
        </body>
    </html>
  )
}

