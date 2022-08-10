import { ReactNode } from "react";
import "./recenttransactionscard.css";

import { BiDotsHorizontalRounded } from "react-icons/bi";
import { formatNumber } from "../../utils/formatNumber";

interface RecentTransactionsCardProps {
  icon: ReactNode;
  name: string;
  date: Date;
  value: number;
}

export default function RecentTransactionsCard({
  icon,
  name,
  date,
  value,
}: RecentTransactionsCardProps) {
  const formatDate = (date: Date) => {
    const formattedDate = new Intl.DateTimeFormat("pt-BR", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(date);

    return formattedDate.replace(/[de]|[.]/g, "");
  };

  return (
    <div className="recent-transactions-card-container">
      <div className="recent-transactions-icon">{icon}</div>
      <div className="recent-transactions-text">
        <strong>{name}</strong>
      </div>
      <div className="recent-transactions-date">{formatDate(date)}</div>
      <div className="recent-transactions-value">
        <strong>{formatNumber(value)}</strong>
      </div>
      <div className="recent-transactions-more">
        <BiDotsHorizontalRounded size={30} />
      </div>
    </div>
  );
}
