/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';
import AdminServices from '@/pages/service/admin.service';
import { useUserContext } from '../context/uaersContext';
import MainDrawer from './mainDrawer';

interface FormData {
  username: string;
  email: string;
  role: string;
  password?: string;
}

function AddUserDrawer(): JSX.Element {
  const { closeDrawer, userId, setIsUpdate } = useUserContext();
  const {
    register,
    handleSubmit,
    setValue,
    reset,  // Add reset function from react-hook-form
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (userId) {
          const userData = await AdminServices.userid(String(userId));
          setValue('username', userData.username || '');
          setValue('email', userData.email || '');
          setValue('role', userData.role || '');
          setValue('password', userData.password || '');

        } else {
          setValue('username', '');
          setValue('email', '');
          setValue('role', '');
          setValue('password', '');

        }

      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId, setValue]);

  useEffect(() => () => {
      reset();
    }, [reset]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      if (userId) {
        const response = await AdminServices.updateProfile(String(userId), data);
        if (response) {
          setIsUpdate(true);
          toast.success('User updated successfully!');
        } else {
          toast.error('Error updating user!');
        }
      } else {
        const response = await AdminServices.addUser(data);
        if (response) {
          setIsUpdate(true);
          toast.success('User added successfully!');
        } else {
          toast.error('Error adding user!');
        }
      }
      closeDrawer();
    } catch (error) {
      console.error(userId ? 'Error updating user data:' : 'Error adding user:', error);
    }
  };

  return (
    <MainDrawer>
      <div className="absolute right-0 top-0 h-full w-[500px] rounded-md bg-white p-6 shadow-md">
        <IoIosCloseCircleOutline
          onClick={closeDrawer}
          className="absolute right-4 top-4 cursor-pointer text-3xl text-gray-500"
        />

        <form onSubmit={handleSubmit(onSubmit)} className="flex h-full flex-col">
          <h2 className="mb-6 text-3xl font-semibold text-gray-800">
            {userId ? 'Update User' : 'Add User'}
          </h2>
          <p className="mb-6 text-gray-600">
            {userId
              ? "Update user's necessary information from here."
              : 'Add a new user.'}
          </p>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600">Username:</label>
            <input
              type="text"
              {...register('username', { required: 'Username is required' })}
              className="mt-1 w-full rounded border p-2 focus:border-blue-300 focus:outline-none focus:ring"
            />
            <span className="text-red-500">{errors.username?.message}</span>
          </div>

          {!userId && (
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600">Password:</label>
              <input
                type="password"
                {...register('password', { required: 'Password is required' })}
                className="mt-1 w-full rounded border p-2 focus:border-blue-300 focus:outline-none focus:ring"
              />
              <span className="text-red-500">{errors.password?.message}</span>
            </div>
          )}

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600">Email:</label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              className="mt-1 w-full rounded border p-2 focus:border-blue-300 focus:outline-none focus:ring"
            />
            <span className="text-red-500">{errors.email?.message}</span>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600">Role:</label>
            <select
              {...register('role', { required: 'Role is required' })}
              className="mt-1 w-full rounded border p-2 focus:border-blue-300 focus:outline-none focus:ring"
            >
              <option value="" disabled>
                Select Role
              </option>
              <option value="ADMIN">ADMIN</option>
              <option value="USER">USER</option>
            </select>
            <span className="text-red-500">{errors.role?.message}</span>
          </div>

          <div className="mt-auto space-y-2">
            <div className="flex w-full justify-end space-x-4">
              <button
                type="button"
                onClick={closeDrawer}
                className="w-full rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600 focus:border-green-300 focus:outline-none focus:ring"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:border-blue-300 focus:outline-none focus:ring"
              >
                {userId ? 'Update User' : 'Add User'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </MainDrawer>
  );
}

export default AddUserDrawer;
