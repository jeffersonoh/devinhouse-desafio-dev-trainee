import styled from "styled-components";

const HeaderStyle = styled.header`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #133991;
  
  .header-background {
    display: flex;
    width: 90%;
    height: 85px;
    margin-left: auto;
    margin-right: auto;
  };
  
  .header-icon {
    margin-top: auto;
    margin-bottom: auto;
    width: 50px;
  }

  .header-title {
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 20px;
  };

  h1 {
    color: #FFFFFF;
  };
`; 

export default HeaderStyle;