import { rubik_font } from '@/fonts';
import { Header } from './components/header';
import { Main } from './components/main';
import './globals.css';

export const metadata = {
  description: 'Software Engineer @ ETMoney | Ex-MyGate,Temenos | Frontend, ReactJS, Javascript',
  icons: {
    icon: '/images/elephant.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`bg-gray-100 text-gray-800 text-sm md:text-base ${rubik_font.className}`}>
        <Header />
        <Main>{children}</Main>
      </body>
    </html>
  );
}
