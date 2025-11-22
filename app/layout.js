export const metadata = {
  title: 'Portrait Gallery - Canker-Blossom',
  description: 'Editorial-style portrait photography featuring bold fashion in urban neon settings',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
