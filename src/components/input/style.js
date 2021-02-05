import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    position: relative;
    margin-top: 10px;

    > input {
        border: 0;
        padding-left: 10px;
        border-radius: 3px;

        font-family: sans-serif;
    }
    >label {
        position: absolute;
        top: 0px;
        left: 10px;
        display: flex;
        align-items: center;

        color: var(--darkGray);
        cursor: text;
    }
    > input, label {
        width: 100%;
        height: 30px;
        font-size: 16px; 
    }

    >input:not(:placeholder-shown) + label,
    >input:focus + label{
        color: var(--light);
        top: -25px;
        left: 5px;
        transition: 0.3s ease-in-out;
    }
`;