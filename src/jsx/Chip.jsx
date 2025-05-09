import styled from "styled-components";
import color from "../style/color";

const Text = styled.span`
  color: ${color.gray[700]};
  font-weight: 500;
`;

const Number = styled.span`
  font-weight: 400;
`;

const BasicChip = styled.button`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  background: ${color.gray[50]};
  color: ${color.gray.white};
  text-align: center;
  font-size: 16px;
  line-height: 150%;
  }
`;

const DisplayChip = styled(BasicChip)`
  background: ${color.pointblue[100]};
  ${Text} {
    color: ${color.pointblue[1000]};
  }

  ${Number} {
    color: ${color.pointblue[500]};
  }
`;

const Category = styled(BasicChip)`
  background: ${(props) =>
    props.$selected ? color.pointblue[1000] : color.gray[50]};

  ${Text} {
    color: ${(props) => (props.$selected ? color.gray.white : color.gray[700])};
  }

  ${Number} {
    color: ${(props) =>
      props.$selected ? color.pointblue[500] : color.gray[400]};
  }

  cursor: pointer;

  ${(props) =>
    !props.$selected &&
    `
    &:hover {
      background: ${color.pointblue[100]};

      ${Text} {
        color: ${color.pointblue[1000]};
      }

      ${Number} {
        color: ${color.pointblue[500]};
      }
    }
  `}
`;

function Chip(props) {
  const type = props.type || "display";

  if (type === "editor") {
    return (
      <BasicChip>
        <Text>{props.text || "Chip"}</Text>
        <img
          src={import.meta.env.BASE_URL + "/delete.svg"}
          alt="delete"
          style={{ width: "16px", height: "16px", cursor: "pointer" }}
          onClick={props.onDelete}
        />
      </BasicChip>
    );
  } else if (type === "display") {
    return (
      <DisplayChip>
        <Text>{props.text || ""}</Text>
      </DisplayChip>
    );
  } else if (type === "category") {
    return (
      <Category $selected={props.selected} onClick={props.onClick}>
        <Text>{props.text || "category"}</Text>
        <Number>{props.number ?? 0}</Number>
      </Category>
    );
  }
}

export default Chip;
