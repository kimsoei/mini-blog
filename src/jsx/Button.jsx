import styled from "styled-components";
import color from "../style/color";

const DefaultButton = styled.button`
  box-sizing: border-box;
  cursor: pointer;
  height: 48px;
  padding: 8px 24px;
  border: none;
  border-radius: 8px;
  background: ${color.gray.black};
  color: ${color.gray.white};
  font-size: 16px;
  &:hover {
    background-color: ${color.pointgreen[1000]};
  }
`;

const LineButton = styled(DefaultButton)`
  background: ${color.gray.white};
  color: ${color.gray[800]};
  border: 1px solid ${color.gray.black};
  &:hover {
    background: ${color.gray.white};
    color: ${color.pointgreen[1000]};
    border: 1px solid ${color.pointgreen[1000]};
  }
`;

function Button(props) {
  const { title, onClick } = props;
  const type = props.type || "default";

  if (type == "default") {
    return <DefaultButton onClick={onClick}>{title || "Button"}</DefaultButton>;
  } else if (type == "line") {
    return <LineButton onClick={onClick}>{title || "Button"}</LineButton>;
  }
}

export default Button;
