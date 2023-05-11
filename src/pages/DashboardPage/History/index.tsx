import React from 'react'
import { StyledHistoryWrapper } from './style'

const UserHistory = () => {
  return (
    <StyledHistoryWrapper>
        <ul>
            <li>
                <h2>
                    BRL
                </h2>
                <span>
                    Tipo
                </span>
                <span>
                    Quantidade
                </span>
                <span>
                    Total
                </span>
            </li>
        </ul>
    </StyledHistoryWrapper>
  )
}

export default UserHistory