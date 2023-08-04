import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";

export default function LatestTrades() {
  const trades = [
    // Add your recent trade data here, if available
    // Example:
    // { Type: "Buy", Pair: "EUR/USD", Action: "Long", Entry: 1.1785, SL: 1.1750, TP: 1.1850, Result: "Win", Details: "Lorem ipsum..." },
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold text-gray-600">Type</TableHead>
          <TableHead className="font-bold text-gray-600">Pair</TableHead>
          <TableHead className="font-bold text-gray-600">Action</TableHead>
          <TableHead className="font-bold text-gray-600">Entry</TableHead>
          <TableHead className="font-bold text-gray-600">SL</TableHead>
          <TableHead className="font-bold text-gray-600">TP</TableHead>
          <TableHead className="font-bold text-gray-600">Result</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {trades.length > 0 ? (
          trades.map((trade, index) => (
            <TableRow key={index}>
              <TableCell>{trade.Type}</TableCell>
              <TableCell>{trade.Pair}</TableCell>
              <TableCell>{trade.Action}</TableCell>
              <TableCell>{trade.Entry}</TableCell>
              <TableCell>{trade.SL}</TableCell>
              <TableCell>{trade.TP}</TableCell>
              <TableCell>{trade.Result}</TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell
              colSpan="8"
              className="text-center font-bold text-gray-500"
            >
              No Recent Trade Activity
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
