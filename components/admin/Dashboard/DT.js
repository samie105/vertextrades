"use client";
import { useEffect, useState } from "react";
import { DataTableDemo } from "../../../app/admin/data-table";

export default function DT({ data }) {
  return (
    <>
      <div className="p-4 mt-8 rounded-md border">
        {console.log(data)}
        <DataTableDemo data={data} />
      </div>
    </>
  );
}
