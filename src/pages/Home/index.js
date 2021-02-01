import { ProfileContainer, Container, Header, Content, FeedContainer, ActionsContainer, QuestionCard, Logo, InconSingOut } from "../Home/style";

import fotoPerfil from "../../assets/foto_perfil.png";
import logo from "../../assets/logo.png";
import { FaSignOutAlt } from "react-icons/fa";

function Profile() {
    return (
        <>
            <section>
                <img src={fotoPerfil}/>
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
    return (
        <Container>
            <Header>
                <Logo src={logo}/>
                <InconSingOut src={FaSignOutAlt} />
            </Header>
            <Content>
                <ProfileContainer>
                    <Profile />
                </ProfileContainer>
                <FeedContainer>
                    <QuestionCard>
                        <header>
                            <img src={fotoPerfil}/>
                            <strong>pro Luke Master abobrinha</strong>
                            <p>em 19/03/2021 as 20:00</p>
                        </header>
                        <section>
                            <strong>Titulo</strong>
                            <p>Descricao</p>
                            <img src="https://pbs.twimg.com/media/EddX1AIXYAA5bJx?format=jpg&name=4096x4096"/>
                        </section>
                        <footer>
                            <h1> 11 respostas</h1>
                            <section>
                                <header>
                                    <img src={fotoPerfil}/>
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
                    <QuestionCard>
                        <header>
                            <img src={fotoPerfil}/>
                            <strong>pro Luke Master abobrinha</strong>
                            <p>em 19/03/2021 as 20:00</p>
                        </header>
                        <section>
                            <strong>Titulo</strong>
                            <p>Descricao</p>
                            <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_27.jpg"/>
                        </section>
                        <footer>
                            <h1> 11 respostas</h1>
                            <section>
                                <header>
                                    <img src={fotoPerfil}/>
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
                </FeedContainer>
                <ActionsContainer>
                    <button>Fazer uma pergunta</button>
                </ActionsContainer>
            </Content>
        </Container>
    );
}

export default Home;