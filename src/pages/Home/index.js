import { ProfileContainer, Container, Header, Content, FeedContainer, ActionsContainer, QuestionCard, Logo, InconSingOut } from "../Home/style";

import fotoPerfil from "../../assets/foto_perfil.png";
import logo from "../../assets/logo.png";
import { FaSignOutAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { singOut } from "../../services/security";
import { useHistory } from "react-router-dom";

function Question({ question }) {
    return (
        <QuestionCard>
            <header>
                <img src={fotoPerfil} alt="fotoPerfil" />
                <strong>pro {question.Student.name}</strong>
                <p>em {question.created_at}</p>
            </header>
            <section>
                <strong>{question.title}</strong>
                <p>{question.description}</p>
                <img src={question.image} />
            </section>
            <footer>
                <h1> 11 respostas</h1>
                <section>
                    <header>
                        <img src={fotoPerfil} alt="fotoPerfil" />
                        <strong>Por fulano</strong>
                        <p> 12/12/2012 as 12:12</p>
                    </header>
                    <p>Respostas para a pergunta</p>
                </section>
                <form>
                    <textarea placeholder="Responda essa duvida" rows="2" required></textarea>
                    <button>Enviar</button>
                </form>

            </footer>
        </QuestionCard>
    );
}

function Profile() {
    return (
        <>
            <section>
                <img src={fotoPerfil} alt="fotoPerfil" />
                <a href="" >Editar Foto </a>
            </section>
            <section>
                <strong>Nome:</strong>
                <p>Luke Master abobrinha</p>
            </section>
            <section>
                <strong>RA:</strong>
                <p>1234567</p>
            </section>
            <section>
                <strong>Emai:</strong>
                <p>lukeabobrinha@senai.com</p>
            </section>
        </>
    );
}

function Home() {
    const history = useHistory();

    const [question, setQuestion] = useState([]);

    useEffect(() => {
        const loadQuestion = async () => {
            const response = await api.get("/feed");

            setQuestion(response.data);
        }
        loadQuestion();

    }, []);

    const handleSingOut = () => {
        singOut();

        history.replace("/");
    }

    return (
        <Container>
            <Header>
                <Logo src={logo} />
                <InconSingOut onClick={handleSingOut} />
            </Header>
            <Content>
                <ProfileContainer>
                    <Profile />
                </ProfileContainer>
                <FeedContainer>
                    {question.map((q) => (<Question question={q} />))}
                </FeedContainer>
                <ActionsContainer>
                    <button>Fazer uma pergunta</button>
                </ActionsContainer>
            </Content>
        </Container>
    );
}

export default Home;