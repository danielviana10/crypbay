import { StyledDivApresentation, StyledHeader, StyledMain, StyledWrapper, StyledImgDiv } from './style'
import Logo from '/src/assets/crypbay.png'
import Enrique from '/src/assets/enrique.jpeg'
import Ricardo from '/src/assets/ricardo.jpg'
import Emanuel from '/src/assets/emanuel.png'
import Germano from '/src/assets/germano.jpeg'
import Daniel from '/src/assets/daniel.jpeg'
import Crypto from '/src/assets/crypto.jpg'


export const HomePage = () => {
    return (
    <StyledMain>
        <StyledHeader>
            <img src={Logo} alt="CrypBayLogo" />
            <div>
                <button className='header__btn-login'>
                    Login
                </button>
                <button className='header__btn-register'>
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
                    <img src={Emanuel} alt="DevEmanuel" />
                    <img src={Germano} alt="DevGermano" />
                </div>
            </StyledDivApresentation>
            <StyledImgDiv>
                <img src={Crypto} alt="CryptoImage" />
            </StyledImgDiv>
        </StyledWrapper>
    </StyledMain>
    )
}