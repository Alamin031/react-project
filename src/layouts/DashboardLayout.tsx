import DashboardNav from '@/components/DashboardNav';
import React, { PropsWithChildren } from 'react';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div
      className={`wrapper-background flex h-screen ${
        false && 'overflow-hidden'
      } `}
    >
      <div className="flex w-full  flex-1 flex-col lg:ml-80">
        <DashboardNav />
        <main className="h-full w-full overflow-y-auto overflow-x-hidden px-3">
          <div className=" mx-auto grid">{children}</div>
        </main>
      </div>
    </div>
  );
}
