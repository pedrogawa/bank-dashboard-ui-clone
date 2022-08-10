import { ReactNode } from "react";

import { TbSofa } from "react-icons/tb";
import { RiCoinsLine, RiGasStationLine } from "react-icons/ri";
import { BiTaxi } from "react-icons/bi";
import { IoBusOutline } from "react-icons/io5";
import { TiPlaneOutline } from "react-icons/ti";
import { CgGym } from "react-icons/cg";

interface UpcomingPayments {
  name: string;
  type: 0 | 1;
  icon: ReactNode;
  value: number;
}

export const upcomingPaymentsArray: UpcomingPayments[] = [
  {
    name: "Freelance",
    icon: <TbSofa size={30} />,
    type: 0,
    value: 1500,
  },
  {
    name: "Salary",
    icon: <RiCoinsLine size={30} />,
    type: 1,
    value: 4000,
  },
];

interface RecentTransactions {
  icon: ReactNode;
  name: string;
  date: Date;
  value: number;
}

export const recentTransactionsArray: RecentTransactions[] = [
  {
    icon: <BiTaxi size={40} />,
    name: "Taxi Trips",
    date: new Date(),
    value: 56.5,
  },
  {
    icon: <IoBusOutline size={40} />,
    name: "Public Transport",
    date: new Date(),
    value: 2.5,
  },
  {
    icon: <TiPlaneOutline size={40} />,
    name: "Plane Ticket",
    date: new Date(),
    value: 70,
  },
  {
    icon: <RiGasStationLine size={40} />,
    name: "Gas Station",
    date: new Date(),
    value: 30.75,
  },
  {
    icon: <CgGym size={40} />,
    name: "Gym",
    date: new Date(),
    value: 100,
  },
];
