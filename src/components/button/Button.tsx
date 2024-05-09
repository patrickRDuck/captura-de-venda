import { Container } from "./button-styles";
import { ComponentProps } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

interface IPropsButton extends ComponentProps<"button"> {
    dark?: "true"
}

export function Button({dark, ...props}: IPropsButton) {
    return(
        <Container dark={dark} {...props}>
            <FaRegArrowAltCircleRight size={29}  />

            Quero me cadastrar
        </Container>
    )
}