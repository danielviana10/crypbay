import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { TLoginFormValues } from "../components/Form/LoginForm/loginFormSchema";
/* import { api } from "../services/api"; */
import { toast } from "react-toastify";
import { TRegisterFormValues } from "../components/Form/RegisterForm/registerFormSchema";


interface IUserContext {
  userLogin: (
    formData: TLoginFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  userRegister: (
    formData: TRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
}

interface IUserProviderProps {
  children: React.ReactNode;
}

/* interface IUserLoginResponse {
  accessToken: string;
  user: IUser;
} */

/* interface IUserRegisterResponse {
  id: number;
  name: string;
  email: string;
  password: string;
  avatar: string;
} */

export const UserContext = createContext({} as IUserContext);
export const UserProvider = ({ children }: IUserProviderProps) => {
  const navigate = useNavigate();

  const userLogin = async (
    formData: TLoginFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      /* const { data } = await api.post<IUserLoginResponse>("/login", formData);
      localStorage.setItem("@TOKEN_KenzieBurguer", data.accessToken);
      localStorage.setItem("@USERID_KenzieBurguer", data.user.id); */
      console.log(formData);

      toast.success("Login bem sucedido");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Email e/ou senha incorreto.")
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (
    formData: TRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
        setLoading(true)
        /* const {data} = await api.post<TRegisterFormValues>("/register", formData); */
        console.log(formData);
        toast.success("Usuário cadastrado!")
    } catch (error) {
        toast.error("Erro ao tentar cadastrar um usuário.")
        console.log(error)
    }
  };

  return (
    <UserContext.Provider value={{ userLogin, userRegister }}>
      {children}
    </UserContext.Provider>
  );
};
