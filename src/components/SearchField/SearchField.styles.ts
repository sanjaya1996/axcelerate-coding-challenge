import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  max-width: 750px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem; // extra left padding for the icon
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: #0077ff;
    box-shadow: 0 0 0 2px rgba(0, 119, 255, 0.2);
  }
`;

const SearchIcon = styled(FiSearch)`
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  color: #888;
  pointer-events: none;
`;

export { InputWrapper, StyledInput, SearchIcon };
