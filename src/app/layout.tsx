import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'UEV Boilerplate - Application',
  description: 'A structure with rules to help you code nextjs apps with cursor AI effectively.',
  icons: {
    icon: '/uev.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/uev.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  )
} 