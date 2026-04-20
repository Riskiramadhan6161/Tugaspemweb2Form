import { useState } from "react";

interface InputPasswordProps {
  label: string;
  name: string;
  register: any;
  error?: string;
}

export const InputPassword = ({ label, name, register, error }: InputPasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-1 mb-3 text-left relative">
      <label className="font-bold text-gray-700">{label}</label>
      <div className="relative">
        <input 
          {...register(name)} 
          type={showPassword ? "text" : "password"} 
          className={`w-full border p-2 rounded-lg focus:outline-none focus:ring-2 ${
            error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
          }`} 
        />
        {}
        <button 
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-2 text-sm text-gray-500 hover:text-blue-600"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};