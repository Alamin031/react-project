/* eslint-disable no-unused-vars */
import { FiUsers } from 'react-icons/fi';
import { MdOutlineDashboard, MdProductionQuantityLimits, MdEventNote } from "react-icons/md";
import { AiOutlineUser, AiOutlineCodeSandbox } from "react-icons/ai";
import { BsPeople, BsQrCodeScan } from "react-icons/bs";
import { PiChartPieSlice } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";

const sidebar = [
  {
    path: '/dashboard', // the url
    icon: MdOutlineDashboard, // icon
    name: 'Dashboard', // name that appear in Sidebar
  },
  {
    path: '/dashboard/queries',
    icon: FiUsers,
    name: 'Queries',
  },
  {
    path: '/dashboard/users',
    icon: AiOutlineUser,
    name: 'Users',
  },
  {
    path: '/dashboard/car',
    icon: BsPeople,
    name: 'Car',
  },
  {
    path: '/dashboard/QR',
    icon: BsQrCodeScan,
    name: 'QR Code',
  },
  {
    path: '/dashboard/order',
    icon: MdEventNote,
    name: 'Event Managment',
  },
  {
    path: '/dashboard/Analysis',
    icon: PiChartPieSlice,
    name: 'Analysis',
  },
  {
    path: '/dashboard/Production',
    icon: MdProductionQuantityLimits,
    name: 'Production',
  },
  {
    path: '/dashboard/Inventory',
    icon: AiOutlineCodeSandbox,
    name: 'Inventory',
  },
  {
    path: '/dashboard/Store',
    icon: IoGameControllerOutline,
    name: 'Store',
  }
  
];

export default sidebar;
