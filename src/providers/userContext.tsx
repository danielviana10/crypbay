import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { TLoginFormValues } from "../components/Form/LoginForm/loginFormSchema";
/* import { api } from "../services/api"; */
import { toast } from "react-toastify";

interface IUserContext {
  userLogin: (
    formData: TLoginFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
}

/* interface IUser {
  name: string;
  email: string;
  id: string;
} */

interface IUserProviderProps {
  children: React.ReactNode;
}

/* interface IUserLoginResponse {
  accessToken: string;
  user: IUser;
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
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{  userLogin }}>
      {children}
    </UserContext.Provider>
  );
};
