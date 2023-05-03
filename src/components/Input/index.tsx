import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
  type: string;
}

const Input = forwardRef(
  (
    { label, error, type, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <div>
      <div>
        <input type={type} ref={ref} {...rest} />
        {label ? <label>{label}</label> : null}
      </div>
      {error ? <p>{error.message}</p> : null}
    </div>
  )
);

export default Input;
