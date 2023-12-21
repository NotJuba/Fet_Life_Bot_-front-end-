import React, { Component } from "react";
import "./pricing.css";

class PricingComponent extends Component {
  constructor(props) {
    super(props);
    this.monthlyActiveClass = "active";
  }


  render() {
    this.monthlyActiveClass = this.props.isMonthlyActive ? "active" : "";

    const submitCoinPayment = () => {
      const form = document.createElement('form');
      form.action = 'https://www.coinpayments.net/index.php';
      form.method = 'post';

      const fields = {
        cmd: '_pay_simple',
        reset: '1',
        merchant: '79b0e3c1be113af9dfd0c3605f0ce30d',
        item_name: 'Mohamed Aissaoui',
        currency: 'USD',
        amountf: '100.00000000',
        want_shipping: '0'
      };

      for (let key in fields) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = fields[key];
        form.appendChild(input);
      }

      document.body.appendChild(form);
      form.submit();
    };

    return (
      <div className="pricing-card">
        <p className="pricing-header">{this.props.pricingHeader}</p>
        <div className="price-container">
          <p className={"toggle-annually " + this.monthlyActiveClass}>
            {" "}
            <span>$</span>
            {this.props.priceAnnually}
          </p>
          <p className={"toggle-monthly " + this.monthlyActiveClass}>
            {" "}
            <span>$</span>
            {this.props.priceLifeTime}
          </p>
        </div>
        <ul>
          <li>
            <p>{this.props.action}</p>
          </li>
          <li>
            <p>{this.props.profiles}</p>
          </li>
          <li>
            <p>{this.props.numbers}</p>
          </li>
        </ul>
        <button onClick={submitCoinPayment}>Buy with Crypto</button>
      </div>
    );
  }
}

export default PricingComponent;
