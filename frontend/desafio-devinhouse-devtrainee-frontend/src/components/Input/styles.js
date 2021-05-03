import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: white;
  border: 5px solid #fff;
  padding: 2rem 5rem;
`;

export const Wrapper = styled.div`
  margin-top: 1%;
  background: #fff;
`;

export const InputData = styled.div`
  height: 40px;
  width: 100%;
  position: relative;

  > input {
    outline: none;
    height: 100%;
    width: 100%;
    border: none;
    font-size: 17px;
    border-bottom: 2px solid silver;
  }

  .invalid {
    border-bottom: red;
  }

  > input[type="date"] {
    //text-align: end;
  }

  > input[type="time"] {
    // text-align: end;
  }

  > input:focus ~ label,
  input:valid ~ label {
    transform: translateY(-35px);
    font-size: 15px;
    color: #4158d0;
  }

  > input:invalid::placeholder {
    color: transparent;
  }

  > input:focus ~ div,
  input:valid ~ div {
    background-color: #4158d0;
  }

  > label {
    background: white;
    position: absolute;
    bottom: 10px;
    left: 0;
    color: grey;
    pointer-events: none;
    transition: all 0.3s ease;
  }
`;

export const Underline = styled.div`
  position: absolute;
  bottom: 0px;
  height: 2px;
  width: 100%;
  background: grey;
`;
