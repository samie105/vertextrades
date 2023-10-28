import React from "react";
import StakingHeader from "../../../components/dashboard/stake/StakingHeader";

export default function Layout({ children }) {
  return (
    <div>
      <StakingHeader />
      <div className="px-4">{children}</div>
    </div>
  );
}
