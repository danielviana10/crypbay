import { useContext, useState } from "react";
import { CardModalCompraDeCripto } from "../../components/Modais/ModalCompraDeCripto";
import Logo from "/src/assets/crypbay.png";
import Emanuel from "/src/assets/emanuel.png";
import {
  StyledAside,
  StyledTotalDiv,
  StyledHeader,
  StyledMain,
  StyledWrapper,
  StyledDivAside,
  StyledDashDiv,
  StyledDiv,
} from "./style";
import Wallet from "/src/assets/wallet.svg";
import List from "/src/assets/list-columns.svg";
import Bitcoin from "/src/assets/currency-bitcoin.svg";
import Exchange from "/src/assets/currency-exchange.svg";
import Coin from "/src/assets/coin.svg";
import Cash from "/src/assets/cash-coin.svg";
import { CardModalVendaDeCripto } from "../../components/Modais/ModalVendaDeCripto";
import { UserContext } from "../../providers/userContext";
import UserWallet from "../HomePage/Wallet";
import UserHistory from "./History";

interface ICrypto {
  id: number;
  name: string;
  price: number;
}

export const DashboardPage = () => {
  const { listCriptos, loadingModalVenda, setLoadingModalVenda, loadingModalCompra, setLoadingModalCompra, setCurrentCripto } =
    useContext(UserContext);

  const handleCriptoAndModal = (cripto: string) => {
      setCurrentCripto(cripto)
      setLoadingModalCompra(true)
  }
  const [walletOpen, setWalletOpen] = useState(true);

  return (
    <>
      {loadingModalCompra ? <CardModalCompraDeCripto /> : null}
      {loadingModalVenda ? <CardModalVendaDeCripto /> : null}
      <StyledMain>
        <StyledHeader>
          <img src={Logo} alt="CrypBayLogo" className="logo" />
          <div>
            <img src={Emanuel} alt="emanuel" />
            <div>
              <span>Emanuel Spitzner</span>
              <button>Editar</button>
            </div>
            <button>Sair</button>
          </div>
        </StyledHeader>
        <StyledWrapper>
          <StyledAside>
            <StyledTotalDiv>
              <h2>Investimento Total</h2>
              <span>R$ 5400,00</span>
            </StyledTotalDiv>
            <StyledDivAside onClick={() => setWalletOpen(true)}>
              <img src={Wallet} alt="Wallet" />
              <button>Carteira</button>
            </StyledDivAside>
            <StyledDivAside onClick={() => setWalletOpen(false)}>
              <img src={List} alt="History" />
              <button>Histórico</button>
            </StyledDivAside>
            <StyledDivAside>
              <img src={Coin} alt="AddCash" />
              <button>Adicionar Saldo</button>
            </StyledDivAside>
            <StyledDivAside>
              <img src={Bitcoin} alt="BuyCrypto" />
              <button onClick={() => setLoadingModalCompra(true)}>Comprar Crypto</button>
            </StyledDivAside>
            <StyledDivAside>
              <img src={Exchange} alt="SellCrypto" />
              <button onClick={() => setLoadingModalVenda(true)}>Vender Crypto</button>
            </StyledDivAside>
            <StyledDivAside>
              <img src={Cash} alt="WithdrawCash" />
              <button>Sacar Saldo</button>
            </StyledDivAside>
          </StyledAside>
          <StyledDiv>
          <StyledDashDiv>
            <div>
              <ul>
                {listCriptos.map((crypto) => (
                  <button onClick={() => handleCriptoAndModal(crypto.name)} key={crypto.id}>
                    <li>
                      <h1>{crypto.name}</h1>
                      <span>R$ {crypto.price}</span>
                    </li>
                  </button>
                ))}
              </ul>
            </div>
          </StyledDashDiv>
          {walletOpen ? <UserWallet/> : <UserHistory/>}
          </StyledDiv>
        </StyledWrapper>
      </StyledMain>
      <h2>dashboard</h2>
      <CardModalCompraDeCripto />
      {/* <CardModalVendaDeCripto /> */}
    </>
  );
};
