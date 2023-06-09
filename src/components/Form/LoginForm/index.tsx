import { SubmitHandler, useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { TLoginFormValues, loginFormSchema } from "./loginFormSchema";
import Input from "../../Input";
import { UserContext } from "../../../providers/userContext";
import { StyledForm } from "./style";

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const { userLogin } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormValues>({ resolver: zodResolver(loginFormSchema) });

  const submit: SubmitHandler<TLoginFormValues> = (formData) => {
    userLogin(formData, setLoading);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <h1>Login</h1>
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
      <button>Entrar</button>
    </StyledForm>
  );
};
