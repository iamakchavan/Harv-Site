import { instrumentSerif, instrumentSans } from "../utils/fonts"

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${instrumentSans.variable}`}>
      <body className={`font-instrument-sans ${instrumentSans.variable}`}>{children}</body>
    </html>
  )
}



import './globals.css'