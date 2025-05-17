import React, { useState } from "react";

import { InputWrapper, SearchIcon, StyledInput } from "./SearchField.styles";

type SearchFieldProps = {
  value: string;
  onSearch: (searchTerm: string) => void;
  placeholder?: string;
  debounceDelay?: number;
};

const SearchField: React.FC<SearchFieldProps> = ({
  value,
  onSearch,
  placeholder,
  debounceDelay,
}) => {
  const [inputValue, setInputValue] = useState(value);

  return (
    <InputWrapper>
      <SearchIcon />
      <StyledInput
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
};

export default SearchField;
