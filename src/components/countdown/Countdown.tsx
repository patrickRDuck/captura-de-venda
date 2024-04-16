import { Container } from "./countdown-styles";

export function Countdown() {
    return(
        <Container>
            <div className="time">
                <strong>00</strong>
                <span>Dias</span>
            </div>
            <div className="time">
                <strong>00</strong>
                <span>Horas</span>
            </div>
            <div className="time">
                <strong>00</strong>
                <span>Minutos</span>
            </div>
            <div className="time">
                <strong>00</strong>
                <span>Segundos</span>
            </div>
        </Container>
    )
}