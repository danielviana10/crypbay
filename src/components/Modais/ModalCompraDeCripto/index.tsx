import { useState, useContext } from "react";
import { StyledCardModalCompraDeCripto } from "./style";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  Button,
} from "@chakra-ui/react";
import { UserContext } from "../../../providers/userContext";

export const CardModalCompraDeCripto = () => {
  const [inputValue, setInputValue] = useState("");
  const [amountCript, setAmountCript] = useState("");
  const { listCriptos,  loadingModalCompra, setLoadingModalCompra, currentCripto} = useContext(UserContext);
  const [selectValue, setSelectValue] = useState(currentCripto);

  const selectCripto = listCriptos.find(
    (cripto) => cripto.name === selectValue
  );

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectValue(value);

    setInputValue("");
    setAmountCript("");
  };

  const handleInputValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    if (selectCripto) {
      const formulaInputValue = +value / selectCripto?.price;
      setAmountCript(String(formulaInputValue));
    }
    setInputValue(value);
  };

  const handleInputAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setAmountCript(value);
    if (selectCripto) {
      const formula = +value * selectCripto?.price;
      setInputValue(String(formula));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(selectValue);
  };
  return (
    <StyledCardModalCompraDeCripto >
      <div role="dialog" className={loadingModalCompra ? "dialog" : "hidden"}>
        <div className="modalContainer">
            <Button onClick={() => setLoadingModalCompra(false)} className="fecharModal" type="button">X</Button>
          <h1>Crybay compra</h1>
          <form onSubmit={handleSubmit}>
            <VStack spacing={1} align="stretch">
              <FormLabel>Quatidade de criptos</FormLabel>
              <Input
                className="input"
                type="number"
                value={amountCript}
                onChange={handleInputAmountChange}
              />
              <FormLabel>Valor total R$: </FormLabel>
              <Input
                className="input"
                type="number"
                value={inputValue}
                onChange={handleInputValueChange}
              />
              <FormControl className="formSelect">
                <FormLabel>Selecione a moeda</FormLabel>
                <Select onChange={handleSelectChange}>
                    <option>{currentCripto}</option>
                  {listCriptos.map((cripto) => (
                    <option value={cripto.name} key={cripto.id}>
                      {cripto.name}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <Button type="submit">Comprar</Button>
            </VStack>
          </form>
        </div>
      </div>
    </StyledCardModalCompraDeCripto>
  );
};
