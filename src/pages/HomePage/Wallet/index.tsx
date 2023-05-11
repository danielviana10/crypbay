import React, { useContext } from 'react'
import { StyledWalletWrapper } from './style'
import { UserContext } from '../../../providers/userContext'

const UserWallet = () => {
  
    const { user } = useContext (UserContext);

    return (
    <StyledWalletWrapper>
        <ul>
            <li>
                <h2>
                    BRL
                </h2>
                <span>
                    Quantidade
                </span>
                <p>
                    Total
                </p>
            </li>
            <li>
                <h2>
                    BitCoin
                </h2>
                <span>
                    Quantidade
                </span>
                <p>
                    Total
                </p>
            </li>
            <li>
                <h2>
                    Ethereum
                </h2>
                <span>
                    Quantidade
                </span>
                <p>
                    Total
                </p>
            </li>
            <li>
                <h2>
                    Litecoin
                </h2>
                <span>
                    Quantidade
                </span>
                <p>
                    Total
                </p>
            </li>
            <li>
                <h2>
                    Cardano
                </h2>
                <span>
                    Quantidade
                </span>
                <p>
                    Total
                </p>
            </li>
            <li>
                <h2>
                    Avalanche
                </h2>
                <span>
                    Quantidade
                </span>
                <p>
                    Total
                </p>
            </li>
            <li>
                <h2>
                    Hedera
                </h2>
                <span>
                    Quantidade
                </span>
                <p>
                    Total
                </p>
            </li>
            <li>
                <h2>
                    Chiliz
                </h2>
                <span>
                    Quantidade
                </span>
                <p>
                    Total
                </p>
            </li>
            <li>
                <h2>
                    USD
                </h2>
                <span>
                    Quantidade
                </span>
                <p>
                    Total
                </p>
            </li>
            <li>
                <h2>
                    Smoothe
                </h2>
                <span>
                    Quantidade
                </span>
                <p>
                    Total
                </p>
            </li>
            <li>
                <h2>
                    EOS
                </h2>
                <span>
                    Quantidade
                </span>
                <p>
                    Total
                </p>
            </li>
        </ul>
    </StyledWalletWrapper>
  )
}

export default UserWallet



