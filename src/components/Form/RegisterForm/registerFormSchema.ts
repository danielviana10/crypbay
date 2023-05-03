import { z } from "zod";

export const registerFormSchema = z
  .object({
    name: z
      .string()
      .nonempty("O nome é obrigatório.")
      .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula"),
    email: z
      .string()
      .nonempty("O e-mail é obrigatório.")
      .email("E-mail inválido. Tente novamente."),
    password: z
      .string()
      .min(7, "A senha precisa conter pelo menos 7 caracteres")
      .regex(
        /(?=.*?[#?!@$%^&*-])/,
        "É necessário pelo menos um caracter especial"
      )
      .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número"),
    confirm: z.string().nonempty("É obrigatório confirmar a senha"),
    avatar: z.string().url("URL inválida. Tente novamente.")
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: "A confirmação de senha precisa corresponder com a senha.",
    path: ["confirm"],
  });

export type TRegisterFormValues = z.infer<typeof registerFormSchema>;
