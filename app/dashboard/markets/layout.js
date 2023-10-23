import React from "react";
import MarketsPageHeader from "../../../components/dashboard/MarketsPage/MarketsPageHeader";
export default function Layout({ children }) {
  return (
    <main>
      <MarketsPageHeader />
      <div className="mt-4">{children}</div>
    </main>
  );
}
