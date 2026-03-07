export const metadata = {
  title: 'SAPNE',
  description: 'Support Association for Promoting Nationwide Education',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
