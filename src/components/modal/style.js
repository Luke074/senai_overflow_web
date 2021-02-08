import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;

  width: 100vw;
  height: 100vh;
  z-index: 9;

  background-color: #333C;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.section`
  min-width: 450px;
  min-height: 400px;
  max-height: calc(100vh - 20px);

  padding: 20px;
  z-index: 19;
  overflow-y: auto;

  background-color: var(--dark);
  box-shadow: 0px 0px 10px black;
  border-radius: 5px;
  position: relative;

  >span{
    position: absolute;
    top: 15px;
    right: 20px;

    font-size: 30px;
    cursor: pointer;
    transition: 0.3s;

    :hover{
      color: var(--primary);
    }
  }

  >header{
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    margin: 0px 15px;
  }
`;

export const FormNewQuestion = styled.form`
  min-width: 450px;
  max-width: 450px;

  display: flex;
  flex-direction: column;
  gap: 12px;

  >div{
    display: flex;
    flex-wrap: wrap;
  }
  >img{
    align-self:center;
    max-width: 70%;
    display: none;
  }
`;

