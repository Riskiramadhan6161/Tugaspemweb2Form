import React from "react";

interface FormFieldProps {
  label: string;
  error?: string;
  children: React.ReactNode; 
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  error,
  children,
}) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {}
      <label className="text-sm font-semibold text-gray-700 ml-1">
        {label}
      </label>

      {}
      <div className="w-full">
        {children}
      </div>

      {}
      {error && (
        <span className="text-xs text-red-600 font-medium ml-1">
          {error}
        </span>
      )}
    </div>
  );
};