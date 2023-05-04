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
    width: 100%;
    max-width: 500px;
    background-color: white;
    margin-top: 5rem;
    background-color: #FFFFFFFF;
    color: black;
}
form{
  margin: 1rem;
}
.input{
  border: 1px solid black;
  padding: 1rem;
  width: auto;
  box-sizing: border-box;
};
.formSelect{
  width: auto;
  select{
    border: 1px solid black;
  }
}
`;