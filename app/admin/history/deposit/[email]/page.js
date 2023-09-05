import React from "react";

export default function page({ params }) {
  const { email } = params;
  return <div>Deposit for {email}</div>;
}
