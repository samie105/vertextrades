import React from "react";
import Livetrade from "../../../components/dashboard/Livetrades/Livetrade";
import Account from "../../../components/dashboard/accounts/Account";

export default function page() {
  return (
    <div>
      <Livetrade />
      <Account />
    </div>
  );
}
