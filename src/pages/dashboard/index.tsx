import React from 'react';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  ArcElement,
} from 'chart.js';

import ChartCard from '@/components/chart/ChartCard';

import { Lineoptions, Linedata, RadarData } from '@/utils/chartsData';
import DashboardTable from '@/components/Section/dashboard/DashboardTable';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
  ArcElement,
);

function Dashboard() {
  return (
    <div>
      {/* <div className="mb-8 grid gap-4 md:grid-cols-3 xl:grid-cols-3">
        <CardItemTwo
          title="Today Order"
          Icon={ImStack}
          price={todayOrder}
          className="bg-teal-500 text-white dark:text-rose-100"
        />
        <CardItemTwo
          title="This Month"
          Icon={FiShoppingCart}
          price={monthlyOrder}
          className="bg-blue-500 text-white dark:text-rose-100"
        />
        <CardItemTwo
          title="Total Order"
          Icon={ImCreditCard}
          price={totalOrder}
          className="bg-rose-500 text-white dark:text-rose-100"
        />
      </div> */}

      {/* <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <CardItem
          title="Total Order"
          Icon={FiShoppingCart}
          quantity={data.length}
          className="bg-orange-100 text-orange-600 dark:bg-orange-500 dark:text-orange-100"
        />
        <CardItem
          title="Order Pending"
          Icon={FiRefreshCw}
          quantity={pending.length}
          className="bg-blue-100 text-blue-600 dark:bg-blue-500 dark:text-blue-100"
        />
        <CardItem
          title="Order Processing"
          Icon={FiTruck}
          quantity={processing.length}
          className="bg-teal-100 text-teal-600 dark:bg-teal-500 dark:text-teal-100"
        />
        <CardItem
          title="Order Delivered"
          Icon={FiCheck}
          quantity={delivered.length}
          className="bg-rose-100 text-rose-600 dark:bg-rose-500 dark:text-rose-100"
        />
      </div> */}

      <div className="my-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ChartCard title="Conversions This Year">
          <Bar options={Lineoptions} data={Linedata} />
        </ChartCard>
        <ChartCard title="Top Revenue Product">
          <Bar data={RadarData} />
        </ChartCard>
        <ChartCard title="Top Revenue Product">
          <Bar options={Lineoptions} data={Linedata} />
        </ChartCard>
      </div>
      <DashboardTable />
    </div>
  );
}
Dashboard.layout = 'dashboard';
export default Dashboard;
