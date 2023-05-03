import styled from "styled-components";

export const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    border: 0px;
    padding: 0px;
    margin: 0px;
`

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #050A30;
    border-bottom: 1px solid #050A30;

    img{
        width: 250px;
        height: 110px;
        padding-left: 15px;
    }

    div{
        display: flex;
        flex-direction: row;
        gap: 15px;
        padding-right: 15px;
        align-items: center;

        button{
            width: 120px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            background-color: #FFDB15;
            border: 1px solid #FFDB15;
            border-radius: 10px;
        }
    }
`

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #373B59;
    height: 100vh;
    justify-content: center;
    align-items: center;
    gap: 150px;
`

export const StyledDivApresentation = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 480px;
    gap: 10px;


    p{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 27px;
        line-height: 33px;
        color: #FFFFFF;
        text-align: justify;
    }

    div{
        display: flex;
        flex-direction: row;
        gap: 5px;

        img{
            width: 75px;
            height: 75px;
            border-radius: 200px;
        }
    }
`

export const StyledImgDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    img{
        width: 650px;
        height: 500px;
        border-radius: 20px;
    }
`