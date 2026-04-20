import React from "react";

interface SelectProps {
  label: string;
  name: string;
  register: any; 
  error?: string;
  options: { label: string; value: string }[];
}

export const Select: React.FC<SelectProps> = ({ label, name, register, error, options }) => {
  return (
    <div className="flex flex-col gap-1 mb-3 text-left">
      <label className="font-bold text-gray-700">{label}</label>
      <select
        {...register(name)}
        className={`border p-2 rounded-lg focus:ring-2 focus:outline-none transition-all ${
          error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
        }`}
      >
        <option value="">-- Pilih Event --</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};