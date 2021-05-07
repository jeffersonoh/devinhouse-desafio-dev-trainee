import styled from "styled-components";

const CpfSearchStyle = styled.main`
  display: flex;
  justify-content: space-between;
  width: 92%;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;

  .clients-card-input-div {
    display: flex;
  }

  .clients-card-input {
    border: 1px solid #ECECEC;
    padding: 20px 40px;
    width: 100%;
    height: 100%;
    font-size: 16px;
    outline: none;
    margin-right: 20px;
  }

  .clients-card-input-div button {
    display: block;
    width: 250px;
    height: 60px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    font-size: 16px;
    background-color: var(--primary);
    color: #FFFFFF;
    cursor: pointer;
    outline: none;
  }

`;

export default CpfSearchStyle;