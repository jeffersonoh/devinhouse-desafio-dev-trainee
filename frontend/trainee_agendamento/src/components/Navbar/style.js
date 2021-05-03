import styled from "styled-components";

export const HeaderMenu = styled.div`
  display: flex;
  width: 100%;
  height: 65px;
  background-color: var(--background);
  -webkit-box-shadow: 0px 12px 36px -20px rgb(0 0 0 / 29%); 
  box-shadow: 0px 12px 36px -20px rgb(0 0 0 / 29%);
  
  .left-nav {
    width: 100%;
    margin-left: 25px;
    margin-right: auto;
  };
`;

export const NavbarStyle = styled.nav`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  background-color: var(--background);

  ul li {
    display: inline-flex;
  };

  ul li a {
    padding: 20px 50px;

    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    color: #666666;
  };

  ul li a:hover {
    border-bottom: 3px solid var(--primary);    
  };

  .active {
    border-bottom: 3px solid var(--primary);    
  };  
`; 