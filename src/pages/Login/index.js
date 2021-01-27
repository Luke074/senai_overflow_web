import { Container, FormLogin } from "./style";

function Login () {
    return(
        <Container>
            <FormLogin>
                <h1>Bem vindo ao Senai Overflow</h1>
                <label>Email:</label>
                <input type="text" />
                <label>Senha:</label>
                <input type="password" />
                <button>Entrar</button>
            </FormLogin>
        </Container>
    )
}

export default Login;