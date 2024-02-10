/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { BiCommentEdit, BiTrash } from 'react-icons/bi';
import TableWrapper from '@/components/table/TableWrapper';
import UsersDeleteModal from '@/components/dialog/delete.dialog';
import { ToastContainer, toast } from 'react-toastify';
import { Pagination } from '@nextui-org/react';

import 'react-toastify/dist/ReactToastify.css';
import AdminServices from '@/pages/service/admin.service';
import { useUserContext } from '@/components/context/uaersContext';
import UserContextType from '@/types/UserContextType';

interface IProfile {
  No?: number;
  id: string;
  profile: string;
  username: string;
  email: string;
  role: string;
  actions?: any;
}

interface CustomTableState {
  globalFilter?: string;
  pageIndex?: number;
  pageSize?: number;
  order?: string;
  sort?: string;
  totalItems?: number;
}

export default function Ordertabile({
  globalFilter,
}: {
  globalFilter: string;
}) {
  const {
    isDrawerOpen,
    setUserId,
    toggleDrawer,
    isUpdate,
    isModalOpen,
    toggleModal,
    setIsUpdate,
  } = useUserContext() as UserContextType;

  const [Data, setData] = useState<IProfile[]>([]);
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 5,
    order: 'asc',
    sort: 'username',
    totalItems: 0,
  });

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
              toggleDrawer();
              if (!isDrawerOpen) {
                setUserId(null || info.row.original.id);
              }
            }}
          />
          <BiTrash
            className="text-xl text-gray-500"
            onClick={() => {
              toggleModal();
              if (!isModalOpen) {
                setUserId(info.row.original.id);
              }
            }}
          />
        </span>
      ),
      header: 'actions',
    }),
  ];

  const tableState: CustomTableState = {
    globalFilter,
    pageIndex: pagination.page,
    pageSize: pagination.pageSize,
    order: pagination.order,
    sort: pagination.sort,
    totalItems: pagination.totalItems,
  };

  const table = useReactTable({
    data: Data,
    columns,
    state: tableState,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const { data, error, mutate } = useSWR(
    `/api/users?page=${pagination.page}&pageSize=${pagination.pageSize}&order=${pagination.order}&sort=${pagination.sort}`,
    async () => {
      try {
        const response = await AdminServices.alluser(
          pagination.page,
          pagination.pageSize,
        );
        const totalItems = response.meta.total;
        setPagination((prev) => ({ ...prev, totalItems }));
        return response;
      } catch (err) {
        throw new Error(`Error fetching data: ${error.message}`);
      }
    },
  );

  useEffect(() => {
    if (error) {
      toast.error('Error fetching data:', error.message);
    }
  }, [pagination, error]);

  useEffect(() => {
    if (data) {
      const newData = data.data || [];
      setData(newData);
    }
    if (isUpdate) {
      mutate();
      setIsUpdate(false);
    }
  }, [data, isUpdate, mutate, setIsUpdate]);

  return (
    <>
      <TableWrapper style={{ overflow: 'auto', maxWidth: '100%' }}>
        <ToastContainer />
        <UsersDeleteModal />

        <table className="w-full overflow-scroll overflow-x-auto text-left font-normal">
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
                      whiteSpace: 'nowrap',
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
      </TableWrapper>

      <div className="mt-4 flex justify-between  border-gray-500">
        <div className="pl-4">
          Showing {(pagination.page - 1) * pagination.pageSize + 1}-
          {Math.min(
            pagination.page * pagination.pageSize,
            pagination.totalItems,
          )}{' '}
          of {pagination.totalItems}
        </div>
        <div className="pr-4">
          <Pagination
            onChange={(value: any) => {
              setPagination((prev) => ({ ...prev, page: value }));
            }}
            isCompact
            showControls
            initialPage={1}
            total={Math.ceil(pagination.totalItems / pagination.pageSize)}
            color="warning"
            radius="full"
          />
        </div>
      </div>
    </>
  );
}
