import styled from "styled-components";
import color from "../style/color";
import Button from "./Button";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const StyledModalWrapper = styled.div`
  margin: 40px 80px;
  display: inline-flex;
  background-color: ${color.gray.white};
  padding: 40px 80px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${color.gray[100]};
  border-radius: 8px;
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-bottom: 24px;
  & > h2 {
    color: ${color.gray[800]};
    font-size: 20px;
    font-weight: 500;
  }
  & > p {
    color: ${color.gray[800]};
    font-size: 16px;
    font-weight: 400;
  }
`;

function Modal(props) {
  const { title, message, onConfirm, onCancel } = props;

  return (
    <Overlay>
      <StyledModalWrapper>
        <StyledTextWrapper>
          <h2>{title || "title"}</h2>
          <p>{message || "message"}</p>
        </StyledTextWrapper>
        <div style={{ display: "flex", gap: "12px" }}>
          <Button type="default" title="확인" onClick={onConfirm} />
          {onCancel && <Button type="line" title="취소" onClick={onCancel} />}
        </div>
      </StyledModalWrapper>
    </Overlay>
  );
}

export default Modal;
