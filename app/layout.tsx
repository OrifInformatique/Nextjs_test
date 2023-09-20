
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
}

const RootLayout = ({ children, }: {children: React.ReactNode}) => {
  return (
    <html lang="en" data-bs-theme="light">
      <body>{children}</body>
    </html>
  )
};
export default RootLayout;

