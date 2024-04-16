import { Button } from "../../components/button/Button";
import { Countdown } from "../../components/countdown/Countdown";
import { Section } from "../../components/section/Section";
import { Container } from "./app-styles";

export function App() {
  return (
    <Container>
      <Countdown />
      <Section>

        <h1>O curso</h1>

        <h2>
            Texto introdutório sobre o curso deve ser inserido aqui
        </h2>

        <Button />
      </Section>
    </Container>
  )
}
