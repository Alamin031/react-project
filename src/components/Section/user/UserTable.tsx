/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect, useState } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { BiCommentEdit, BiTrash } from 'react-icons/bi';
import Pagination from '@/components/pagination';
import TableWrapper from '@/components/table/TableWrapper';
import AddUserDrawer from '@/components/drawer/UserDrawer';
import AdminServices from '@/pages/service/admin.service';
import UsersDeleteModal from '@/components/dialog/delete.dialog';
import { ToastContainer, toast } from 'react-toastify';
import {
  useUserContext,
  setOpenConfigurator,
  setSelectedUserId,
  setEditDrawer,
} from '@/components/context/userContext';

import 'react-toastify/dist/ReactToastify.css';

interface IProfile {
  No?: number;
  id: string;
  profile: string;
  username: string;
  email: string;
  role: string;
  actions?: any;
}

export default function UserTable({ globalFilter }: { globalFilter: string }) {
  const [data, setData] = useState<IProfile[]>([]);
  const { dispatch, state } = useUserContext();
  const { isEditDrawerOpen } = state;

  const [selectedUserData, setSelectedUserData] = useState<any | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openDeleteModal = (userData: any) => {
    setSelectedUserData(userData);
    setIsDeleteModalOpen(true);
  };

  const RelodeUser = (userData: string) => {
    const newData = data.filter((item) => item.id !== userData);
    setData(newData);
  };
  const columnHelper = createColumnHelper<IProfile>();

  const columns = [
    columnHelper.accessor('No', {
      id: 'S.No',
      cell: (info) => <span>{info.row.index + 1}</span>,
      header: 'S.No',
    }),
    columnHelper.accessor('profile', {
      cell: (info) => (
        <img
          src={info.getValue()}
          alt="..."
          className="h-10 w-10 rounded-full object-cover"
        />
      ),
      header: 'Profile',
    }),
    columnHelper.accessor('username', {
      cell: (info) => <span>{info.getValue()}</span>,
      header: 'Username',
    }),
    columnHelper.accessor('role', {
      cell: (info) => <span>{info.getValue()}</span>,
      header: 'Role',
    }),
    columnHelper.accessor('email', {
      cell: (info) => <span>{info.getValue()}</span>,
      header: 'Email',
    }),
    columnHelper.accessor('actions', {
      cell: (info) => (
        <span className="flex gap-3">
          <BiCommentEdit
            className="cursor-pointer text-xl text-gray-500"
            onClick={() => {
              setSelectedUserId(dispatch, info.row.original.id);
              setEditDrawer(dispatch, !isEditDrawerOpen);
            }}
          />
          <BiTrash
            className="text-xl text-gray-500"
            onClick={() => openDeleteModal(info.row.original)}
          />
        </span>
      ),
      header: 'actions',
    }),
  ];
  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await AdminServices.alluser();
        if (response) {
          setData(response);
        } else {
          toast.error('API request failed with status:', response.status);
        }
      } catch (error) {
        toast.error('Error fetching data:');
      }
    }

    fetchData();
  }, []);
  return (
    <>
      <TableWrapper style={{ overflow: 'auto', maxWidth: '100%' }}>
        <ToastContainer />
        <table className="w-full overflow-scroll overflow-x-auto  text-left font-normal">
          <thead className="bg-gray-900/10">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-3.5 py-2 font-normal capitalize"
                    style={{
                      minWidth: '100px',
                      width: 'auto',
                      whiteSpace: 'nowrap', // Prevent text wrapping
                    }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row, i) => (
                <tr
                  key={row.id}
                  className={`${i % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}`}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-3.5 py-2">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr className="h-32 text-center">
                <td colSpan={12}>No Record Found!</td>
              </tr>
            )}
          </tbody>
        </table>
        <Pagination table={table} />
      </TableWrapper>

      <AddUserDrawer />
      <UsersDeleteModal
        open={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setSelectedUserData(null);
        }}
        itemName={selectedUserData?.username || ''}
        selectedUserData={selectedUserData}
        closeDeleteModal={() => {
          setIsDeleteModalOpen(false);
          setSelectedUserData(null);
        }}
        RelodeUser={RelodeUser}
      />
    </>
  );
}
