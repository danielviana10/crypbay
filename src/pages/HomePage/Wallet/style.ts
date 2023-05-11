import styled from "styled-components";

export const StyledWalletWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;

    ul{
        display: flex;
        flex-direction: column;
        width: 600px;
        gap: 8px;

        li{
            width: 500px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 10px;
            align-items: center;
            height: 30px;
            border: 2px solid #FFDB15;
            background-color: #FFFFFF;
            border-radius: 10px;
        }
    }
`