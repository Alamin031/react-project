import { XMarkIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Button, IconButton, Typography } from '@material-tailwind/react';
import {
  useUserContext,
  setOpenConfigurator,
  setSidenavColor,
  setSidenavType,
} from '../components/context/userContext';

export function Configurator() {
  const { dispatch, state } = useUserContext();
  const { openConfigurator, sidenavColor, sidenavType } = state;

  const sidenavColors = {
    white: 'from-gray-100 to-gray-100 border-gray-200',
    gray: 'from-black to-black border-gray-200',
    green: 'from-green-400 to-green-600',
    orange: 'from-orange-400 to-orange-600',
    red: 'from-red-400 to-red-600',
    pink: 'from-pink-400 to-pink-600',
  };

  return (
    <aside
      className={`fixed right-0 top-0 z-50 h-screen w-96 bg-white px-2.5 shadow-lg transition-transform duration-300 ${
        openConfigurator ? 'translate-x-0' : 'translate-x-96'
      }`}
    >
      <div className="flex items-start justify-between px-6 pb-6 pt-8">
        <div>
          <Typography variant="h5" color="blue-gray">
            Your Dashboard Configurator
          </Typography>
          <Typography className="font-normal text-blue-gray-600">
            See your dashboard options.
          </Typography>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          onClick={() => setOpenConfigurator(dispatch, false)}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5" />
        </IconButton>
      </div>
      <div className="px-6 py-4">
        <div className="mb-12">
          <Typography variant="h6" color="blue-gray">
            Sidenav Colors
          </Typography>
          <div className="mt-3 flex items-center gap-2">
            {Object.keys(sidenavColors).map((color) => (
              <span
                role="button"
                tabIndex={0}
                key={color}
                aria-label={`Set sidenav color to ${color}`}
                className={`h-6 w-6 cursor-pointer rounded-full border bg-gradient-to-br transition-transform hover:scale-105 ${
                  sidenavColors[color]
                } ${
                  sidenavColor === color ? 'border-black' : 'border-transparent'
                }`}
                onClick={() => setSidenavColor(dispatch, color)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    setSidenavColor(dispatch, color);
                  }
                }}
              />
            ))}
          </div>
        </div>
        <div className="mb-12">
          <Typography variant="h6" color="blue-gray">
            Sidenav Types
          </Typography>
          <Typography variant="small" color="gray">
            Choose between 9 different sidenav types.
          </Typography>
          <div className="mt-3 flex items-center gap-2">
            <Button
              variant={sidenavType === 'dark' ? 'gradient' : 'outlined'}
              onClick={() => setSidenavType(dispatch, 'dark')}
            >
              Dark
            </Button>
            <Button
              variant={sidenavType === 'transparent' ? 'gradient' : 'outlined'}
              onClick={() => setSidenavType(dispatch, 'transparent')}
            >
              Transparent
            </Button>
            <Button
              variant={sidenavType === 'white' ? 'gradient' : 'outlined'}
              onClick={() => setSidenavType(dispatch, 'white')}
            >
              White
            </Button>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <Button
              variant={sidenavType === 'bgray' ? 'gradient' : 'outlined'}
              onClick={() => setSidenavType(dispatch, 'bgray')}
            >
              Blue Gray
            </Button>

            <Button
              variant={sidenavType === 'gray' ? 'gradient' : 'outlined'}
              onClick={() => setSidenavType(dispatch, 'gray')}
            >
              Gray
            </Button>

            <Button
              variant={sidenavType === 'primary' ? 'gradient' : 'outlined'}
              onClick={() => setSidenavType(dispatch, 'primary')}
            >
              Primary
            </Button>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <Button
              variant={sidenavType === 'deeporange' ? 'gradient' : 'outlined'}
              onClick={() => setSidenavType(dispatch, 'deeporange')}
            >
              Deep Orange
            </Button>

            <Button
              variant={sidenavType === 'lightgreen' ? 'gradient' : 'outlined'}
              onClick={() => setSidenavType(dispatch, 'lightgreen')}
            >
              light green
            </Button>

            <Button
              variant={sidenavType === 'cyan' ? 'gradient' : 'outlined'}
              onClick={() => setSidenavType(dispatch, 'cyan')}
            >
              Cyan
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
}
export default Configurator;
