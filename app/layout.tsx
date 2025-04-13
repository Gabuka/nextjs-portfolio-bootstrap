import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'Gabriel Oka - Portfólio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main className="container py-4">{children}</main>
      </body>
    </html>
  )
}