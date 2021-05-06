import styled from "styled-components";

const CardStyle = styled.div`
  .card {
    width: 100%;
    border: 1px solid #EFEFEF;
    margin-bottom: 25px;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    background-color: #EFEFEF;
    height: 50px;
  }

  .card-header-schedule-icon,
  .schedule-date-info,
  .schedule-date,
  .schedule-time,
  .schedule-actions {
    display: flex;
  }

  .card-header-icon {
    margin-left: 15px;
    margin-top: auto;
    margin-bottom: auto;
    
    width: 20px;
    height: 20px;
  }

  .card-header-schedule-icon h3 {
    margin-left: 10px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .schedule-date-info {
    margin-top: auto;
    margin-bottom: auto;
  }

  .schedule-date-title,
  .schedule-time-title {
    font-weight: 600;
    color: #666666;
  }

  .schedule-date {
    margin-right: 10px;
  }

  .schedule-date-info-data {
    margin-left: 5px;
    color: var(--primary);
    font-weight: 600;
  }

  .schedule-actions {
    margin-top: auto;
    margin-right: 5px;
    margin-bottom: auto;
  }

  .schedule-action {
    width: 30px;
    height: 30px;

    cursor: pointer;

    margin-right: 7px;

    border: 1px solid #EFEFEF;
    
    background-color: var(--background);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
  }

  .schedule-action-edit,
  .schedule-action-delete {
    width: 20px;
    height: 20px;
    color: var(--primary);
    margin-top: 4px;
    margin-left: 4px;
  }

  .card-content {
    display: flex;
    height: 50px;
  }

  .card-content-schedule-client {
    margin-top: auto;
    margin-left: 3%;
    margin-right: auto;
    margin-bottom: auto;
  }

  .card-content-schedule-client-info-icon {
    width: 20px;
    height: 20px;
  }

  .card-content-schedule-client-icon {
    margin-right: 5px;
  }

  .card-content-schedule-client,
  .card-content-schedule-client-name,
  .card-content-schedule-exam-name {
    display: flex;
  }

  .card-content-schedule-exam {
    margin-top: auto;
    margin-left: auto;
    margin-right: 3%;
    margin-bottom: auto;
  }

  .card-content-schedule-cliente-name-title,
  .card-content-schedule-exam-name-title {
    font-weight: 600;
    color: #666666;
  }

  .card-content-schedule-cliente-name-resume,
  .card-content-schedule-exam-name-name {
    margin-left: 5px;
  }

  .confirm-delete {
    color: red;
  }
`;

export default CardStyle;