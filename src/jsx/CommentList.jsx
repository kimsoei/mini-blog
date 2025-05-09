import styled from "styled-components";
import CommentItem from "./CommentItem";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentCount = styled.div`
  margin-bottom: 20px;
  font-size: 20px;
  & > span {
    color: #0084ff;
    font-weight: 500;
  }
`;

function CommentList(props) {
  const { comments } = props;

  const list = comments.map((comment, index) => {
    return (
      <CommentItem
        key={comment.id}
        comment={comment}
        index={index}
      ></CommentItem>
    );
  });

  return (
    <StyledWrapper>
      <CommentCount>
        댓글 <span>{comments.length} </span>
      </CommentCount>
      {list}
    </StyledWrapper>
  );
}

export default CommentList;
