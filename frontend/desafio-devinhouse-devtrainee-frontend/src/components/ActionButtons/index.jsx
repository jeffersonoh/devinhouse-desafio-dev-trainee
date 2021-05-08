import {
  Container,
  EditButton,
  EditButtonIcon,
  DeleteButton,
  DeleteButtonIcon,
} from "./styles";

function ActionButtons(props) {
  const { handleClick, handleDelete } = props;
  return (
    <Container>
      <EditButton>
        <button onClick={handleClick}>
          <EditButtonIcon />
        </button>
      </EditButton>
      <DeleteButton>
        <button onClick={handleDelete}>
          <DeleteButtonIcon />
        </button>
      </DeleteButton>
    </Container>
  );
}

export default ActionButtons;
