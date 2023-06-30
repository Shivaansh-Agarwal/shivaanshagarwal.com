import Link from 'next/link';

export default function Page() {
  return (
    <div className='flex flex-col gap-4'>
      <section>
        <h1 className='text-xl'>
          <Link href='https://frontendeval.com/'>FrontendEval</Link>
        </h1>
        <ul>
          <li className='ml-4 list-disc'>
            <Link href='projects/frontendeval/image-carousel' className='text-blue-600 hover:underline'>
              Image Carousel
            </Link>
          </li>
        </ul>
      </section>
      <section>
        <h1 className='text-xl'>General</h1>
        <ul>
          <li className='ml-4 list-disc'>
            <Link href='projects/general/password-generator' className='text-blue-600 hover:underline'>
              Password Generator
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
