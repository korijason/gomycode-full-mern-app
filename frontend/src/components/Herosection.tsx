// src/components/HeroSection.tsx
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-blue-100 text-center py-12">
      <h2 className="text-3xl font-bold mb-4">Take Control of Your Finances</h2>
      <p className="text-lg mb-6">
        Track your income, expenses, and budgets effortlessly with MyFedha.
      </p>
      <img
        src="https://via.placeholder.com/600x300"
        alt="Finance Tracking Illustration"
        className="mx-auto rounded-md shadow-lg"
      />
    </div>
  );
};

export default HeroSection;
