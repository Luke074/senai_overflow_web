import { Container } from "./style";

function Tag({ info, handleClose }) {
  return (
    <Container>
      {info}
      <span onClick={handleClose}>&times;</span>
    </Container>
  );
}

export default Tag;