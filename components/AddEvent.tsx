"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ReactNode } from "react";

export default function AddEventForm() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    location: "",
    price: "",
    image: null,
    description: "",
  });

  const handleChange = (e:any) => {
    const { id, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: files ? files[0] : value,
    }));
  };

  const handleSubmit = () => {
    // Your event creation logic here
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-lg shadow-lg border border-gray-300">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">Create Event</h2>
            <p className="text-gray-600">Fill out the details for your new event.</p>
          </div>
          <div className="p-6 border-t border-gray-300">
            <form className="grid gap-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Event Name
                  </label>
                  <Input id="name" type="text" placeholder="Enter event name" onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                    Date
                  </label>
                  <Input id="date" type="date" onChange={handleChange} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                    Location
                  </label>
                  <Input id="location" type="text" placeholder="Enter event location" onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                    Price
                  </label>
                  <Input id="price" type="number" placeholder="Enter event price" onChange={handleChange} />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                  Event Image
                </label>
                <Input id="image" type="file" onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <Textarea id="description" rows={3} placeholder="Enter event description" onChange={handleChange} />
              </div>
            </form>
          </div>
          <div className="p-6 border-t border-gray-300 flex justify-end">
            <Button onClick={handleSubmit}>Create Event</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="bg-white hover:bg-black text-black font-semibold hover:text-white py-1.5 px-3 text-sm border border-black hover:border-transparent rounded"
    >
      {children}
    </button>
  );
};