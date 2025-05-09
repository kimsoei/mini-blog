import { useState } from "react";
import { styled } from "styled-components";
import color from "../style/color";

const StyledTitle = styled.p`
  color: ${color.gray[800]};
  align-self: stretch;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 12px;
`;

const DropdownWrapper = styled.div`
  display: flex;
  height: 62px;
  padding: 16px 24px;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  background-color: ${color.gray[50]};
  color: ${(props) => (props.$hasValue ? color.gray.black : color.gray[400])};
  font-size: 20px;
  border-radius: 4px;
  cursor: pointer;
`;

const DropdownList = styled.ul`
  align-items: center;
  padding: 16px 24px;
  gap: 24px;
  list-style: none;
  align-self: stretch;
  border-radius: 4px;
  background-color: ${color.gray.white};
  border: 1px solid ${color.gray[100]};
`;

const DropdownItem = styled.li`
  cursor: pointer;
  font-size: 20px;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0px;
  }

  &: hover {
    color: ${color.pointgreen[1000]};
  }
`;

function Dropdown({ onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false);
    onSelect(value);
  };

  return (
    <div>
      <StyledTitle>카테고리</StyledTitle>
      <DropdownWrapper onClick={toggleDropdown} $hasValue={selected !== ""}>
        {selected || "카테고리를 설정하세요"}
        <img src={import.meta.env.BASE_URL + "/chevron-down.svg"} alt="down" />
      </DropdownWrapper>
      {isOpen && (
        <DropdownList>
          <DropdownItem onClick={() => handleSelect("일상")}>일상</DropdownItem>
          <DropdownItem onClick={() => handleSelect("공부")}>공부</DropdownItem>
          <DropdownItem onClick={() => handleSelect("기타")}>기타</DropdownItem>
        </DropdownList>
      )}
    </div>
  );
}

export default Dropdown;
