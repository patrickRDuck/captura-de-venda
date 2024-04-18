import { ComponentProps } from "react";
import { Container } from "./input-styles";

interface IPropsInput extends ComponentProps<"input"> {

}

export function Input(props: IPropsInput) {
    return(
        <Container {...props}>
        </Container>
    )
}