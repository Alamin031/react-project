import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { GrSettingsOption } from 'react-icons/gr';
import Sidebar from '@/components/Sidebar';
import { Configurator } from '@/layouts/configurator';
import { H6 } from './Typography';
import { useUserContext, setOpenConfigurator } from './context/userContext';

export default function DashboardNav() {
  const { dispatch } = useUserContext();

  const router = useRouter();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const pathSegments = router.asPath
    .split('/')
    .filter((segment) => segment !== '')
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1));

  return (
    <div className="relative">
      <Configurator />

      <header
        style={{
          boxShadow:
            '0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -1px rgba(0,0,0,.06)',
        }}
        className="max-lg:m-3 rounded-lg bg-white p-4 lg:mr-3 lg:mt-3"
      >
        <div className="mx-auto flex h-full items-center justify-between text-gray-700 ">
          <div className="flex gap-3">
            <div className="flex flex-col gap-1">
              <ul className="flex">
                {pathSegments.map((segment, index) => (
                  <li key={`index-${index + 1}`}>
                    {index !== 0 && <span>&nbsp;/&nbsp;</span>}
                    <Link
                      href={`/${pathSegments
                        .slice(0, index + 1)
                        .join('/')
                        .toLocaleLowerCase()}`}
                    >
                      {segment}
                    </Link>
                  </li>
                ))}
              </ul>
              <H6>{pathSegments[pathSegments.length - 1]}</H6>
            </div>
          </div>
          <div className="flex gap-5">
            <button
              aria-label="Toggle sidebar"
              className="flex items-start lg:hidden"
              onClick={() => setIsSidebarVisible(!isSidebarVisible)}
            >
              <FiMenu className=" text-2xl " />
            </button>

            <button
              aria-label="Open configurator"
              onClick={() => setOpenConfigurator(dispatch, true)}
            >
              <GrSettingsOption className=" fill-[#4d6470] text-2xl" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed ${
          isSidebarVisible ? 'left-0' : '-left-80'
        } top-0  h-full w-80 bg-white px-3 duration-200 lg:left-0`}
      >
        <Sidebar isSidebarVisible={isSidebarVisible} />
      </div>
    </div>
  );
}
