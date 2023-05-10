import { useNavigate } from "react-router-dom";
import { RegisterForm } from "../../components/Form/RegisterForm";
import { StyledHeader } from "../HomePage/style";
import { StyledMain, StyledWrapper } from "./style";
import Logo from '/src/assets/crypbay.png'
import Crypto from '/src/assets/crypto.jpg'

export const RegisterPage = () => {
    const navigate = useNavigate();
  
  return (
        <StyledMain>
          <StyledHeader>
            <img src={Logo} alt="CrypBayLogo" />
            <div>
                <button className='header__btn-login' onClick={() => navigate('/')}>
                    Home
                </button>
                <button className='header__btn-register' onClick={() => navigate('/login')}>
                    Login
                </button>
            </div>
          </StyledHeader>
          <StyledWrapper>
            <RegisterForm />
            <img src={Crypto} alt="CryptoImage" />
          </StyledWrapper>
        </StyledMain>
      );
}