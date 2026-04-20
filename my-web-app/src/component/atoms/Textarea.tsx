import React from "react";

interface TextareaProps {
  label: string;
  name: string;
  register: any;
  error?: string;
  placeholder?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ label, name, register, error, placeholder }) => {
  return (
    <div className="flex flex-col gap-1 mb-3 text-left">
      <label className="font-bold text-gray-700">{label}</label>
      <textarea
        {...register(name)}
        placeholder={placeholder}
        className={`border p-2 rounded-lg min-h-[100px] focus:ring-2 focus:outline-none transition-all ${
          error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
        }`}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};