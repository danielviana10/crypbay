import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../components/Form/LoginForm";
import { StyledHeader } from "../HomePage/style";
import Logo from '/src/assets/crypbay.png'
import Crypto from '/src/assets/crypto.jpg'
import { StyledMain, StyledWrapper } from "../RegisterPage/style";

export const LoginPage = () => {
  const navigate = useNavigate();
  
  return (
    <StyledMain>
      <StyledHeader>
            <img src={Logo} alt="CrypBayLogo" />
            <div>
                <button className='header__btn-login' onClick={() => navigate('/')}>
                    Home
                </button>
                <button className='header__btn-register' onClick={() => navigate('/register')}>
                    Cadastro
                </button>
            </div>
      </StyledHeader>
      <StyledWrapper>
        <LoginForm />
        <img src={Crypto} alt="CryptoImg" />
      </StyledWrapper>
    </StyledMain>
  );
};
