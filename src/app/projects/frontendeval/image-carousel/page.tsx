import { ImageCarousel } from './components/ImageCarousel';

export default function Page() {
  return (
    <div className='w-full h-full flex flex-col justify-start items-center gap-8'>
      <h1 className='font-semibold text-xl mt-4'>Image Carousel</h1>
      <div>Date: 28th, 29th June 2023</div>
      <ImageCarousel />
    </div>
  );
}
