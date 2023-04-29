import { z } from "zod";

export const loginFormSchema = z.object({
  email: z
    .string()
    .nonempty("O e-mail é obrigatório.")
    .email("E-mail inválido. Tente novamente."),
  password: z.string().nonempty("A senha é obrigatória."),
});
export type TLoginFormValues = z.infer<typeof loginFormSchema>;
