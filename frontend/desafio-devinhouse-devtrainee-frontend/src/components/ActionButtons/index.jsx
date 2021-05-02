import {
  Container,
  EditButton,
  EditButtonIcon,
  DeleteButton,
  DeleteButtonIcon,
} from "./styles";

function ActionButtons(props) {
  const { handleClick } = props;
  return (
    <Container>
      <EditButton>
        <button onClick={handleClick}>
          <EditButtonIcon />
        </button>
      </EditButton>
      <DeleteButton>
        <button>
          <DeleteButtonIcon />
        </button>
      </DeleteButton>
    </Container>
  );
}

export default ActionButtons;
