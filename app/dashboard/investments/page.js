import React from "react";
import Livetrade from "../../../components/dashboard/Livetrades/Livetrade";
import InvestmentPlan from "../../../components/dashboard/inventsments/InvenstmentPlans";

export default function page() {
  return (
    <div>
      <Livetrade />
      <InvestmentPlan />
    </div>
  );
}
