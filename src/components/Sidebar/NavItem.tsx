import { useRouter } from 'next/router';
import React from 'react';
import { IconType } from 'react-icons';
import { Button } from '@material-tailwind/react';
import { useUserContext } from '../context/userContext';


interface Props {
  Inco: IconType;
  name: string;
  href: string;
}

function NavItem({ Inco, name, href }: Props) {
  const router = useRouter();
  const isActive = router.pathname === href;
  const { state } = useUserContext();

  const { sidenavColor, sidenavType } = state;

  const redirectCB = (path: string) => router.push(path);
  const getColor = (): "white"|"blue-gray"|"gray"|"brown"|"deep-orange"|"orange"|"amber"|"yellow"|"lime"|"light-green"|"green"|"teal"|"cyan"|"light-blue"|"blue"|"indigo"|"deep-purple"|"purple"|"pink"|"red"  => {
    if (isActive) {
      return sidenavColor;
    }
    if (sidenavType === 'gray') {
      return 'white';
    }
    if (sidenavType === 'white') {
      return 'gray';
    }
    if (sidenavType === 'transparent') {
      return 'red';
    }
    return 'blue-gray';
  };

  return (
    <Button
      onClick={() => redirectCB(href)}
      variant={isActive ? 'gradient' : 'text'}
      color={getColor()}
      className={`middle none center flex w-full items-center gap-4 rounded-lg bg-gradient-to-tr ${
        router.pathname === href
          ? 'bg-gray-800 text-white shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/40'
          : 'nav-link active:bg-indigo-gray-500/30  backdrop-opacity-10 hover:text-indigo-600'
      }  px-4 py-3 font-sans text-xs font-bold capitalize transition-all  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
    >
      <Inco
        className={`h-5 w-5 ${
          isActive || (sidenavType !== 'white' && sidenavType !== 'transparent')
            ? 'text-white'
            : 'text-black'
        }`}
      />

      <p
        className={`block font-sans font-medium capitalize leading-relaxed text-inherit antialiased ${
          isActive || (sidenavType !== 'white' && sidenavType !== 'transparent')
            ? 'text-white'
            : 'text-black'
        }`}
      >
        {name}
      </p>
    </Button>
  );
}

export default NavItem;
