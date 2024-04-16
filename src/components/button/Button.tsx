import { Container } from "./button-styles";
import { ComponentProps } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

interface IPropsButton extends ComponentProps<"button"> {

}

export function Button(props: IPropsButton) {
    return(
        <Container {...props}>
            <FaRegArrowAltCircleRight size={20}  />

            <span>Quero me cadastrar</span>
        </Container>
    )
}