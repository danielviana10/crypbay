import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod";
import { TLoginFormValues, loginFormSchema } from "./loginFormSchema";

export const LoginForm = () => {
    
    const [loading, setLoading] = useState();
    const {register, handleSubmit, formState: {errors},
} = useForm<TLoginFormValues>({resolver: zodResolver(loginFormSchema)})
    return(
        <form>
            <input type="text" />
        </form>
    )
}

