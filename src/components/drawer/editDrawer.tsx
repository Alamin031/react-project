/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import UserContextType from '@/types/UserContextType';
import AdminServices from '@/pages/service/admin.service';
import { useUserContext } from '../context/uaersContext';
import MainDrawer from './mainDrawer';

function EditDrawer(): JSX.Element {
  const { closeDrawer, userId } = useUserContext() as UserContextType;
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    role: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (userId) {
          const userData = await AdminServices.userid(String(userId));
          setFormData({
            username: userData.username,
            email: userData.email,
            role: userData.role,
          });
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can add validation here before submitting the form
    try {
      // Assuming you have a service function to update user data
      await AdminServices.updateProfile(String(userId), formData);
      closeDrawer();
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  return (
    <MainDrawer>
      <div className="absolute right-0 top-0 h-full w-[500px] rounded-md bg-white p-6 shadow-md">
        <IoIosCloseCircleOutline
          onClick={closeDrawer}
          className="absolute right-4 top-4 cursor-pointer text-3xl text-gray-500"
        />
  
        {loading ? (
          <p className="mb-4 text-xl font-semibold">Loading...</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex h-full flex-col">
            <h2 className="mb-6 text-3xl font-semibold text-gray-800">
              Update Users
            </h2>
            <p className="mb-6 text-gray-600">
              Update your user&apos;s necessary information from here.
            </p>
  
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600">
                Username:
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="mt-1 w-full rounded border p-2 focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 w-full rounded border p-2 focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600">
                Role:
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="mt-1 w-full rounded border p-2 focus:border-blue-300 focus:outline-none focus:ring"
              >
                <option value="ADMIN">ADMIN</option>
                <option value="USER">USER</option>
              </select>
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
                  Update Users
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </MainDrawer>
  );
}

export default EditDrawer;