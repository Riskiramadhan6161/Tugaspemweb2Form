import React from "react";

interface ButtonProps {
  label: string;
  type?: "button" | "submit";
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ label, type = "submit", isLoading = false }) => {
  return (
    <button
      type={type}
      disabled={isLoading}
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200 disabled:opacity-50"
    >
      {isLoading ? "Mengirim..." : label}
    </button>
  );
};