import { Container } from "./footer-styles";

export function Footer() {
    return(
        <Container>
            <div>
                <p>Copyright © 2023 Sandra Barbosa - Todos os direitos<br/>reservados.</p>
                <p>CNPJ: 00.000.000/0000-79. Este site não pertence a Meta, e nem suas empresas parceiras</p>
            </div>

            <div>
                <a href="#">Termos de uso</a>
                <a href="#">Política de privacidade</a>
            </div>
        </Container>
    )
}