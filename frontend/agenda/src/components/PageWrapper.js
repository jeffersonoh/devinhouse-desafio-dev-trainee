import styled from "styled-components";

const PageStyled = styled.div`
  padding: 88px 156px 0;
  @media screen and (max-width: 800px) {
    padding: 88px 50px 0;
  }
`;

function PageWrapper(props) {
  return <PageStyled>{props.children}</PageStyled>;
}

export default PageWrapper;
