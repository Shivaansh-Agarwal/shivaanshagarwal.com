'use client';

import { useCallback, useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

type ImageCarouselProps = {
  maxImages?: number;
  timer?: number;
};
export function ImageCarousel({ maxImages = 10, timer = 3000 }: ImageCarouselProps) {
  const [imageURLs, setImageURLs] = useState([]);
  const [currImgIndex, setCurrImgIndex] = useState(0);

  const openNextImage = useCallback(() => {
    setCurrImgIndex((currImgIndex) => (currImgIndex === maxImages - 1 ? 0 : currImgIndex + 1));
  }, [setCurrImgIndex, maxImages]);
  const openPreviousImage = useCallback(() => {
    setCurrImgIndex((currImgIndex) => (currImgIndex === 0 ? maxImages - 1 : currImgIndex - 1));
  }, [setCurrImgIndex, maxImages]);

  const fetchImages = async () => {
    const response = await fetch('https://www.reddit.com/r/aww/top/.json?t=all');
    const data = await response.json();
    const images = data.data.children.map((item: any) => item.data.thumbnail).slice(0, maxImages);
    setImageURLs(images);
  };

  useEffect(() => {
    fetchImages();
  }, []);
  useEffect(() => {
    const timerId = setTimeout(() => {
      openNextImage();
    }, timer);
    return () => {
      clearTimeout(timerId);
    };
  }, [timer, openNextImage, currImgIndex]);

  return (
    <div
      className='border flex relative'
      style={{
        width: '600px',
        height: '300px',
      }}
    >
      <button className='absolute left-1 top-1/2 transform -translate-y-1/2 z-10 bg-white' onClick={openPreviousImage}>
        <MdChevronLeft size={'50px'} />
      </button>
      <div
        className='relative h-full w-full bg-no-repeat bg-cover'
        style={{
          backgroundImage: 'url(' + imageURLs[currImgIndex] + ')',
        }}
      >
        <div className='absolute bottom-1 left-1/2 transform -translate-x-1/2'>
          {/* {imageURLs.map((item) => (
            <div className=''></div>
          ))} */}
        </div>
      </div>
      <button className='absolute right-1 top-1/2 transform -translate-y-1/2 z-10 bg-white' onClick={openNextImage}>
        <MdChevronRight size={'50px'} />
      </button>
    </div>
  );
}
