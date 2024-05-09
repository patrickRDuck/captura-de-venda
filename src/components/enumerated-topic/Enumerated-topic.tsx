import { ComponentProps } from "react";
import { Container, Li } from "./enumerated-topic-styles";
import { useInView } from "react-intersection-observer";

interface IEnumaretedTopicProps extends ComponentProps<"div"> {
    number: number
    title: string
    itens: string[]
}

export function EnumeratedTopic({number, title, itens, ...rest}: IEnumaretedTopicProps) {
    const { ref: myRef, inView} = useInView()

    return (
        <Container {...rest}>
            <div>
                <strong>{number.toString()}</strong>
            </div>

            <div>   
                <strong>{title}</strong>

                <ol>
                    {
                        itens.map((item, index) => (
                            <Li 
                             ref={myRef}
                             key={index}
                             delay={index}
                             $inView={inView}
                            >
                                {item}
                            </Li>
                        ))
                    }
                </ol>
            </div>
        </Container>
    )
}