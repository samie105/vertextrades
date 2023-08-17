import React from "react";
import Livetrade from "../../../components/dashboard/Livetrades/Livetrade";
import History from "../../../components/dashboard/history/History";

export default function page() {
  return (
    <div>
      <Livetrade />
      <History />
    </div>
  );
}
