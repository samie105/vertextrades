/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { hist } from "./hist";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

export default function History() {
  const [selectedHistory, setSelectedHistory] = useState("deposit");

  const currentHistory = hist.find((h) => h.name === selectedHistory);

  return (
    <div className="p-4">
      <Select
        onValueChange={(value) => setSelectedHistory(value)}
        className="font-bold"
      >
        <SelectTrigger className="">
          <SelectValue className="font-bold">
            {selectedHistory.charAt(0).toUpperCase() + selectedHistory.slice(1)}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="deposit" className="font-bold">
            Deposit
          </SelectItem>
          <SelectItem value="withdrawal" className="font-bold">
            Withdrawal
          </SelectItem>
        </SelectContent>
      </Select>
      <div className="rounded-xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] my-4 py-3">
        {" "}
        <Table>
          <TableCaption>
            {selectedHistory.charAt(0).toUpperCase() + selectedHistory.slice(1)}{" "}
            History
          </TableCaption>
          <TableHeader>
            <TableRow>
              {selectedHistory === "deposit" ? (
                <>
                  <TableHead className="font-bold text-slate-800">
                    Date Added
                  </TableHead>
                  <TableHead className="font-bold text-slate-800">
                    Deposit Method
                  </TableHead>
                  <TableHead className="font-bold text-slate-800">
                    Payment Proof
                  </TableHead>
                  <TableHead className="font-bold text-slate-800">
                    Transaction Status
                  </TableHead>
                </>
              ) : (
                <>
                  <TableHead className="font-bold text-slate-800">
                    Transaction ID
                  </TableHead>
                  <TableHead className="font-bold text-slate-800">
                    Withdrawal Method
                  </TableHead>
                  <TableHead className="font-bold text-slate-800">
                    Amount
                  </TableHead>
                  <TableHead className="font-bold text-slate-800">
                    Transaction Status
                  </TableHead>
                </>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentHistory.data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center font-bold">
                  No {selectedHistory} history
                </TableCell>
              </TableRow>
            ) : (
              currentHistory.data.map((item, index) => (
                <TableRow key={index}>
                  {selectedHistory === "deposit" ? (
                    <>
                      <TableCell>{item.dateAdded}</TableCell>
                      <TableCell>{item.depositMethod}</TableCell>
                      <TableCell>{item.paymentProof}</TableCell>
                      <TableCell
                        className={
                          item.transactionStatus === "Pending"
                            ? "text-orange-500"
                            : "text-green-500"
                        }
                      >
                        {item.transactionStatus}
                      </TableCell>
                    </>
                  ) : (
                    <>
                      <TableCell>{item.transactionID}</TableCell>
                      <TableCell>{item.withdrawalMethod}</TableCell>
                      <TableCell>{item.amount}</TableCell>
                      <TableCell
                        className={
                          item.transactionStatus === "Pending"
                            ? "text-orange-500"
                            : "text-green-500"
                        }
                      >
                        {item.transactionStatus}
                      </TableCell>
                    </>
                  )}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
