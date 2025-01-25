import './globals.css'

export const metadata = {
  title: 'IRIS - Next-gen Virtual Machines',
  description: 'Select a virtual private server (VPS) with more power, flexibility, simplicity, and possibility.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 