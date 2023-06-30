import Image from 'next/image';
import Link from 'next/link';
import { SocialMediaBar } from './socialmediabar';

export function AboutMe() {
  return (
    <div className='flex flex-col gap-4 md:gap-20 md:flex-row'>
      <div className='flex flex-col'>
        <div
          style={{ maxWidth: '250px', maxHeight: '250px' }}
          className='bg-gradient-to-b from-orange-500 via-white to-green-500 p-2 flex justify-center items-center'
        >
          <Image
            src='/images/shivaansh.jpg'
            alt='Profile'
            width={200}
            height={200}
            className='w-full h-full'
            priority={true}
          />
        </div>
        <SocialMediaBar />
      </div>
      <div style={{ flexShrink: '2' }} className='flex flex-col max-w-xs md:max-w-lg gap-4'>
        <h1 className='font-semibold text-3xl md:text-5xl hidden md:block'>Hey, I&apos;m Shivaansh!</h1>
        <p className='mt-5 text-lg'>Welcome to my virtual home. 🏠</p>
        <p>
          I&apos;m a Software Engineer based in India, specializing in frontend web development, <br />
          currently working at{' '}
          <Link href='https://www.etmoney.com/' className='text-blue-700'>
            ETMoney
          </Link>{' '}
          Gurgaon, one of India&apos;s leading fintech investment startup.
        </p>
        <p>
          Prior to this I&apos;ve experience working at leading Indian startups and global MNCs, like{' '}
          <Link href='https://mygate.com/' className='text-blue-700'>
            MyGate
          </Link>{' '}
          Bangalore and{' '}
          <Link href='https://www.temenos.com/' className='text-blue-700'>
            Temenos
          </Link>{' '}
          Hyderabad.{' '}
        </p>
        <p>In my spare time, I enjoy exploring areas like personal finance, investing.</p>
      </div>
    </div>
  );
}
