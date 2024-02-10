/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';
import AdminServices from '../pages/service/admin.service';

interface AddFormInputs {
  id: string;
  username: string;
  email: string;
  password: string;
  role: string;
}

interface UseAddSubmitProps {
  isEdit?: boolean;
  onClose: () => void;
  selectedUserData?: any;
  updateUser: (updatedUserData: any) => void;
}

function useAddSubmit({
  isEdit,
  onClose,
  selectedUserData,
  updateUser,
}: UseAddSubmitProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<AddFormInputs>();
  const [role, setRole] = useState<string | undefined>('USER');

  useEffect(() => {
    async function fetchUserData() {
      if (isEdit && selectedUserData) {
        try {
          const response = await AdminServices.userid(selectedUserData.id);
          if (response) {
            const { id, userRole, ...rest } = response;
            setValue('id', id);
            setValue('username', rest.username);
            setValue('email', rest.email);
            setValue('password', rest.password);
            setValue('role', userRole);
            setRole(userRole);
          } else {
            toast.error('Failed to fetch user data');
          }
        } catch (error) {
          toast.error('Error fetching user data:');
        }
      }
    }

    fetchUserData();
  }, [isEdit, selectedUserData, setValue]);

  const submitApiCall = async (data: AddFormInputs) => {
    try {
      const user: any = { ...data, role };

      if (isEdit) {
        const res = await AdminServices.updateProfile(user.id, user);
        if (res) {
          updateUser(user);
          toast.success('User Update successfully!');
          onClose();
        }
      } else {
        const res = await AdminServices.addUser(user);

        if (res) {
          updateUser(user);
          toast.success('User add successfully!');
          onClose();
        }
      }
    } catch (err) {
      toast.error('User operation failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const onSubmit: SubmitHandler<AddFormInputs> = async (formData) => {
    setLoading(true);
    await submitApiCall(formData);
  };

  return {
    onSubmit,
    register,
    handleSubmit,
    errors,
    loading,
    setRole,
  };
}

export default useAddSubmit;