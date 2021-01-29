import { Container, FormLogin, Header, Body, Button } from "./style";
import Input from "../../components/input";

function Register() {
    return (
        <Container>
            <FormLogin>
                <Header>
                    <h1>Bem vindo ao Senai Overflow</h1>
                    <h2>informe o seus dados</h2>
                </Header>
                <Body>
                    <Input id="ra" label="RA" type="text" />
                    <Input id="nome" label="Nome" type="text" />
                    <Input id="email" label="Email" type="email" />
                    <Input id="password" label="Senha" type="password" />
                    <Input id="valid-password" label="Confirmar Senha" type="password" />
                    <Button>Registrar</Button>
                    <a href="#">Ou, se ja tem cadastro, cique para entrar</a>
                </Body>
            </FormLogin>
        </Container>
    )
}

export default Register;