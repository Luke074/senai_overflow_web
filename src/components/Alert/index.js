import { } from "./style";
import { Container } from "./style";
import { useRef, useEffect } from "react";

function Alert({ message, type, handleClose }) {

  const containerRef = useRef();

  useEffect(() => {

    if (message) {
      containerRef.current.style.width = "300px";

      setTimeout(() => {
        handleClose(undefined)
      }, 4000);

    } else {
      containerRef.current.style.width = "0px";
    }

  }, [message]);

  return (
    <Container type={type} ref={containerRef}>
      {message && (
        <>
          <span onClick={() => handleClose(undefined)}>&times;</span>
          <h1>{message.title}</h1>
          <p>{message.description}</p>
        </>
      )}
    </Container>
  );
}

export default Alert;