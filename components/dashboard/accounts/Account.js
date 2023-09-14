/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import AccountSect from "../Livetrades/AccountSect";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";

export default function Account() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    if (name === "currentPassword") {
      setCurrentPassword(value);
    } else if (name === "newPassword") {
      setNewPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement password change logic here
  };

  return (
    <div className="">
      <AccountSect />
      <div className="p-4">
        <div className="shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-xl p-5">
          <h2 className="text-xl font-bold mb-6">Settings</h2>
          <form onSubmit={handleSubmit} className="text-sm">
            <Label htmlFor="currentPassword" className="block mb-2 font-bold">
              Current Password
            </Label>
            <Input
              type="password"
              id="currentPassword"
              name="currentPassword"
              value={currentPassword}
              onChange={handlePasswordChange}
              className="w-full px-4 py-3 text-sm rounded-lg bg-gray-50 font-bold border"
            />

            <Label htmlFor="newPassword" className="block mt-4 mb-2 font-bold">
              New Password
            </Label>
            <Input
              type="password"
              id="newPassword"
              name="newPassword"
              value={newPassword}
              onChange={handlePasswordChange}
              className="w-full px-4 py-3 text-sm rounded-lg /bg-gray-50 font-bold border"
            />

            <Label
              htmlFor="confirmPassword"
              className="block mt-4 mb-2 font-bold"
            >
              Confirm Password
            </Label>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handlePasswordChange}
              className="w-full px-4 py-3 text-sm rounded-lg /bg-gray-50 font-bold border"
            />

            <button
              disabled={!currentPassword && !newPassword && !confirmPassword}
              type="submit"
              className="w-full px-4 py-3 cursor-pointer mt-4 text-sm rounded-lg bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-800 via-red-600 to-orange-500 text-white font-bold  focus:outline-none "
            >
              Save Changes
            </button>
          </form>
          <div className="message bg-red-50 border border-red-600 text-red-600 rounded-md p-3 mt-4 text-sm">
            <article>
              <b className="font-bold">Note:</b> You're not able to change your
              password until after 15 days of account creation. We already
              employ advanced security measures so your account is safe with us
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
