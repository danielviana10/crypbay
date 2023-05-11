import { useState, useContext } from "react";
import { StyledCardModalAdicionarSaldoDeCripto } from "./style";
import {
  
  FormLabel,
  Input,
  VStack,
  Button,
} from "@chakra-ui/react";
import { UserContext } from "../../../providers/userContext";

export const ModalAdicionarSaldoCripto = () => {
  const [inputValue, setInputValue] = useState("");
  const { loadingModalAdicionarSaldo, setLoadingModalAdicionarSaldo } = useContext(UserContext);

    const handleInputValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(inputValue)
    };

    return (
        <StyledCardModalAdicionarSaldoDeCripto >
      <div role="dialog" className={loadingModalAdicionarSaldo ? "dialog" : "hidden"}>
        <div className="modalContainer">
            <Button onClick={() => setLoadingModalAdicionarSaldo(false)} className="fecharModal" type="button">X</Button>
            <h1>Crybay Adicionar Saldo</h1>
                    <form onSubmit={handleSubmit}>
                        <VStack spacing={1} align="stretch">
                            <FormLabel>Valor total R$: </FormLabel>
                            <Input className="input"
                                type="number"
                                value={inputValue}
                                onChange={handleInputValueChange}
                            />
                            <Button type="submit">Adicionar</Button>
                        </VStack>
                    </form>
        </div>
      </div>
    </StyledCardModalAdicionarSaldoDeCripto>
    );
};