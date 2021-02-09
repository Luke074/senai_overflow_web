import { Container, FormLogin, Header, Body, Button } from "./style";
import Input from "../../components/input";
import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";
import { useState } from "react";
import { signIn } from "../../services/security";
import Loading from "../../components/Loading";
import Alert from "../../components/Alert";

function Login() {
    const history = useHistory();

    const [message, setMessage] = useState(undefined);

    const [showLoading, setShowLoading] = useState();

    const [login, setLogin] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setShowLoading(true);
            const response = await api.post("/sessions", login);

            //implementar a authorização
            signIn(response.data);
            history.push("/home");
        } catch (error) {
            console.error(error);
            setMessage({title: "Ops...",description: error.response.data.error});
            setShowLoading(false);
        }

    }

    const handleInput = (e) => {
        setLogin({ ...login, [e.target.id]: e.target.value });
    }

    return (
        <>
            <Alert 
                message={message}
                type="error"
                handleClose={setMessage}
            />
            {showLoading && <Loading />}
            <Container>
                <FormLogin onSubmit={handleSubmit}>
                    <Header>
                        <h1>Bem vindo ao Senai Overflow</h1>
                        <h2>O seu portal de repostas</h2>
                    </Header>
                    <Body>
                        <Input id="email" label="email" type="email" value={login.email} handler={handleInput} required />
                        <Input id="password" label="senha" type="password" value={login.password} handler={handleInput} required />
                        <Button
                            disabled={
                                !login.email ||
                                !login.password
                            }
                        >Entrar</Button>
                        <Link to="/register">Ou clique aqui para se cadastrar</Link>
                    </Body>
                </FormLogin>
            </Container>
        </>
    )
}

export default Login;