/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Input,
  Textarea,
} from '@material-tailwind/react';

function CarDrawer({ isOpen, onClose, onSubmit }) {
  const [cover, setCover] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [arIso, setArIso] = useState([]);
  const [banner, setBanner] = useState([]);

  const handleCoverChange = (file: any) => {
    // Handle cover file change
    setCover(file);
  };

  const handleThumbnailChange = (file: any) => {
    // Handle thumbnail file change
    setThumbnail(file);
  };

  const handleArIsoChange = (files: any) => {
    // Handle AR ISO files change
    setArIso(files);
  };

  const handleBannerChange = (files: any) => {
    // Handle banner files change
    setBanner(files);
  };

  return (
        <Drawer size={600} open={isOpen} onClose={onClose} placement="right">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-between bg-blue-500 px-4 py-2 text-white">
            <Typography variant="h5">Car Information</Typography>
            <div className="flex justify-end">
              <IconButton variant="text" color='red' onClick={onClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </IconButton>
            </div>
          </div>
          <Typography variant="small" color="gray" className="font-normal mb-4">
            Provide car information and then click the button.
          </Typography>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-8 overflow-y-auto">
        <Input
          type="text"
          label="Name"
          crossOrigin={undefined}
          className="col-span-2"
        />
        <Input
          type="text"
          label="Status"
          crossOrigin={undefined}
          className="col-span-2"
        />
        <Input
          type="number"
          label="Year ID"
          crossOrigin={undefined}
          className="col-span-2"
        />
        <Input
          type="number"
          label="Epub Version"
          crossOrigin={undefined}
          className="col-span-2"
        />
        <Input
          type="number"
          label="Warning Light Version"
          crossOrigin={undefined}
          className="col-span-2"
        />
        <Input
          type="number"
          label="Warning Message Version"
          crossOrigin={undefined}
          className="col-span-2"
        />
        <Input
          type="number"
          label="Accessories Version"
          crossOrigin={undefined}
          className="col-span-2"
        />
        <Input
          type="number"
          label="AR Version"
          crossOrigin={undefined}
          className="col-span-2"
        />
        <Input
          type="number"
          label="Display Order"
          crossOrigin={undefined}
          className="col-span-2"
        />
        <Input
          type="file"
          label="Cover"
          onChange={(file: any) => handleCoverChange(file)}
          crossOrigin={undefined}
          className="col-span-2"
        />
        <Input
          type="file"
          label="Thumbnail"
          onChange={(file: any) => handleThumbnailChange(file)}
          crossOrigin={undefined}
          className="col-span-2"
        />
        <Input
          type="file"
          label="AR ISO"
          multiple
          onChange={(files: any) => handleArIsoChange(files)}
          crossOrigin={undefined}
          className="col-span-2"
        />
        <Input
          type="file"
          label="Banner"
          multiple
          onChange={(files: any) => handleBannerChange(files)}
          crossOrigin={undefined}
          className="col-span-2"
        />
      </div>
      <div className="lg:mt-20 md:mt-auto sm:mt-auto flex justify-center">
        <div className="flex w-full p-8 space-x-4">
          <Button
            variant="text"
            color="red"
            onClick={onClose}
            className="p-4 text-center w-full hover:bg-blue-gray-700 hover:text-white"
          >
            Cancel
          </Button>

          <Button
            variant="gradient"
            color="blue"
            type="submit"
            className="bg-blue-500 p-4 text-center w-full text-white"
          >
            Save Car Information
          </Button>
        </div>
      </div>
    </Drawer>
  );
}

export default CarDrawer;
