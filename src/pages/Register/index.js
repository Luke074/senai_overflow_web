import { Container, FormLogin, Header, Body, Button } from "./style";
import Input from "../../components/input";
import { Link, useHistory } from "react-router-dom";

import api from "../../services/api"
import { useState } from "react";
import Loading from "../../components/Loading";

function Register() {
    const history = useHistory();

    const [showLoading, setShowLoading] = useState();

    const [register, setRegister] = useState({
        ra: "",
        name: "",
        email: "",
        password: "",
        validPassword: "",
    });

    const handleInsert = async (e) => {
        e.preventDefault();

        try {
            setShowLoading(true);
            
            if (register.password !== register.validPassword)
                return alert("as senhas não são compativeis!");

            const response = await api.post("/students", {
                ra: register.ra,
                name: register.name,
                email: register.email,
                password: register.password,
            });


            console.log(response.data);
            history.push("/home");
        } catch (error) {
            setShowLoading(false);
            console.error(error);
            alert(error.response.data.error);
        }
    }

    const handleRegister = (e) => {
        setRegister({ ...register, [e.target.id]: e.target.value });
    }


    return (
        <>
            {showLoading && (
                <Loading />
            )}
            <Container>
                <FormLogin onSubmit={handleInsert}>
                    <Header>
                        <h1>Bem vindo ao Senai Overflow</h1>
                        <h2>informe o seus dados</h2>
                    </Header>
                    <Body>
                        <Input id="ra" label="ra" type="text" handler={handleRegister} value={register.ra} />
                        <Input id="name" label="nome" type="text" handler={handleRegister} value={register.name} />
                        <Input id="email" label="email" type="email" handler={handleRegister} value={register.email} />
                        <Input id="password" label="senha" type="password" handler={handleRegister} value={register.password} />
                        <Input id="validPassword" label="Confirmar Senha" type="password" handler={handleRegister} value={register.validPassword} />
                        <Button
                            disabled={
                                !register.ra ||
                                !register.name ||
                                !register.email ||
                                !register.password ||
                                !register.validPassword ||
                                register.password !== register.validPassword
                            }
                        >
                            Registrar
                    </Button>
                        <Link to="/">Ou, se ja tem cadastro, cique para entrar</Link>
                    </Body>
                </FormLogin>
            </Container>
        </>
    )
}

export default Register;