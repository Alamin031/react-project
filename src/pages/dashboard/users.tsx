import React, { useState } from 'react';
import { Button } from '@material-tailwind/react';
import UserTable from '@/components/Section/user/UserTable';
import AddUserDrawer from '@/components/drawer/AddUserDrawer';
// import AddUserDrawer from '../../components/drawer/UserDrawer';

function Users() {
  const [globalFilter, setGlobalFilter] = useState('');

  const [openRight, setOpenRight] = useState(false);

  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

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
        <Button onClick={openDrawerRight}>Add User</Button>
      </div>
      <UserTable globalFilter="" />
      <AddUserDrawer/>
      {/* <AddUserDrawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        updateUser={() => { }}
      /> */}
    </div>
  );
}

Users.layout = 'dashboard';
export default Users;
