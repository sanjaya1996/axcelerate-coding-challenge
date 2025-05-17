import styled from "styled-components";

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #eaeaea;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #fff; /* White border */
  box-shadow: 0 0 0 1px #ccc;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  fontweight: 600;
  fontsize: 1.125rem;
`;

const Email = styled.div`
  fontsize: 0.9rem;
  color: #666;
`;

export { ItemWrapper, Avatar, Info, Name, Email };
