import "./creditcard.css";

import { SiMastercard } from "react-icons/si";

export default function CreditCard() {
  return (
    <div className="credit-card-container">
      <div className="credit-card-top">
        <div className="chip-container"></div>
      </div>
      <div className="credit-card-mid">
        <span className="credit-card-number">2984 5633 7859 4141</span>
      </div>
      <div className="credit-card-bottom">
        <div className="credit-card-holder">
          <span className="card-holder-text">CARD HOLDER</span>
          <strong className="card-owner-text">Derrick Fisher</strong>
        </div>
        <div className="credit-card-brand">
          <SiMastercard size={40} />
        </div>
      </div>
    </div>
  );
}
