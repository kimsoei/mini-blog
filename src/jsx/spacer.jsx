import { styled } from "styled-components";

const Spacer = styled.div`
  width: ${(props) => props.size || "24px"};
  height: ${(props) => props.size || "24px"};
`;

export default Spacer;
