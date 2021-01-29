import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background: var(--dark);

    display: flex;
    justify-content: center; 
`;
export const Header = styled.header`
    position: fixed;

    width: 100%;
    height: 60px;

    display: flex;
    align-items: center;

    background-color: var(--primary);
    border-bottom: 1px solid var(--darkGray);

    box-shadow: 0px 1px 5px var(--light);
`;
export const Content = styled.div`
    width: 1300px;
    padding-top: 60px;

    display: grid;
    grid-template-columns: 20% 60% 20%;
    border: 1px solid white;
`;
export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 10px;

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
    }
    img {
        width: 30%;
        border-radius: 50%;
    }
`;

export const FeedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 10px;
`;

export const ActionsContainer = styled.div`
    margin-top: 15px;
`;

export const QuestionCard = styled.article`
    width: 80%;
    margin-top: 10px;
    padding: 10px;

    background-color: var(--darkGray);
    border-radius: 4px;

    header {
        display: flex;
        align-items: center;
        gap: 10px;

        img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }

    section{
        display: flex;
        flex-direction: column;

        > strong{
            font-size: 18px;
        }
        > p{
            font-size: 14px;
            padding: 10px 5px;

            border-left: 2px solid var(--primary);
        }

        > img{
            max-width: 100%;
            height: 450px;
            border-radius: 3px;
            align-self: center;
        }
    }
`;