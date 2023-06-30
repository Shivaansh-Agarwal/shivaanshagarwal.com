import Image from 'next/image';

export const SocialMediaBar = () => {
  const socialMediaDetailsList = [
    {
      url: 'mailto:shivanshagrawal1997@gmail.com',
      src: '/images/icon-gmail.svg',
      alt: 'Gmail',
    },
    {
      url: 'https://github.com/Shivaansh-Agarwal',
      src: '/images/icon-github.svg',
      alt: 'Github',
    },
    {
      url: 'https://www.linkedin.com/in/shivaansh-agarwal/',
      src: '/images/icon-linkedin.svg',
      alt: 'Linkedin',
    },
    {
      url: 'https://twitter.com/shivaansh9june',
      src: '/images/icon-twitter.svg',
      alt: 'Twitter',
    },
  ];
  return (
    <div className='flex flex-row gap-2 pt-5 w-full'>
      {socialMediaDetailsList.map((item) => {
        const { url, src, alt } = item;
        return (
          <a href={url} target='_blank' rel='noreferrer' key={alt}>
            <Image src={src} alt={alt} className='w-7 h-7' width={30} height={30} />
          </a>
        );
      })}
    </div>
  );
};
