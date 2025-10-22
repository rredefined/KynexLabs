import './globals.css'

export const metadata = {
  title: 'AxyteHost- Next-gen Game Servers',
  description: 'Select a game server with more power, flexibility, simplicity, and possibility.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 
