import { ComponentProps } from "react";
import { Container } from "./section-style";

interface IPropsSection extends ComponentProps<"div"> {
    backgroundOrange?: boolean
}

export function Section({backgroundOrange = false, children}: IPropsSection) {
    return (
        <Container backgroundOrange={backgroundOrange}>
            {children}
        </Container>
    )
}