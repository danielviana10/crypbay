import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 310px;
    gap: 15px;
    background: #373B59;
    padding: 20px;
    border-radius: 5px;

    h1{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        line-height: 18px;
        color: #FFDB15;
        align-self: center;
    }

    input{
        width: 270px;
        height: 30px;
        border-radius: 10px;
        padding-left: 10px;
        border: 1px solid #FFDB15;
    }

    label{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        color: #FFDB15;
    }

    button{
        width: 270px;
        height: 40px;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        color: #000;
        background-color: #FFDB15;
    }
`
