import { ComponentProps } from "react";
import { Container } from "./section-style";

interface IPropsSection extends ComponentProps<"div"> {

}

export function Section(props: IPropsSection) {
    return (
        <Container>
            {props.children && props.children}
        </Container>
    )
}