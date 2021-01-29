import { ProfileContainer, Container, Header, Content, FeedContainer, ActionsContainer, QuestionCard } from "../Home/style";

import fotoPerfil from "../../assets/foto_perfil.png"

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
                            <img src="https://i.pinimg.com/originals/7f/c3/15/7fc3151a6f3e6907885fddc31f30a30f.jpg"/>
                        </section>
                        <footer>
                            
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