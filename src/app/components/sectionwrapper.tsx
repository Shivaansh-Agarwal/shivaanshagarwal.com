type SectionWrapper = {
  children: React.ReactNode;
  sectionHeading: string;
};
export const SectionWrapper = ({ children, sectionHeading }: SectionWrapper) => {
  return (
    <section className='flex flex-col items-start mt-5 sm:mt-14'>
      <h1 className='font-semibold text-3xl md:text-4xl pb-2 sm:pb-3'>{sectionHeading}</h1>
      {children}
    </section>
  );
};
