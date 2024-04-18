import { ComponentProps } from "react";
import { Container } from "./forms-styles";

interface IPropsForms extends ComponentProps<"form"> {
}

export function Forms(props: IPropsForms) {
    return (
        <Container {...props}>

        </Container>
    )
}