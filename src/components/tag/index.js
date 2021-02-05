import { Container } from "./style";

function Tag({ info }) {
  return (
    <Container>
      {info}
      <span>&times;</span>
    </Container>
  );
}

export default Tag;