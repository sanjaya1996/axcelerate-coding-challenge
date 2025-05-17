import styled from "styled-components";

const HeaderWrapper = styled.div`
  align-items: center;
  margin-bottom: 2rem;
`;

const Logo = styled.img`
  width: auto;
  height: 48px;
  object-fit: contain;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  text-align: center;
  letter-spacing: -0.5px;
`;

export { HeaderWrapper, Logo, Title };
