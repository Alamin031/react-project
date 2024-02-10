/* eslint-disable no-console */
import UserContextType from '@/types/UserContextType';
import React, { useCallback, useContext, useMemo, useState } from 'react';

export const UsersContext = React.createContext<UserContextType | null>(null);

export const useUserContext = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UsersProvider');
  }
  return context;
};

type Props = {
  children: React.ReactNode;
};

export function UsersProvider({ children }: Props) {
  const [userId, setUserId] = useState<string | number | null>('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const toggleDrawer = useCallback(() => {
    if (isDrawerOpen) {
      setUserId(null);
    }
    setIsDrawerOpen((prevState) => !prevState);
  }, [isDrawerOpen]);

  const closeDrawer = useCallback(() => {
    setUserId(null);
    setIsDrawerOpen(false);
  }, []);

  const toggleModal = useCallback(() => {
    if (isModalOpen) {
      setUserId(null);
    }
    setIsModalOpen((prevState) => !prevState);
  }, [isModalOpen]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setIsUpdate(false);
  }, []);

  const value = useMemo(
    () => ({
      userId,
      setUserId,
      isDrawerOpen,
      toggleDrawer,
      closeDrawer,
      isModalOpen,
      toggleModal,
      closeModal,
      isUpdate,
      setIsUpdate,
    }),
    [
      userId,
      setUserId,
      isDrawerOpen,
      toggleDrawer,
      closeDrawer,
      isModalOpen,
      toggleModal,
      closeModal,
      isUpdate,
      setIsUpdate,
    ],
  );
  console.log(isUpdate);
  console.log(userId);
  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
}
