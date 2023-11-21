"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function EditAddress() {
  const [data, setData] = useState([]);
  const [updatedData, setUpdatedData] = useState({});
  const _id = "655ac544d08dccff38a968da";
  const [loading, isloading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const response = await axios.get("/db/getAddess/");
        setData(response.data.address || []); // Ensure 'address' exists in the response
      } catch (error) {
        console.log(error);
      }
    };
    fetchAddress();
  }, []);

  const handleChange = (field, value) => {
    setUpdatedData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleUpdate = async () => {
    try {
      isloading(true);
      await axios.post("/db/editAddress", { _id, updatedData });
      console.log("Address updated successfully");
      router.push("/admin");
      // Optionally, you can refetch the data after the update
      // to display the latest changes
      // fetchAddress();
    } catch (error) {
      console.log("Error updating address:", error);
    }
    isloading(false);
  };

  return (
    <div className="mt-8 px-4">
      {data.map((addressData) => (
        <div key={addressData._id} className="mb-4 p-4  rounded-md">
          {Object.entries(addressData)
            .filter(([key]) => key !== "_id" && key !== "__v")
            .map(([key, value]) => (
              <div key={key} className="mb-2">
                <label className="block font-bold">{key}</label>
                <input
                  type="text"
                  value={
                    updatedData[key] !== undefined ? updatedData[key] : value
                  }
                  onChange={(e) => handleChange(key, e.target.value)}
                  className="w-full border border-gray-300 rounded-sm p-2"
                />
              </div>
            ))}
        </div>
      ))}
      <button
        onClick={handleUpdate}
        className="bg-red-500 w-full font-bold text-sm text-white px-4 py-3 rounded-sm hover:bg-red-600"
      >
        {loading ? "Updating..." : "Update"}
      </button>
    </div>
  );
}
