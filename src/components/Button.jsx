import React from "react";

const Button = ({ styles }) => {
  const scrollToPricing = () => {
    // Find the element
    const pricingSection = document.getElementById("pricing");

    // Scroll to the element
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error('Pricing section not found');
    }
  };

  return (
    <button
      onClick={scrollToPricing}
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
