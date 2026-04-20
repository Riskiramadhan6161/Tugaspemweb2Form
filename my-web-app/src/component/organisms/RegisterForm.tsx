import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react"; 
import { Input } from "../atoms/Input";
import { InputPassword } from "../atoms/InputPassword";
import { Select } from "../atoms/Select"; 
import { Textarea } from "../atoms/Textarea";
import { Button } from "../atoms/Button";
import { registerSchema, type RegisterFormData } from "../schemas/registerSchema";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);

  const { 
    register,
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit = async (data: RegisterFormData) => {
    setLoading(true); 
    try {
      
      await new Promise((resolve) => setTimeout(resolve, 2000)); 
      
      console.log("Data Berhasil divalidasi:", data);
      alert("Kamu Berhasil!"); 
      reset(); 
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    } finally {
      setLoading(false); 
    }
  };

  return (

    <div className="min-h-screen w-full bg-slate-100 flex items-center justify-center p-6">
      
      {}
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md border border-gray-200"
      >
        <h2 className="text-3xl font-extrabold text-center mb-8 text-blue-600 tracking-tight">
          Registrasi Event
        </h2>
        
        <div className="flex flex-col gap-4">
          <Input 
            label="Nama Lengkap" 
            name="name" 
            register={register} 
            error={errors.name?.message} 
            placeholder="Masukkan nama lengkap"
          />
          
          <Input 
            label="Email" 
            name="email" 
            type="email"
            register={register} 
            error={errors.email?.message} 
            placeholder="email@contoh.com"
          />

          <InputPassword 
            label="Password" 
            name="password" 
            register={register} 
            error={errors.password?.message} 
          />

          <Select 
            label="Pilih Kategori Event"
            name="event"
            register={register}
            error={errors.event?.message}
            options={[
              { label: "Invofest", value: "invofest" },
              { label: "Workshop AI", value: "ai" },
              { label: "Web Development", value: "web" }
            ]}
          /> 

          <Textarea 
            label="Bio Singkat"
            name="bio"
            register={register}
            error={errors.bio?.message}
            placeholder="Ceritakan sedikit tentang dirimu..."
          />

          <div className="mt-4">
            <Button label="Daftar Sekarang" isLoading={loading} type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
}