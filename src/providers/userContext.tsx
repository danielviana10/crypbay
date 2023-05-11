import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TLoginFormValues } from "../components/Form/LoginForm/loginFormSchema";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { TRegisterFormValues } from "../components/Form/RegisterForm/registerFormSchema";
import { string } from "zod";

interface IUserContext {
  userLogin: (
    formData: TLoginFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  userRegister: (
    formData: TRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  listCriptos: ICripto[];
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loadingModalCompra: boolean;
  setLoadingModalCompra: React.Dispatch<React.SetStateAction<boolean>>;
  loadingModalVenda: boolean;
  setLoadingModalVenda: React.Dispatch<React.SetStateAction<boolean>>;
  currentCripto: string;
  setCurrentCripto: React.Dispatch<React.SetStateAction<string>>;
  loadingModalAdicionarSaldo: boolean;
  setLoadingModalAdicionarSaldo: React.Dispatch<React.SetStateAction<boolean>>;
  loadingModalSacar: boolean;
  setLoadingModalSacar: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser | null;
  userLogout: () => void;
}

export interface ICripto {
  id: number;
  name: string;
  price: number;
}

interface IUserProviderProps {
  children: React.ReactNode;
}

interface Itransacoes {
  id: number;
  tipo: string;
  valor: number;
  nameMoeda: string;
}

export interface IUser {
  email: string;
  password: string;
  name?: string;
  id?: string;
}

interface IUserLoginResponse {
  accessToken: string;
  user: IUser;
}

export interface IAxiosError {
  message: string;
  response?: {
    data: string;
  };
}
interface IListCriptos {
  id: number;
  name: string;
  price: number;
}

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
  const [listCriptos, setListCriptos] = useState<IListCriptos[]>([]);
  const [currentCripto, setCurrentCripto] = useState("bitcoin");
  const [loading, setLoading] = useState(false);
  const [loadingModalCompra, setLoadingModalCompra] = useState(false);
  const [loadingModalVenda, setLoadingModalVenda] = useState(false);
  const [loadingModalSacar, setLoadingModalSacar] = useState(false);
  const [loadingModalAdicionarSaldo, setLoadingModalAdicionarSaldo] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const getAllListCriptos = async () => {
      try {
        const { data } = await api.get<IListCriptos[]>("/listCriptos");
        setListCriptos(data);
        console.log(data);
      } catch (error) {
        const Ierror = error as IAxiosError;
        console.log(Ierror);
      }
    };
    getAllListCriptos();
  }, []);

  const userLogout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const userId = localStorage.getItem("@USERID");

    const userAutoLogin = async () => {
      try {
        const { data } = await api.get<IUser>(`/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
        navigate("/dashboard");
      } catch (error) {
        const Ierror = error as IAxiosError;
        console.log(Ierror);
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
      }
    };
    if (token && userId) {
      userAutoLogin();
    }
  }, []);

  const userLogin = async (
    formData: TLoginFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const { data } = await api.post<IUserLoginResponse>("/login", formData);
      localStorage.setItem("@TOKEN", data.accessToken);
      localStorage.setItem("@USERID", JSON.stringify(data.user.id));
      setUser(data.user);

      toast.success("Login bem sucedido");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Email e/ou senha incorreto.");
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (
    formData: TRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      /* const {data} = await api.post<TRegisterFormValues>("/register", formData); */
      console.log(formData);
      toast.success("Usuário cadastrado!");
    } catch (error) {
      toast.error("Erro ao tentar cadastrar um usuário.");
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        userLogin,
        userRegister,
        listCriptos,
        loading,
        setLoading,
        loadingModalCompra,
        setLoadingModalCompra,
        loadingModalVenda,
        setLoadingModalVenda,
        currentCripto,
        setCurrentCripto,
        loadingModalAdicionarSaldo, 
        setLoadingModalAdicionarSaldo,
        loadingModalSacar, 
        setLoadingModalSacar,
        user,
        userLogout
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
