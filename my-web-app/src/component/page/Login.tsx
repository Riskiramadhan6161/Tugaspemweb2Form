import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema as loginSchema, type RegisterFormData as LoginFormData } from "../schemas/registerSchema";
import { Input } from "../atoms/Input";
import { InputPassword } from "../atoms/InputPassword";
import { Button } from "../atoms/Button";


export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });


    const onSubmit = async (data: LoginFormData) => {
        console.log("Memproses Login...", data);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        alert("Login Berhasil!");
        reset();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
                <h1 className="text-2xl font-bold mb-6 text-center">Login Page</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <Input
                        label="Email"
                        name="email"
                        register={register}
                        error={errors.email?.message}
                    />

                    <InputPassword
                        label="Password"
                        name="password"
                        register={register}
                        error={errors.password?.message}
                    />

                    <div className="pt-2">
                        <Button label="Login" isLoading={isSubmitting} />
                    </div>
                </form>
            </div>
        </div>
    );
}