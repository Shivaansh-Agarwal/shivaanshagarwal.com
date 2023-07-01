'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();
  const routesList = [
    {
      route: '/projects',
      displayName: 'Projects',
      activeLinkClassName: 'border-indigo-300',
    },
    {
      route: '/blogs',
      displayName: 'Blogs',
      activeLinkClassName: 'border-orange-300',
    },
  ];
  return (
    <nav className='flex flex-row justify-start items-center gap-4'>
      {routesList.map(({ route, displayName, activeLinkClassName }) => {
        const isLinkActive = pathname.includes(route);
        return (
          <Link
            key={route}
            href={route}
            className={`border-b-2  ${isLinkActive ? `${activeLinkClassName}` : 'font-normal border-transparent'}`}
          >
            {displayName}
          </Link>
        );
      })}
    </nav>
  );
}
