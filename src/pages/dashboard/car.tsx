import React, { useState } from 'react';
import { Button } from '@material-tailwind/react';
import CarDrawer from '@/components/drawer/carDrawer';
import CarsTable from '@/components/Section/car/carTable';

function Cars() {
  const [globalFilter, setGlobalFilter] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleSearchChange = (e:any) => {
    setGlobalFilter(e.target.value);
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleAddCarClick = () => {
    openDrawer();
  };

  const handleFormSubmit = () => {
    // Add logic to handle form submission
    // ...

    // Close the drawer after submission
    closeDrawer();
  };

  return (
    <div className="mt-5">
      <div className="flex justify-between">
        <input
          onChange={handleSearchChange}
          value={globalFilter}
          className="rounded-md px-3 focus:outline-0"
          placeholder="Search"
        />
        <Button onClick={handleAddCarClick}>Add Car</Button>
      </div>
      <CarsTable globalFilter={globalFilter} />
      <CarDrawer isOpen={isDrawerOpen} onClose={closeDrawer} onSubmit={handleFormSubmit} />
    </div>
  );
}

Cars.layout = 'dashboard';
export default Cars;
