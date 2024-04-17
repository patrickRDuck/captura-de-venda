import { Button } from "../../components/button/Button";
import { Countdown } from "../../components/countdown/Countdown";
import { Section } from "../../components/section/Section";
import { Container } from "./app-styles";

export function App() {
  return (
    <Container>
      <Countdown />
      <Section>
        <div>
          <h1>RC30K</h1>

          <h2>
            Domine a Arte da Representação Comercial e Venda Mais!<br />
          </h2>
        </div>
          
        <Button />
      </Section>
    </Container>
  )
}
