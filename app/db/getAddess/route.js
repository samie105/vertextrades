import { NextResponse } from "next/server";
import AddressModel from "../../../AddressDbmain";

export const revalidate = true;

export async function GET() {
  const address = await AddressModel.find({});
  if (address.length > 0) {
    return NextResponse.json({ address });
  } else {
    return NextResponse.json({ error: "no user found" });
  }
}
