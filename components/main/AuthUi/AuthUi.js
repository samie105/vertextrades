/* eslint-disable react/no-unescaped-entities */
"use client";
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

export default function AuthUi() {
  return (
    <>
      <DialogContent className="bg-slate-900 border-0 transition-all text-white rounded-xl w-[90%] md:w-[60%] lg:w:-[20%]">
        <DialogHeader className="text-white">
          <DialogTitle className=""></DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="signup" className="transition-all">
          <TabsList className="w-full grid grid-cols-2 bg-slate-800 font-bold">
            <TabsTrigger
              value="signup"
              className="data-[state=active]:bg-slate-700  data-[state=active]:text-white"
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
          <TabsContent value="signup" className="mt-8">
            <Signup />
          </TabsContent>
          <TabsContent value="login" className="mt-8">
            <Login />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </>
  );
}
