import styled from "styled-components";
// import { AnimationFadeIn } from "../../../styles/animations";

export const StyledCardModalCompraDeCripto = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  background: rgba(51, 51, 51, 0.5);
  z-index: 1001;
.show{
  display: flex;
}
.hidden{
  display: none;
}
.dialog{
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
 
    width: 100%;
    max-width: 300px;
    background-color: white;
    background-color: #373B59;
    color: #FFFFFFFF;
    
.modalContainer{
  h1{
      font-size: 20px;
      margin: 3rem 0rem 3rem;
    }
    margin: 1.4rem;
  form{
  /* display: flex; */
  /* margin: 1rem; */
  width: 100%;
  label{
    margin-top: 1rem;
  }
  .input{
  border: 1px solid black;
  padding: 1rem;
  width: auto;
  box-sizing: border-box;
  background-color: #FFFFFFFF;
  color: #000000;
  
};
.formSelect{
  width: auto;
  select{
    border: 1px solid #FFFFFFFF;
    
    color: #FFFFFFFF;
    
      appearance: inherit;
    
    option{
      background-color: #FFFFFFFF;
      color: #000000;
    }
  }
}
  button{
    background-color: coral;
    color: #000000;
    margin: 1.4rem 0rem;
  }
}
}
}
`;