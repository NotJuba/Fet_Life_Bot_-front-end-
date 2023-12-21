import React, { Component } from "react";
import PricingComponent from "./PricingComponent";
import "./pricing.css";

class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLifetime: false
    };
  }
  togglePricing = () => {
    this.setState({
      isLifetime: !this.state.isLifetime
    });
  };
  render() {
    return (
      <div className="pricing-container" id="pricing">
        <div className="pricing-body">
          <div className="toggle-row">
            <p>Annually</p>
            <div className="toggle-container">
              <input
                className="toggle-switch"
                type="checkbox"
                id="switch"
                name="switch"
                onClick={this.togglePricing}
              />
            </div>
            <p>Lifetime</p>
          </div>
          <label className="pricing-card-container" for="switch">
            <PricingComponent
              pricingHeader="Solo creator"
              priceAnnually="99.99"
              priceLifeTime="999.99"
              action="Mass following"
              numbers="Limited number ❌"
              profiles="Unlimited profiles ❌"

              isMonthlyActive={this.state.isLifetime}
            />
            <PricingComponent
              pricingHeader="Agency"
              priceAnnually="499.99"
              priceLifeTime="1999.99"
              action="Mass add friends  + Mass following"
              numbers="Limited number ✅"
              profiles="Unmilited profiles ❌"
              isMonthlyActive={this.state.isLifetime}
            />
            <PricingComponent
              pricingHeader="Scaled Agency"
              priceAnnually="999.99"
              priceLifeTime="4999.99"
              action="Mass friends +  Mass following + Mass Dms"
              numbers="Limited number✅"
              profiles="Unmilited profiles ✅"

              isMonthlyActive={this.state.isLifetime}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default Pricing;
