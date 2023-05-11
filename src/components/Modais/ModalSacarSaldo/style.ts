import styled from "styled-components";
// import { AnimationFadeIn } from "../../../styles/animations";

export const StyledCardModalSacarCripto = styled.div`

.dialog{
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  background: rgba(0, 0, 0, 0.3);
  z-index: 1001;

.modalContainer{
  position: relative;
    width: 100%;
    max-width: 300px;
    background-color: white;
    background-color: #373B59;
    color: #FFFFFFFF;
    padding: 1rem;
  .fecharModal{
  position: absolute;
  color: white;
  background-color: transparent;
  right: 0rem;
  top: 1rem;
  border: none;
}
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
.show{
  display: flex;
}
.hidden{
  display: none;
}
`;