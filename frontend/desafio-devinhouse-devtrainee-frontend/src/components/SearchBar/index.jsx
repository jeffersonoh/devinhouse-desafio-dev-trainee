import { Container, Wrapper, Input, SearchButton, SearchIcon } from "./styles";

function SearchBar() {
  return (
    <Container>
      <Wrapper>
        <Input>
          <input
            type="text"
            placeholder="Informe o CPF para buscar um paciente!"
            autoCorrect="off"
            autoComplete="off"
            className="search"
          />
        </Input>
        <SearchButton>
          <button>
            <SearchIcon />
          </button>
        </SearchButton>
      </Wrapper>
    </Container>
  );
}

export default SearchBar;
