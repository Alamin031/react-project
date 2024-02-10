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
  cover: string;
  thumbnail: string;
  arIso: string;
  banner: string;
  name: string;
  status: string;
  yearId: number;
  epubVersion: number;
  warningLightVersion: number;
  warningMessageVersion: number;
  accessoriesVersion: number;
  arVersion: number;
  displayOrder: number;
}

const columnHelper = createColumnHelper<IProfile>();

const columns = [
  columnHelper.accessor('No', {
    id: 'S.No',
    cell: (info) => <span>{info.row.index + 1}</span>,
    header: 'S.No',
  }),
  columnHelper.accessor('cover', {
    cell: (info) => (
      <img
        src={info.getValue()}
        alt="..."
        className="h-10 w-10 rounded-full object-cover"
      />
    ),
    header: 'Cover',
  }),
  columnHelper.accessor('thumbnail', {
    cell: (info) => (
      <img
        src={info.getValue()}
        alt="..."
        className="h-10 w-10 rounded-full object-cover"
      />
    ),
    header: 'Thumbnail',
  }),
  columnHelper.accessor('arIso', {
    cell: (info) => (
      <img
        src={info.getValue()}
        alt="..."
        className="h-10 w-10 rounded-full object-cover"
      />
    ),
    header: 'ArIso',
  }),
  columnHelper.accessor('banner', {
    cell: (info) => (
      <img
        src={info.getValue()}
        alt="..."
        className="h-10 w-10 rounded-full object-cover"
      />
    ),
    header: 'Banner',
  }),
  columnHelper.accessor('name', {
    cell: (info) => <span>{info.getValue()}</span>,
    header: ' Name',
  }),
  columnHelper.accessor('status', {
    cell: (info) => <span>{info.getValue()}</span>,
    header: 'Status ',
  }),
  columnHelper.accessor('yearId', {
    cell: (info) => <span>{info.getValue()}</span>,
    header: 'YearId',
  }),
  columnHelper.accessor('epubVersion', {
    cell: (info) => <span>{info.getValue()}</span>,
    header: 'EpubVersion',
  }),
  columnHelper.accessor('warningLightVersion', {
    cell: (info) => <span>{info.getValue()}</span>,
    header: 'WarningLightVersion',
  }),
    columnHelper.accessor('warningMessageVersion', {
        cell: (info) => <span>{info.getValue()}</span>,
        header: 'WarningMessageVersion',
    }),
    columnHelper.accessor('accessoriesVersion', {
        cell: (info) => <span>{info.getValue()}</span>,
        header: 'AccessoriesVersion',
    }),
    columnHelper.accessor('arVersion', {
        cell: (info) => <span>{info.getValue()}</span>,
        header: 'ArVersion',
    }),
    columnHelper.accessor('displayOrder', {
        cell: (info) => <span>{info.getValue()}</span>,
        header: 'DisplayOrder',
    }),
];

export default function CarsTable() {
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
  
  useEffect
  
    return (
      <TableWrapper style={{ overflowX: 'auto', maxWidth: '100%' }}>
        <div className="m-2 flex flex-col items-center justify-between">
          <div className="flex w-full items-center gap-1 mb-4">
            <BiSearchAlt />
            <input
              value={globalFilter ?? ''}
              onChange={(e) => {
                setGlobalFilter(String(e.target.value));
              }}
              className="w-1/3 border-b border-gray-500 bg-transparent p-2 outline-none duration-300"
              placeholder="Search all columns..."
            />
          </div>
  
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-800 text-white">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="py-3 px-4 font-semibold text-sm"
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
                      <td key={cell.id} className="py-2 px-4">
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
  
          {/* pagination */}
          <Pagination table={table} />
        </div>
      </TableWrapper>
    );
  }