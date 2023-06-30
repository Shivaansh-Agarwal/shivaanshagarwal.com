type MainProps = {
  children: React.ReactNode;
};
export function Main({ children }: MainProps) {
  return <main className='mt-28 md:mt-48 px-4 md:px-32 lg:px-60 xl:px-72 2xl:px-96 mb-4'>{children}</main>;
}
