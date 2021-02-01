import { Container, FormLogin, Header, Body, Button } from "./style";
import Input from "../../components/input";
import { Link, useHistory } from "react-router-dom";

import api from "../../services/api"
import { useState } from "react";

function Register() {
    const history = useHistory();

    const [register, setRegister] = useState({
        ra: "",
        name: "",
        email: "",
        password: "",
    });

    const handleInsert = async (e) => {
        e.preventDefault();

        try {
            
            const response = await api.post("/students", register);
            console.log(response.date);

            history.push("/home");

        } catch (error) {
            console.error(error);
            alert(error.response.date.error);
        }

    }

    const handleRegister = (e) => {
        setRegister({ ...register, [e.target.id]: e.target.value });
    }


    return (
        <Container>
            <FormLogin onChange={handleInsert}>
                <Header>
                    <h1>Bem vindo ao Senai Overflow</h1>
                    <h2>informe o seus dados</h2>
                </Header>
                <Body>
                    <Input id="ra" label="RA" type="text" handler={handleRegister} />
                    <Input id="nome" label="Nome" type="text" handler={handleRegister}/>
                    <Input id="email" label="Email" type="email" handler={handleRegister}/>
                    <Input id="password" label="Senha" type="password" handler={handleRegister}/>
                    <Input id="valid-password" label="Confirmar Senha" type="password" handler={handleRegister}/>
                    <Button>Registrar</Button>
                    <Link to="/">Ou, se ja tem cadastro, cique para entrar</Link>
                </Body>
            </FormLogin>
        </Container>
    )
}

export default Register;