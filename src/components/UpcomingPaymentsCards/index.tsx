import { ReactNode } from "react";
import { formatNumber } from "../../utils/formatNumber";
import "./upcomingpaymentscards.css";

interface UpcomingPaymentsCardsProps {
  name: string;
  type: 0 | 1;
  icon: ReactNode;
  value: number;
}

export default function UpcomingPaymentsCards({
  name,
  type,
  icon,
  value,
}: UpcomingPaymentsCardsProps) {
  const getUpcomingPaymentType = (value: 0 | 1) => {
    const upcomingPaymentType: { [index: number]: string } = {
      0: "Unregular payment",
      1: "Regular payment",
    };

    return upcomingPaymentType[value] ?? "Unregular payment";
  };

  return (
    <div className="upcoming-payments-cards-container">
      <div className="upcoming-payments-cards-top">
        <div className="upcoming-payments-cards-icon">{icon}</div>
      </div>
      <div className="upcoming-payments-cards-mid">
        <strong className="upcoming-payments-text">{name}</strong>

        <span className="upcoming-payments-type">
          {getUpcomingPaymentType(type)}
        </span>
      </div>
      <div className="upcoming-payments-cards-bottom">
        <strong className="upcoming-payments-value">
          {formatNumber(value)}
        </strong>
      </div>
    </div>
  );
}
