import styled from "styled-components";

const ScheduleUpdateStyle = styled.main`
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 45%;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;

  .clients-card {
    display: flex;
    width: 100%auto;
  }

  .clients-card form {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .clients-resume {
    margin-left: auto;
    margin-right: auto;

    width: 100%;
    height: 100%;
  };

  .container-title {
    display: flex;
  }

  .container-title > h2 {
    margin-left: auto;
    margin-right: auto;
  }

  .form-data {
    margin-bottom: 25px;
  }

  .form-data div {
    margin-bottom: 10px;
  }

  .form-data div label {
    font-size: 16px;
    font-weight: 500;
    color: #666666;
  }

  .form-data select {
    padding: 15px 30px;
    outline: none;
    width: 100%;
    border: 1px solid #ECECEC;
    border-radius: 4px;
    font-size: 14px;
    background-color: #FFFFFF;
  }

  .form-data input {
    padding: 15px 30px;

    outline: none;    
    width: 100%;
    border: 1px solid #ECECEC;
    border-radius: 4px;
    font-size: 14px;
  }

  .form-data-button {
    display: block;
    width: 180px;
    height: 50px;
    margin-left: auto;
    margin-right: 0;
    font-size: 16px;
    background-color: var(--primary);
    color: #FFFFFF;
    cursor: pointer;
    outline: none;

    border-radius: 5px;
  }
`;

export default ScheduleUpdateStyle;