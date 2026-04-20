import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(1, "Nama wajib diisi"),
  email: z.string().email("Email tidak valid"),
  password: z.string().min(8, "Password minimal 8 karakter"),
  event: z.string().min(1, "Pilih event"),
  bio: z.string().min(10, "Bio minimal 10 karakter"),
});

export type RegisterFormData = z.infer<typeof registerSchema>;