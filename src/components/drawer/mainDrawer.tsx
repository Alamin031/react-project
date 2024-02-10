/* eslint-disable react/react-in-jsx-scope */
import { Dialog, Transition } from '@headlessui/react';
import UserContextType from '@/types/UserContextType';
import { Fragment } from 'react';
import { useUserContext } from '../context/uaersContext';

interface DrawerProps {
  children: React.ReactNode;
}

function MainDrawer({ children }: DrawerProps): JSX.Element {
  const { isDrawerOpen, closeDrawer } = useUserContext() as UserContextType;
  return (
    <Dialog open={isDrawerOpen} as="div" onClose={closeDrawer} static>
      <Transition.Root show={isDrawerOpen}>
      <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >       
            {children}
        </Transition.Child>
      </Transition.Root>
    </Dialog>
  );
}

export default MainDrawer;
