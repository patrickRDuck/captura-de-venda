import { ComponentProps } from "react";
import { Container } from "./enumerated-topic-styles";

interface IEnumaretedTopicProps extends ComponentProps<"div"> {
    number: number
    title: string
    itens: string[]
}

export function EnumeratedTopic({number, title, itens, ...rest}: IEnumaretedTopicProps) {
    return (
        <Container {...rest}>
            <div>
                <strong>{number.toString()}</strong>
            </div>

            <div>   
                <strong>{title}</strong>

                <ol>
                    {
                        itens.map((item) => (
                            <li>{item}</li>
                        ))
                    }
                </ol>
            </div>
        </Container>
    )
}