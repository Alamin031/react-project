import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import AdminServices from '@/pages/service/admin.service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserContextType from '@/types/UserContextType';
import { useUserContext } from '../context/uaersContext';

function UsersDeleteModal(): JSX.Element {
  const { isModalOpen, userId, closeModal } =
    useUserContext() as UserContextType;

  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);

    try {
      await AdminServices.deleteUser(String(userId));
      toast.success('User deleted successfully!');
      closeModal();
    } catch (error) {
      toast.error('Failed to delete user.');
    } finally {
      setIsDeleting(false);
    }
  };
  return (
    <Dialog
      open={isModalOpen}
      handler={closeModal}
      animate={{ mount: { scale: 1, y: 0 }, unmount: { scale: 0.9, y: -100 } }}
    >
      <DialogHeader>Confirm Delete</DialogHeader>
      <ToastContainer />

      <DialogBody className="text-center">
        <p className="text-gray-600">
          Are you sure you want to delete the user permanently?
          <br />
          This action cannot be undone.
        </p>
        <p className="mt-4 font-semibold text-red-600">
          &ldquo;{userId}&rdquo;
        </p>
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={closeModal}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button
          variant="gradient"
          color="green"
          onClick={handleDelete}
          disabled={isDeleting}
        >
          <span>{isDeleting ? 'Deleting...' : 'Delete'}</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

export default UsersDeleteModal;
