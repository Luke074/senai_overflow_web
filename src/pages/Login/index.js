import { Container, FormLogin, Header, Body, Button } from "./style";
import Input from "../../components/input";
import { Link, useHistory } from "react-router-dom";

function Login() {
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();

        history.push("/home");
    }


    return (
        <Container>
            <FormLogin onSubmit={handleSubmit}>
                <Header>
                    <h1>Bem vindo ao Senai Overflow</h1>
                    <h2>O seu portal de repostas</h2>
                </Header>
                <Body>
                    <Input id="email" label="email" type="email" alt="123" />
                    <Input id="password" label="senha" type="password" />
                    <Button>Entrar</Button>
                    <Link to="/register">Ou clique aqui para se cadastrar</Link>
                </Body>
            </FormLogin>
        </Container>
    )
}

export default Login;