interface InputProps {
  label: string;
  name: string;
  register: any;
  error?: string;
  type?: string;
  placeholder?: string;
}

export const Input = ({ label, name, register, error, type = "text", placeholder }: InputProps) => (
  <div className="flex flex-col gap-1 mb-3 text-left">
    <label className="font-bold text-gray-700">{label}</label>
    <input 
      {...register(name)} 
      type={type} 
      placeholder={placeholder} 
      className={`border p-2 rounded-lg focus:ring-2 focus:outline-none transition-all ${
        error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
      }`} 
    />
    {error && <span className="text-red-500 text-sm italic">{error}</span>}
  </div>
);