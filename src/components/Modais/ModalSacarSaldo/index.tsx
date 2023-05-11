import { useState, useContext } from "react";
import { StyledCardModalSacarCripto } from "./style";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  Button,
} from "@chakra-ui/react";
import { UserContext } from "../../../providers/userContext";

export const ModalSacarSaldo = () => {
  const [saqueCript, setSaqueCript] = useState("");
  const {loadingModalSacar, setLoadingModalSacar } =
    useContext(UserContext);

    const valueTotal = 999999;

  const handleInputSaqueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setSaqueCript(value);
    
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(saqueCript)
  };
  return (
    <StyledCardModalSacarCripto>
      <div role="dialog" className={loadingModalSacar ? "dialog" : "hidden"}>
        <div className="modalContainer">
          <Button
            onClick={() => setLoadingModalSacar(false)}
            className="fecharModal"
            type="button"
          >
            X
          </Button>
          <h1>Crybay venda</h1>
          <form onSubmit={handleSubmit}>
            <VStack spacing={1} align="stretch">
              <FormLabel>Valor total R$: </FormLabel>
              <Input
                className="input"
                type="number"
                value={valueTotal}
                onChange={() => null}
              />

              <FormLabel>Valor do saque</FormLabel>
              <Input
                className="input"
                type="number"
                placeholder="Digite o valor de saque"
                value={saqueCript}
                onChange={handleInputSaqueChange}
              />

              <Button type="submit">Sacar</Button>
            </VStack>
          </form>
        </div>
      </div>
    </StyledCardModalSacarCripto>
  );
};
