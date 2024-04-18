import { ComponentProps, useEffect} from "react";
import { Container } from "./timeline-styles";
import { useInView } from "react-intersection-observer";

interface IPropsTimeline extends ComponentProps<"div">{
    direction: "left" | "right"
    setView?: (inView: boolean) => void
    view: boolean | undefined
}

export function Timeline({direction, children, view, setView, ...rest}: IPropsTimeline) {
    const { ref: myRef, inView} = useInView()

    useEffect(() => {
        if(setView) {
            setView(inView)
        }
    })

    return(
        <Container $view={view} direction={direction} {...rest}>
            <p ref={myRef}>
                {children}
            </p>
        </Container>
    )
}