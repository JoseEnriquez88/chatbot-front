import type { Metadata } from 'next'
import Providers from './Providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'Promtior Chatbot',
  description: 'Frontend del chatbot con RAG',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
