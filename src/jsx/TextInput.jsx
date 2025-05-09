import styled from "styled-components";
import color from "../style/color";

const StyledTextArea = styled.textarea`
  border-radius: 4px;
  background: ${color.gray[50]};
  height: ${(props) => props.height}px;
  width: 100%;
  box-sizing: border-box;
  padding: 16px 24px;
  resize: none;
  border: none;
  font-size: 20px;
  &::placeholder {
    color: ${color.gray[400]};
    font-size: 20px;
    font-weight: 400;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &:focus {
    outline: 3px solid ${color.pointblue[500]};
  }
`;

const StyledTitle = styled.p`
  color: ${color.gray[800]};
  align-self: stretch;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 12px;
`;

function TextInput(props) {
  const { height, value, onChange, placeholder, title, onKeyDown } = props;

  return (
    <div>
      {title && <StyledTitle>{title}</StyledTitle>}
      <StyledTextArea
        placeholder={placeholder}
        height={height || 62}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}

export default TextInput;
