import styled from "styled-components";

export const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`

export const StyledHeader = styled.header`
    display: flex;
    width: 100%;
    height: 100px;
    background-color: #050A30;
    justify-content: space-between;
    align-items: center;
    padding: 40px;

    .logo{
        width: 230px;
        height: 100px;
    }

    div{
        display: flex;
        flex-direction: row;
        gap: 15px;
        align-items: center;
        justify-content: center;
        
        img{
            width: 50px;
            height: 50px;
            border-radius: 200px;
        }
        span{
            font-family: 'Inter', sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 33px;
                color: #FFFFFF;
                text-align: justify;
        }
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
    width: 100vw;
    height: 100vh;
    background-color:  #03061C;
    justify-content: space-between;

`

export const StyledAside = styled.aside`
    display: flex;
    flex-direction: column;
    width: 250px;
    align-items: center;
    padding: 30px;
    gap: 20px;
`

export const StyledTotalDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 80px;
    background-color: #FFDB15;
    border: 1px solid #FFDB15;
    border-radius: 10px;

    h2{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 33px;
        color: #03061C;
        text-align: justify;
    }

    span{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 33px;
        color: #03061C;
        text-align: justify;
    }
`

export const StyledDivAside = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 105%;
    height: 40px;
    align-items: center;
    background-color: #FFDB15;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;

`

export const StyledDashDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    ul{
        display: flex;
        flex-direction: row;
        gap: 20px;
        padding-top: 30px;
        width: 100%;
        flex-wrap: wrap;


        li{
            display: flex;
            flex-direction: column;
            background-color: #FFFFFF;
            width: 100px;
            align-items: center;
            border-radius: 10px;

            h1{
                font-family: 'Inter', sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 12px;
                line-height: 33px;
                color: #03061C;
                text-align: justify;
            }

            span{
                font-family: 'Inter', sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 12px;
                line-height: 33px;
                color: #03061C;
                text-align: justify;
            }
        }
    }
`

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
`