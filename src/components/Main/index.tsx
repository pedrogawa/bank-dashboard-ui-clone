import {
  upcomingPaymentsArray,
  recentTransactionsArray,
} from "../../utils/data";
import CreditCard from "../CreditCard";
import RecentTransactionsCard from "../RecentTransactionsCard";
import Title from "../Title";
import UpcomingPaymentsCards from "../UpcomingPaymentsCards";
import "./main.css";

export default function Main() {
  return (
    <div className="main-container">
      <div className="left-content">
        <div className="left-content-upper">
          <div className="left-content-upper-left">
            <Title title="Dashboard" />
            <CreditCard />
          </div>
          <div className="left-content-upper-right">
            <Title title="Upcoming payments" />
            <div className="left-content-upper-right-content">
              {upcomingPaymentsArray.map((upcomingPayment, index) => {
                return (
                  <UpcomingPaymentsCards
                    key={index}
                    name={upcomingPayment.name}
                    icon={upcomingPayment.icon}
                    type={upcomingPayment.type}
                    value={upcomingPayment.value}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="left-content-bottom">
          <div className="left-content-bottom-upper">
            <Title title="Recent transactions" />
            {recentTransactionsArray.map((recentTransaction, index) => {
              return (
                <RecentTransactionsCard
                  key={index}
                  name={recentTransaction.name}
                  date={recentTransaction.date}
                  icon={recentTransaction.icon}
                  value={recentTransaction.value}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="right-content">right</div>
    </div>
  );
}
