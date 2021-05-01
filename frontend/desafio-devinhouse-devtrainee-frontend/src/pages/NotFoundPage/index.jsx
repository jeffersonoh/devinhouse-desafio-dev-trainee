import { Container, Wrapper } from "./styles";
import Footer from "../../components/Footer";

function NotFoundPage() {
  return (
    <Container>
      <Wrapper>
        <h1>404</h1>
        <h2>Page Not Found</h2>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default NotFoundPage;
