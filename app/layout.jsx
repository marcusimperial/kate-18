import './globals.css'
import localFont from 'next/font/local';

export const metadata = {
  title: 'Eliza Kate @ 18',
  description: "Eliza Kate's 18th Birthday Debut",
}

const elegante = localFont({ src: './assets/Elegante.woff', variable: '--font-elegante' });
const georgia = localFont({ src: './assets/Georgia.woff', variable: '--font-georgia' });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${elegante.variable} ${georgia.variable} font-sans`}>{children}</body>
    </html>
  )
}
