import { ProfileContainer, Container, Header, Content, FeedContainer, ActionsContainer, QuestionCard, Logo, InconSingOut } from "../Home/style";

import fotoPerfil from "../../assets/foto_perfil.png";
import logo from "../../assets/logo.png";
import { FaSignOutAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { singOut, getUser } from "../../services/security";
import { useHistory } from "react-router-dom";


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

function Answers({ answers }) {
    return (
        <section>
            <header>
                <img src={fotoPerfil} alt="fotoPerfil" />
                <strong>Por {answers.Student.name}</strong>
                <p> em {answers.created_at}</p>
            </header>
            <p>{answers.description}</p>
        </section>
    );
}

function Question({ question }) {

    const [showAnswers, setShowAnswers] = useState();

    const [newAnswers, setNewAnswers] = useState(question.Answers);

    const [answers, setAnswers] = useState({
        description: "",
    });

    const handleSubmit = async (a) => {
        a.preventDefault();

        if(answers.length > 10)
            return alert("A resposta deve ter no minimo 10 caracteres");

        try {
            const response = await api.post(`/questions/${question.id}/answers`, answers);

            const aluno = getUser();

            const answersAdded = {
                id: response.data.id,
                description: answers,
                created_at: response.data.createdAt,
                Student: {
                    id: aluno.studentId,
                    name: aluno.name,
                },
            }

            setNewAnswers([...newAnswers, answersAdded]);

        } catch (error) {
            console.error(error);
            alert(error.response.data.error);
        }
    }
    const handleInsert = (a) => {
        setAnswers({ ...answers, description: a.target.value });
    }

    const qntdAnswers = newAnswers.length;
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
                <h1 onClick={() => setShowAnswers(!showAnswers)}>
                    {qntdAnswers === 0 ? (
                        "Seja o primeiro a Responder"
                    ) : (
                            <>
                                {qntdAnswers}
                                {qntdAnswers > 1 ? " Respostas" : " Resposta"}
                            </>

                        )}
                </h1>
                {showAnswers && (
                    <>
                        {newAnswers.map((a) => (<Answers answers={a} />))}
                    </>
                )}
                <form onSubmit={handleSubmit}>
                    <textarea
                        placeholder="Responda essa duvida"
                        minLength="10"
                        rows="2"
                        value={answers.description}
                        onChange={handleInsert}
                        required
                    >
                    </textarea>
                    <button>Enviar</button>
                </form>

            </footer>
        </QuestionCard>
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