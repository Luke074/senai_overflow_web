import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 0px;
  height: 100px;
  margin: 10px;

  transition: width 0.4s;

  border-radius: 4px;
  background-color: ${(props) => props.type === "error" ? "#d90429cc" : "#1a68d6" };

  white-space: nowrap;

  >h1{
    font-size: 18px;
    margin: 5px;
    
    white-space: nowrap;
  }
  >p{
    font-size: 14px;
    margin: 0px 5px;
  }

  >span{
    position: absolute;
    top: 15px;
    right: 20px;

    font-size: 25px;
    cursor: pointer;
    transition: 0.3s;

    :hover{
      color: var(--primary);
    }
  }
`;