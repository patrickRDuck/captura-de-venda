import { useState } from "react";
import { Button } from "../../components/button/Button";
import { Section } from "../../components/section/Section";
import { Timeline } from "../../components/timeline/Timeline";
import { Container } from "./app-styles";
import { Input } from "../../components/input/Input";
import { Forms } from "../../components/forms/Forms";
import { Footer } from "../../components/footer/Footer";
import logo from "../../assets/nome-logo.png"
import { EnumeratedTopic } from "../../components/enumerated-topic/Enumerated-topic";

export function App() {
  const [inView, setInView] = useState<boolean>()
  const [inView2, setInView2] = useState<boolean>()
  const [inView3, setInView3] = useState<boolean>()
  const [inView4, setInView4] = useState<boolean>()

  return (
    <Container>
      <Section>
        <div>
          <div>
            <h1>R<span>C3</span>0K</h1>
            <img src={logo} alt="" />
          </div>

          <h2>
            Domine a Arte da Representação Comercial e Venda Mais!<br />
          </h2>
        </div>
          
        <Button />
      </Section>

      <Section background_black="true">
        <strong>Como funciona a mentoria RC30K</strong>

        <div>
          <EnumeratedTopic 
           number={1}
           title="Desenvolvimento de mentalidade"
           itens={["Mudança de mentalidade", "Roda da vida", "Propósito e missão de vida", "V20"]}
          />

          <EnumeratedTopic 
           number={2}
           title="Despertando seu representante"
           itens={["Vida pessoal X profissional", "Alcançando metas", "O poder da disciplina", "Construindo hábitos", "Coragem"]}
          />
          
          <EnumeratedTopic 
           number={3}
           title="Vender em alta perfomance"
           itens={["Mentalidade de sucesso", "A arte das vendas", "Criando parceiros", "Funil de vendas", "Gestão de vendas", "Pós-venda"]}
          />
        </div>
      </Section>

      <Section>
        <Timeline view={inView} setView={setInView} direction="left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae iste atque dolores eius quaerat consequatur debitis molestias numquam totam, nihil dolor odio repellat amet, voluptatem soluta repudiandae in. Iure, saepe! 
        </Timeline>

        <Timeline view={inView2} setView={setInView2} direction="right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eum doloremque quaerat necessitatibus quod sunt deserunt dolorum ipsum alias fugiat reprehenderit nulla repellat assumenda amet, ut non accusantium rem qui.
        </Timeline>

        <Timeline view={inView3} setView={setInView3} direction="left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eum doloremque quaerat necessitatibus quod sunt deserunt dolorum ipsum alias fugiat reprehenderit nulla repellat assumenda amet, ut non accusantium rem qui.
        </Timeline>

        <Timeline view={inView4} setView={setInView4} direction="right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eum doloremque quaerat necessitatibus quod sunt deserunt dolorum ipsum alias fugiat reprehenderit nulla repellat assumenda amet, ut non accusantium rem qui.
        </Timeline>
      </Section>

      <Section notborder="true">
        <div>

          <div>
            <strong>
              Cadastre-se<br />agora!
            </strong>
            <p>Mentoria ao vivo e online</p>
          </div>

          <Forms>
            <Input placeholder="Insira seu nome"/>
            <Input placeholder="Insira seu E-mail"/>
            <Input placeholder="Telefone"/>

            <Button dark="true" />
          </Forms>
        </div>

        <Footer />
      </Section>
    </Container>
  )
}
