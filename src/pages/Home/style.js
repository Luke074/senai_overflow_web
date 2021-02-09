import styled from "styled-components";
import { FaSignOutAlt} from "react-icons/fa";

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
    justify-content: space-between;

    background-color: var(--primary);
    border-bottom: 1px solid var(--darkGray);

    box-shadow: 0px 1px 5px var(--light);
`;
export const Content = styled.div`
    width: 1300px;
    padding-top: 60px;

    display: grid;
    grid-template-columns: 20% 60% 20%;
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
    a {
        color: white;
        text-align: center;
    }
`;

export const FeedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    padding: 10px 0px;
    overflow-y: auto;
`;

export const ActionsContainer = styled.div`
    margin-top: 15px;

    text-align: center;
`;

export const QuestionCard = styled.article`

    width: 80%;
    margin-top: 5px;
    padding: 10px;

    background-color: var(--darkGray);
    border-radius: 4px;

    > header {
        display: flex;
        align-items: center;
        gap: 10px;

        img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }

    > section{
        display: flex;
        flex-direction: column;

        > strong{
            margin-top: 5px;
            font-size: 18px;
        }
        > p{
            font-size: 14px;
            padding: 10px 5px;
            margin: 5px 0px;

            border-left: 2px solid var(--primary);
        }

        > img{
            max-width: 80%;
            border-radius: 3px;
            align-self: center;
        }
    }

    > footer {
        margin-top: 5px;

        > h1 {
            font-size: 17px;
            font-weight: bold;
            cursor: pointer;
            transition: 0.3s;

            :hover{
                color: var(--primary);
            }
        }
        
        > section {
            margin-top: 10px;
            border-radius: 4px;
            padding: 5px;

            background-color: var(--dark);

            > header {
                display: flex;
                align-items: center;
                gap: 10px;

                
                > img {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                }
            }
            >P {
                margin-top: 5px;
                width: 100%;
                padding: 10px 5px;

                border-left: 2px solid var(--primary);
            }
        }
        > form{
            width: 100%;
            margin-top: 5px;

            display: flex;
            gap: 5px;

            >textarea{
                flex: 1;
                padding: 5px;
                font-weight: bold;

                resize: none;
            }
        }
    }
`;

export const Logo = styled.img`
    width: 60px;
    height: 60px;

    margin: 20px;
    margin-top: 40px;
    border-radius: 25%;
    border: 2px solid var(--dark);

    box-shadow: 0px 0px 5px var(--dark);
    cursor: pointer;
    transition: 0.5s;

    :hover{
        transition: scale(1.1);
        box-shadow: 0px 0px 10px var(--dark);
    }
`;

export const IconSignOut = styled(FaSignOutAlt)`
    font-size: 30px;
    margin-right: 20px;

    cursor: pointer;
    transition: 0.4s;

    :hover{
        color: var(--dark);

    }
`;
