import { ComponentProps } from "react";
import { Container } from "./section-style";

interface IPropsSection extends ComponentProps<"div"> {
    background_black?: "true"
    notborder?: "true"
}

export function Section({background_black, notborder, children}: IPropsSection) {
    return (
        <Container notborder={notborder} background_black={background_black}>
            {children}
        </Container>
    )
}