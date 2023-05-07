import Link from 'next/link';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BOOK NOB',
  description: '本を売るならBOOK NOB',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ja'>
      <head>
        <meta charSet='utf-8' />
        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>
        <header className='bg-teal-300 p-2 h-10'>
          <h1>{metadata.title}</h1>
        </header>
        <div className='flex min-h-[calc(100dvh-80px)]'>
          <aside className='border-r p-2 bg-teal-100'>
            <nav>
              <ul>
                <li>
                  <Link href='/'>Home</Link>
                </li>
                <li>
                  <Link href='/books'>Book</Link>
                </li>
                <li>
                  <Link href='/books/new'>New Book</Link>
                </li>
                <li>
                  <Link href='/authors'>Author</Link>
                </li>
                <li>
                  <Link href='/authors/new'>New Author</Link>
                </li>
              </ul>
            </nav>
          </aside>
          <main className='p-2'>{children}</main>
        </div>
        <footer className='bg-teal-300 p-2 h-10'>
          <p>© 2023 BOOK NOB</p>
        </footer>
      </body>
    </html>
  );
}
