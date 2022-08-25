import React from "react";
import AccountDetails from "./AccountDetails";
import Password from "./Password";

export default function Account() {
  document.title = "Account";
  return (
    <>
      <AccountDetails />
      <Password />
    </>
  );
}
