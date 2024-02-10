import React from 'react';

type UserContextType = {
  userId: string | number | null;
  setUserId: React.Dispatch<React.SetStateAction<string | number | null>>;
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
  closeDrawer: () => void;
  isModalOpen: boolean;
  toggleModal: () => void;
  closeModal: () => void;
  isUpdate: boolean;
  setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>;
};

export default UserContextType;
