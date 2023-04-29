import { SubmitHandler, useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { TRegisterFormValues, registerFormSchema } from "./registerFormSchema";
import Input from "../../Input";
import { UserContext } from "../../../providers/userContext";

export const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const { userRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormValues>({ resolver: zodResolver(registerFormSchema) });

  const submit: SubmitHandler<TRegisterFormValues> = (formData) => {
    userRegister(formData, setLoading);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        type="text"
        label="Seu nome"
        {...register("name")}
        disabled={loading}
        error={errors.name}
      />
      <Input
        type="email"
        label="Seu e-mail"
        {...register("email")}
        disabled={loading}
        error={errors.email}
      />
      <Input
        type="password"
        label="Crie uma senha"
        {...register("password")}
        disabled={loading}
        error={errors.password}
      />
      <Input
        type="password"
        label="Confirmar senha"
        {...register("confirm")}
        disabled={loading}
        error={errors.confirm}
      />
      <Input
        type="text"
        label="Avatar"
        {...register("avatar")}
        disabled={loading}
        error={errors.avatar}
      />
      <button>Entrar</button>
    </form>
  );
};