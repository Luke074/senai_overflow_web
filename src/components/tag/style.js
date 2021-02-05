import styled from "styled-components";

export const Container = styled.article`
  width: fit-content;
  padding: 2px 10px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  border-radius: 4px;
  background-color: var(--darkGray);

  margin: 0px 10px 10px 0px;


  >span{
    margin-left: 10px;
    cursor: pointer;
    font-size: 20px;
    transition: 0.3s;

    :hover {
      color: var(--primary);
    }
  }
`;
