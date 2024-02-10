/* eslint-disable no-unused-vars */
/* eslint-disable react/function-component-definition */
import React from 'react';
import Link from 'next/link';
import { NissanLogo } from '@/logos';
import { useRouter } from 'next/router';
import sidebar from '@/utils/sidebar';
import NavItem from './NavItem';
import { Button } from '../buttons';
import { useUserContext } from '../context/userContext';

interface Props {
  isSidebarVisible: boolean;
}

const Sidebar: React.FC<Props> = ({ isSidebarVisible }) => {
  const router = useRouter();
  const redirectCB = (path: string) => router.push(path);
  const { state } = useUserContext();
  const { sidenavType } = state;

  const sidebarStyle: {
    dark: string;
    white: string;
    transparent: string;
    gray: string;
    bgray: string;
    primary: string;
    deeporange: string;
    lightgreen: string;
    cyan: string;
    boxShadow: string;
    [key: string]: string;
  } = {
    dark: 'bg-black',
    white: 'bg-white',
    transparent: 'bg-brown-500',
    gray: 'bg-gray-900',
    bgray: 'bg-blue-gray-500',
    primary: 'bg-primary',
    deeporange: 'bg-deep-orange-500',
    lightgreen: 'bg-light-green-500',
    cyan: 'bg-cyan-500',
    boxShadow: '0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -1px rgba(0,0,0,.06)',
  };

  return (
    <div className={`h-full w-80 p-3 lg:left-0 ${sidebarStyle[sidenavType]} ${sidebarStyle.boxShadow}`}>
      <div className="flex h-full w-full flex-col justify-between rounded-md">
        <div className="flex flex-col items-center gap-5 px-2 py-5">
          <Link href="/" className="w-44">
            <NissanLogo />
          </Link>
          <div className="flex w-full flex-col items-center gap-2">
            {sidebar.map((item) => (
              <NavItem
                key={item.name}
                href={item.path}
                Inco={item.icon}
                name={item.name}
              />
            ))}
          </div>
        </div>

        <Button
          onClick={() => {
            redirectCB('/login');
          }}
          className="m-5 text-sm text-white bg-blue-500 hover:bg-red-600"
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
