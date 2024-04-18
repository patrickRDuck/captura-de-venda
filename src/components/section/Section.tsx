import { ComponentProps } from "react";
import { Container } from "./section-style";

interface IPropsSection extends ComponentProps<"div"> {
    background_orange?: "true"
    notborder?: "true"
}

export function Section({background_orange, notborder, children}: IPropsSection) {
    return (
        <Container notborder={notborder} background_orange={background_orange}>
            {children}
        </Container>
    )
}