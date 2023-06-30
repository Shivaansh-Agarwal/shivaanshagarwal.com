import { PasswordGenerator } from './components/PasswordGenerator';

export default function Page() {
  return (
    <div className='w-full h-full flex flex-col justify-start items-center gap-8'>
      <h1 className='font-semibold text-xl mt-4'>Password Generator</h1>
      <div>Date: 29th June 2023</div>
      <div className='w-3/4 md:2/3 lg:w-2/4'>
        <PasswordGenerator />
      </div>
    </div>
  );
}
