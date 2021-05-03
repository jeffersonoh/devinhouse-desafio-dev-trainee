import { Container, Wrapper, Input, SearchButton, SearchIcon } from "./styles";

function SearchBar(props) {
  const { handleClick } = props;

  const handleSearch = () => {
    const input = document.getElementById("search");
    console.log(input.value);
    handleClick(input.value);
  };
  return (
    <Container>
      <Wrapper>
        <Input>
          <input
            id="search"
            type="text"
            placeholder="Informe o CPF para buscar um paciente!"
            autoCorrect="off"
            autoComplete="off"
            className="search"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
        </Input>
        <SearchButton>
          <button onClick={handleSearch}>
            <SearchIcon />
          </button>
        </SearchButton>
      </Wrapper>
    </Container>
  );
}

export default SearchBar;
