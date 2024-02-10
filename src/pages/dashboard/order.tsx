import React, { useState } from 'react';
import { Button } from '@material-tailwind/react';
import Ordertabile from '@/components/Section/user/ordertabile';
import { useUserContext } from '@/components/context/uaersContext';
import UserContextType from '@/types/UserContextType';
import AddUserDrawer from '@/components/drawer/AddUserDrawer';

function Users() {
  const [globalFilter, setGlobalFilter] = useState('');

  const { toggleDrawer } =
    useUserContext() as UserContextType;
  return (
    <div className="mt-5">

      <div className="flex justify-between">
        <input
          onChange={(e) => {
            setGlobalFilter(e.target.value);
          }}
          value={globalFilter ?? ''}
          className="rounded-md px-3 focus:outline-0"
          placeholder="Search"
        />{' '}
        <Button onClick={toggleDrawer}>Add User</Button>
      </div>
      <Ordertabile globalFilter="" />
      <AddUserDrawer/>
    </div>
  );
}

Users.layout = 'dashboard';
export default Users;
