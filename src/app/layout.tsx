import './globals.css'
import type { Metadata } from 'next'
import { Oxygen } from 'next/font/google'

const oxygen = Oxygen({
  subsets: ['latin'],
  weight: '300'
})

export const metadata: Metadata = {
  title: 'Phoenix Dawn',
  description: 'Website for the Phoenix Dawn Clan.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet"></link>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script> */}
      <body className={`${oxygen.className}`}>{children}</body>
    </html>
  )
}
