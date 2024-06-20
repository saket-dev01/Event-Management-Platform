"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export const Button = ({ onClick, children }: ButtonProps) => {
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
