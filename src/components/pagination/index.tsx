import React from 'react';

export default function Pagination({ table }: any) {
  return (
    <div className="mt-2 flex items-center justify-between gap-2 px-5 py-2">
      <div className="flex gap-1">
        <span className="flex items-center gap-1">
          Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="w-16 rounded border border-gray-300 bg-transparent p-1 shadow-sm focus:right-0 focus:outline-0"
          />
          |
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
          className=" rounded-md border border-gray-300 bg-transparent px-2 shadow-sm focus:outline-0"
        >
          {[5, 20, 30, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <div className=" flex gap-2">
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            <span>{table.getState().pagination.pageIndex + 1}</span> of{' '}
            {table.getPageCount()} |{' '}
          </strong>
        </span>
        <div>
          <button
            onClick={() => {
              table.previousPage();
            }}
            disabled={!table.getCanPreviousPage()}
            className="rounded-md border border-gray-300 bg-indigo-500 p-1 px-2 text-white duration-150 hover:bg-indigo-600 disabled:opacity-30"
          >
            {'<'}
          </button>
          <button
            onClick={() => {
              table.nextPage();
            }}
            disabled={!table.getCanNextPage()}
            className="rounded-md border border-gray-300 bg-indigo-500 p-1 px-2 text-white duration-150 hover:bg-indigo-600 disabled:opacity-30"
          >
            {'>'}
          </button>
        </div>
      </div>
    </div>
  );
}
