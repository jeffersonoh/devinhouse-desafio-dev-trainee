import { Container, GitHubLogo } from "./styles";

function Footer() {
  return (
    <Container>
      <h3>Clínica DEVinHouse</h3>
      <button className="github">
        <a
          href="https://github.com/thiagomathiassimon/devinhouse-desafio-devtrainee/tree/master/frontend"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubLogo />
        </a>
      </button>
    </Container>
  );
}

export default Footer;
