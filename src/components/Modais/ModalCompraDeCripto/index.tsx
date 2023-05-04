import { useState } from "react";
import { StyledCardModalCompraDeCripto } from "./style"
import {
    FormControl, FormLabel,
    Input, Select, VStack, Button
} from '@chakra-ui/react';
import { string } from "zod";


interface ILoading {
    loading: string,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}
interface ICripto {
    id: number,
    title: string,
    price: number
}

const listCriptos: ICripto[] = [
    {
        id: 1,
        title: "bitcoin",
        price: 10
    },
    {
        id: 2,
        title: "Ethereum",
        price: 5
    },
    {
        id: 3,
        title: "Litecoin",
        price: 2
    }
]

export const CardModalCompraDeCripto = () => {
    const [loading, setLoading] = useState(true);
    const [selectValue, setSelectValue] = useState(listCriptos[0].title);
    const [inputValue, setInputValue] = useState("");
    const [amountCript, setAmountCript] = useState("");

    const handleSelectChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setSelectValue(event.target.value);
        setInputValue('');
        setAmountCript('');
    };
    
    const currentCripto = listCriptos.find(cripto => cripto.title === selectValue) as ICripto;
    const handleInputValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
        const formula = +value/currentCripto?.price;
        setAmountCript(String(formula));
    };

    const handleInputAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setAmountCript(value);
        const formula = +value*currentCripto?.price;
        setInputValue(String(formula));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(selectValue);
    };
    return (
        <StyledCardModalCompraDeCripto className={loading ? "show" : "hidden"}>
            <div className="dialog" role="dialog">
                <div>
                    <form onSubmit={handleSubmit}>
                        <VStack spacing={4} align="stretch">
                            <FormLabel>Quatidade de criptos</FormLabel>
                            <Input className="input"
                                type="number"
                                value={amountCript}
                                onChange={handleInputAmountChange}
                            />
                            <FormLabel>Valor total R$: </FormLabel>
                            <Input className="input"
                                type="number"
                                value={inputValue}
                                onChange={handleInputValueChange}
                            />
                            <FormControl className="formSelect">
                                <FormLabel>Selecione a moeda</FormLabel>
                                <Select onChange={handleSelectChange}>
                                    {listCriptos.map((cripto) => (
                                        <option value={cripto.title} key={cripto.id}>
                                            {cripto.title}
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