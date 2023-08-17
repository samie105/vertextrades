"use client";
import React, { useState } from "react";
import AccountSect from "../Livetrades/AccountSect";

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
            <label htmlFor="currentPassword" className="block mb-2 font-bold">
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              value={currentPassword}
              onChange={handlePasswordChange}
              className="w-full px-4 py-3 text-sm rounded-lg bg-gray-50 font-bold border"
            />

            <label htmlFor="newPassword" className="block mt-4 mb-2 font-bold">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={newPassword}
              onChange={handlePasswordChange}
              className="w-full px-4 py-3 text-sm rounded-lg bg-gray-50 font-bold border"
            />

            <label
              htmlFor="confirmPassword"
              className="block mt-4 mb-2 font-bold"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handlePasswordChange}
              className="w-full px-4 py-3 text-sm rounded-lg bg-gray-50 font-bold border"
            />

            <button
              disabled={!currentPassword && !newPassword && !confirmPassword}
              type="submit"
              className="w-full px-4 py-3 mt-4 text-sm rounded-lg bg-slate-800 text-white font-bold disabled:bg-gray-300 disabled:text-gray-600 hover:bg-slate-600 focus:outline-none focus:bg-slate-600"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
