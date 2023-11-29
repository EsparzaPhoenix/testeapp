
import { Inter } from 'next/font/google'
import './globals.scss'
import Header from '@/components/Header/header'
import Footer from '@/components/Footer/footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Site Foda',
  description: 'um site feito por Esparza',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
