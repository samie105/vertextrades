/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../../ui/card";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

export default function AuthUi() {
  const [activeTab, setActiveTab] = useState("signup");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Perform login or signup logic here
      console.log(formData);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <div className="cta-button justify-center flex items-center pr-12 cursor-pointer w-full absolute bottom-5">
            <button className="w-full bg-slate-800 text-white px-7 py-3 rounded-xl">
              Create an account
            </button>
          </div>
        </DialogTrigger>
        <DialogContent className="bg-slate-900 border-0 transition-all text-white rounded-xl w-[90%] h">
          <DialogHeader className="text-white">
            <DialogTitle className=""></DialogTitle>
          </DialogHeader>
          <Tabs defaultValue="signup" className="transition-all">
            <TabsList className="w-full grid grid-cols-2 bg-slate-800 font-bold">
              <TabsTrigger
                value="signup"
                className=" data-[state=active]:bg-slate-700  data-[state=active]:text-white "
              >
                Sign Up
              </TabsTrigger>
              <TabsTrigger
                value="login"
                className="data-[state=active]:bg-slate-700  data-[state=active]:text-white"
              >
                Log In
              </TabsTrigger>
            </TabsList>
            <form onSubmit={handleSubmit} className="">
              <TabsContent value="signup" className="mt-8">
                <div className="message mb-5">
                  <div className="text-white font-bold">
                    Create a new account
                  </div>
                  <p className="text-sm font-normal text-gray-400 mt-3">
                    Continue where you left off by loggin in, we keep track of
                    your every progress.
                  </p>
                </div>
                <div className="mb-5 mt-6">
                  <label
                    htmlFor="name"
                    className="block text-white text-sm mb-2 capitalize"
                  >
                    Legal Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 text-sm text-white capitalize rounded-lg"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block text-white text-sm mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    placeholder="johndoe@example.com"
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg text-sm"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="username"
                    className="block text-white text-sm mb-2"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    placeholder="johndoe345"
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 text-white text-sm rounded-lg"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="password"
                    className="block text-white text-sm mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 text-white text-sm rounded-lg"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="password"
                    className="block text-white text-sm mb-2"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Confirm password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 text-white text-sm rounded-lg"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500  text-white mt-5 py-3 px-4 rounded-lg"
                >
                  Sign Up
                </button>
              </TabsContent>
              <TabsContent value="login" className="mt-8">
                <div className="message mb-5">
                  <div className="text-white font-bold">
                    Sign-In to your account
                  </div>
                  <p className="text-sm font-normal text-gray-400 mt-3">
                    Continue where you left off by loggin in, we keep track of
                    your every progress.
                  </p>
                </div>
                <div className="mb-5 mt-6">
                  <label
                    htmlFor="email"
                    className="block text-white text-sm mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="johndoe@example.com"
                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg text-sm"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="password"
                    className="block text-white text-sm mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3  px-4 rounded-lg"
                >
                  Log In
                </button>
              </TabsContent>
            </form>
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  );
}
