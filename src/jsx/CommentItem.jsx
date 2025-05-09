import styled from "styled-components";

const StyledWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding: 24px 24px;
  align-items: center;
  gap: 16px;
  background: #fff;
  border-bottom: 1px solid #c4c9d0;
  &:last-child {
    border-bottom: none;
  }
`;

const StyledContent = styled.p`
  font-size: 20px;
  color: #4f4f4f;
  & > span {
    color: #a3a3a3;
  }
`;

function CommentItem(props) {
  const { comment, index } = props;

  return (
    <StyledWrapper>
      <StyledContent>
        <span>{index + 1}</span> {comment.content}
      </StyledContent>
    </StyledWrapper>
  );
}

export default CommentItem;
