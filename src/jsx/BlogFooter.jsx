import Styled, { styled } from "styled-components";
import color from "../style/color";

const Footer = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 240px;
  padding: 110px 160px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  & > p {
    color: ${color.gray[600]};
  }
`;

function BlogFooter() {
  return (
    <Footer>
      <p>Copyright © 2025 김소리</p>
    </Footer>
  );
}

export default BlogFooter;
