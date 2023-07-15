/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";

import Login from "./Login";
import Signup from "./SignUp";

const passwordsMatch = (value, data) => value === data.password;

export default function AuthUi() {
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleLoginSubmit = (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
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
                className="data-[state=active]:bg-slate-700  data-[state=active]:text-white"
                onClick={() => handleTabChange("signup")}
              >
                Sign Up
              </TabsTrigger>
              <TabsTrigger
                value="login"
                className="data-[state=active]:bg-slate-700  data-[state=active]:text-white"
                onClick={() => handleTabChange("login")}
              >
                Log In
              </TabsTrigger>
            </TabsList>
            <TabsContent value="signup" className="mt-8">
              <Signup />
            </TabsContent>
            <TabsContent value="login" className="mt-8">
              <Login />
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  );
}
