import { Container, FormLogin, Header, Body, Button } from "./style";
import Input from "../../components/input";

function Login() {
    return (
        <Container>
            <FormLogin>
                <Header>
                    <h1>Bem vindo ao Senai Overflow</h1>
                    <h2>O seu portal de repostas</h2>
                </Header>
                <Body>
                    <Input id="email" label="email" type="email" alt="123" />
                    <Input id="password" label="senha" type="password" />
                    <Button>Entrar</Button>
                    <a href="#">Ou clique aqui para se cadastrar</a>
                </Body>
            </FormLogin>
        </Container>
    )
}

export default Login;