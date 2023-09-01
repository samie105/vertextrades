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
      <DialogContent className=" border-0 transition-all focus:outline-none text-gray-900 rounded-xl w-[90%] md:w-[60%] lg:w:-[20%]">
        <DialogHeader className="text-white">
          <DialogTitle className=""></DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="signup" className="transition-all">
          <TabsList className="w-full grid grid-cols-2 bg-gray-100 font-bold">
            <TabsTrigger
              value="signup"
              className="data-[state=active]:bg-gray-200 data-[state=active]:font-bold data-[state=active]:text-black"
            >
              Sign Up
            </TabsTrigger>
            <TabsTrigger
              value="login"
              className="data-[state=active]:bg-gray-200 data-[state=active]:font-bold data-[state=active]:text-black"
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
