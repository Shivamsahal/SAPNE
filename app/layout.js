import './globals.css';

export const metadata = {
  title: 'SAPNE | Every child deserves a chance to dream',
  description:
    'SAPNE supports education, digital literacy, and brighter futures for children and communities.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
