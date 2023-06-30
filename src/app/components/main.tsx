type MainProps = {
  children: React.ReactNode;
};
export function Main({ children }: MainProps) {
  return <main className='mt-28 md:mt-48 mx-4 md:mx-16 mb-4'>{children}</main>;
}
