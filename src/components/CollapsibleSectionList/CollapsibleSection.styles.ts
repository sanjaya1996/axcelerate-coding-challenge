import styled from 'styled-components';

const SectionWrapper = styled.div`
  margin-bottom: 1.5rem;
  border: 1px solid #ddd;
  borderradius: 8px;
  overflow: hidden;
`;

const Header = styled.div`
  background-color: #f5f5f5;
  padding: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const ToogleIcon = styled.div`
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  padding: 1rem;
  background-color: #fff;
  border-top: 1px solid #eee;

  @media (max-width: 768px) {
    padding: 1rem 0em 1em 0rem;
  }
`;

export { SectionWrapper, Header, Content, ToogleIcon };
