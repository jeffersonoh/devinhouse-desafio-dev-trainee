import { Buttons, Button, BackButton } from "./styles";

import { useNavigate } from "react-router-dom";

function RegisterButtons(props) {
  const { buttonName, handleClick, handleSubmit } = props;
  const navigate = useNavigate();

  return (
    <Buttons>
      <Button>
        <button
          className="back"
          onClick={(e) => {
            navigate("/exames");
            e.preventDefault();
          }}
        >
          <BackButton />
        </button>
      </Button>
      <Button>
        <button
          type="submit"
          className="register"
          onClick={(e) => {
            handleSubmit();
            e.preventDefault();
          }}
        >
          {buttonName}
        </button>
      </Button>
      <Button>
        <button className="limpar" onClick={handleClick}>
          Limpar
        </button>
      </Button>
    </Buttons>
  );
}

export default RegisterButtons;
