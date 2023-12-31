import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Match logger',
  description: 'Log realtime matches',
}

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
        <body className={`bg-[#F3F5F9] ${inter.className}`}>
            <main className="flex flex-col min-h-screen items-center justify-center p-24 overflow-x-hidden md:overflow-hidden">
                {children}
            </main>
        </body>
    </html>
  )
}
