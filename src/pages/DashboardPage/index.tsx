import { useState } from "react"
import { CardModalCompraDeCripto } from "../../components/Modais/ModalCompraDeCripto"
import Logo from '/src/assets/crypbay.png';
import Emanuel from '/src/assets/emanuel.png'
import { StyledAside, StyledTotalDiv, StyledHeader, StyledMain, StyledWrapper, StyledDivAside, StyledDashDiv } from "./style";
import Wallet from '/src/assets/wallet.svg';
import List from '/src/assets/list-columns.svg'
import Bitcoin from '/src/assets/currency-bitcoin.svg'
import Exchange from '/src/assets/currency-exchange.svg'
import Coin from '/src/assets/coin.svg'
import Cash from '/src/assets/cash-coin.svg'
import { CardModalVendaDeCripto } from "../../components/Modais/ModalVendaDeCripto"

interface ICrypto{
    id: number;
    name: string;
    price: number;
}


export const DashboardPage = () => {
    const [currOpen, setCurrOpen] = useState(false)
    const CryptoList: ICrypto[] = [
        {
          id: 1,
          name: "Bitcoin",
          price: 1000
        },
        {
          id: 2,
          name: "Ethereum",
          price: 500
        },
        {
          id: 3,
          name: "Litecoin",
          price: 250
        },
        {
          id: 4,
          name: "Cardano",
          price: 12
        },
        {
          id: 5,
          name: "Avalanche",
          price: 22
        },
        {
          id: 6,
          name: "Hedera",
          price: 80
        },
        {
          id: 7,
          name: "Chiliz",
          price: 7
        }
      ]
    
    return (
        <>
        {currOpen ? <CardModalCompraDeCripto /> : null}
        {currOpen ? <CardModalVendaDeCripto /> : null } 
            <StyledMain>
                <StyledHeader>
                    <img src={Logo} alt="CrypBayLogo" className="logo"/>
                    <div>
                        <img src={Emanuel} alt="emanuel" />
                        <div>
                            <span>
                                Emanuel Spitzner
                            </span>
                            <button>
                                Editar
                            </button>
                        </div>
                        <button>
                            Sair
                        </button>
                    </div>
                </StyledHeader>
                <StyledWrapper>
                    <StyledAside>
                        <StyledTotalDiv>
                            <h2>Investimento Total</h2>
                            <span>
                                R$ 5400,00
                            </span>
                        </StyledTotalDiv>
                        <StyledDivAside>
                            <img src={Wallet} alt="Wallet" />
                            <h2>Carteira</h2>
                        </StyledDivAside>
                        <StyledDivAside>
                            <img src={List} alt="History" />
                            <h2>Histórico</h2>
                        </StyledDivAside>
                        <StyledDivAside>
                            <img src={Coin} alt="AddCash" />
                            <h2>Adicionar Saldo</h2>
                        </StyledDivAside>
                        <StyledDivAside>
                            <img src={Bitcoin} alt="BuyCrypto" />
                            <h2>Comprar Crypto</h2>
                        </StyledDivAside>
                        <StyledDivAside>
                            <img src={Exchange} alt="SellCrypto" />
                            <h2>Vender Crypto</h2>
                        </StyledDivAside>
                        <StyledDivAside>
                            <img src={Cash} alt="WithdrawCash" />
                            <h2>Sacar Saldo</h2>
                        </StyledDivAside>
                    </StyledAside>
                    <StyledDashDiv>
                        <div>
                            <ul>
                                {CryptoList.map((crypto) => (
                                    <li key={crypto.id}>
                                        <h1>{crypto.name}</h1>
                                        <span>R$ {crypto.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <ul>
                            </ul>
                        </div>
                    </StyledDashDiv>
                </StyledWrapper>
            </StyledMain>
            <h2>dashboard</h2>
            <CardModalCompraDeCripto />
            {/* <CardModalVendaDeCripto /> */}
        </>
    )
}