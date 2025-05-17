import styled from "styled-components";
import Home from "./pages/Home";

const Container = styled.div`
  padding: 2rem;
`;

function App() {
  return (
    <Container>
      <Home />
    </Container>
  );
}

export default App;
