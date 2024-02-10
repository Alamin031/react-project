import React, { useState } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';

import USERS from '@/utils/data';
import { BiSearchAlt } from 'react-icons/bi';
import Pagination from '@/components/pagination';
import TableWrapper from '@/components/table/TableWrapper';

interface IProfile {
  No?: number;
  profile: string;
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
}

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
  columnHelper.accessor('firstName', {
    cell: (info) => <span>{info.getValue()}</span>,
    header: 'First Name',
  }),
  columnHelper.accessor('lastName', {
    cell: (info) => <span>{info.getValue()}</span>,
    header: 'Last Name',
  }),
  columnHelper.accessor('age', {
    cell: (info) => <span>{info.getValue()}</span>,
    header: 'Age',
  }),
  columnHelper.accessor('visits', {
    cell: (info) => <span>{info.getValue()}</span>,
    header: 'Visits',
  }),
  columnHelper.accessor('progress', {
    cell: (info) => <span>{info.getValue()}</span>,
    header: 'Progress',
  }),
];

export default function DashboardTable() {
  const [data] = useState<IProfile[]>(() => [...USERS]);
  const [globalFilter, setGlobalFilter] = useState('');

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
 
  return (
    <TableWrapper style={{ overflowX: 'auto', maxWidth: '100%' }}>
    <div className=" m-2 flex flex-col items-center justify-between">
        <div className="flex w-full items-center gap-1">
          <BiSearchAlt />
          <input
            value={globalFilter ?? ''}
            onChange={(e) => {
              setGlobalFilter(String(e.target.value));
            }}
            className="w-1/5 border-b border-gray-500 bg-transparent p-2 outline-none duration-300 focus:w-1/3"
            placeholder="Search all columns..."
          />
        </div>

        <div>DBT</div>
      </div>
      <table className="w-full text-left font-normal">
        <thead className=" bg-gray-900/10">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-3.5 py-2 font-normal capitalize"
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
                className={`
                ${i % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}
                `}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-3.5 py-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr className="h-32 text-center">
              <td colSpan={12}>No Recoard Found!</td>
            </tr>
          )}
        </tbody>
      </table>
      {/* pagination */}
      <Pagination table={table} />
    </TableWrapper>
  );
}
