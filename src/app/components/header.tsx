import { bebasneue_font } from '@/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from './navbar';

export function Header() {
  return (
    <header className='flex flex-col justify-center items-start gap-2 fixed top-0 left-0 right-0 pt-4 pb-4 md:pb-0 md:pt-16 px-4 md:px-32 lg:px-60 xl:px-72 2xl:px-96 bg-gray-100'>
      <Link
        href='/'
        className={`flex flex-row justify-start items-center gap-2 ${bebasneue_font.className} text-4xl font-semibold`}
      >
        <Image src='/images/elephant.png' width='25' height='25' alt='Logo' />
        <span>Shivaansh Agarwal</span>
      </Link>
      <Navbar />
    </header>
  );
}
