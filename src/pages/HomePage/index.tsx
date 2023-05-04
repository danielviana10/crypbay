import { StyledDivApresentation, StyledHeader, StyledMain, StyledWrapper, StyledImgDiv } from './style'
import Logo from '/src/assets/crypbay.png'
import Enrique from '/src/assets/enrique.jpeg'
import Ricardo from '/src/assets/ricardo.jpg'
import Emanuel from '/src/assets/emanuel.png'
import Germano from '/src/assets/germano.jpeg'
import Daniel from '/src/assets/daniel.jpeg'
import Crypto from '/src/assets/crypto.jpg'
import { useNavigate } from 'react-router-dom'


export const HomePage = () => {
    const navigate = useNavigate();
    
    return (
    <StyledMain>
        <StyledHeader>
            <img src={Logo} alt="CrypBayLogo" />
            <div>
                <button className='header__btn-login' onClick={() => navigate('/login')}>
                    Login
                </button>
                <button className='header__btn-register' onClick={() => navigate('/register')}>
                    Cadastro
                </button>
            </div>
        </StyledHeader>
        <StyledWrapper>
            <StyledDivApresentation>
                <p>
                    CrypBay, sua plataforma de consultoria especializada em cryptomoedas e gerenciamento de hardwallet!
                </p>
                <p>
                    Conheça nossa equipe especializada que irá sanar todas as suas dúvidas do mundo Crypto:
                </p>
                <div>
                    <img src={Enrique} alt="DevEnrique" />
                    <img src={Ricardo} alt="DevRicardo" />
                    <img src={Daniel} alt="DevDaniel" />
                    <img src={Germano} alt="DevGermano" />
                    <img src={Emanuel} alt="DevEmanuel" />
                </div>
            </StyledDivApresentation>
            <StyledImgDiv>
                <img src={Crypto} alt="CryptoImage" />
            </StyledImgDiv>
        </StyledWrapper>
    </StyledMain>
    )
}