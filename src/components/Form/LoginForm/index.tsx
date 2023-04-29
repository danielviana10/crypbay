import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod";

export const LoginForm = () => {
    
    const [loading, setLoading] = useState();
    const {register, handleSubmit, formState: {errors},
} = useForm({zodResolver(loginFormSchema)})
    return()
}