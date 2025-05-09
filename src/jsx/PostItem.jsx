import styled from "styled-components";
import color from "../style/color";

const StyledWrapper = styled.div`
  display: block;
  padding: 48px 16px;
  border-bottom: 1px solid ${color.gray[300]};
  &:last-child {
    border-bottom: none;
  }

  &: hover {
    background-color: rgba(238, 243, 255, 0.5);
  }
  cursor: pointer;
`;

const StyledTitle = styled.p`
  font-weight: 600;
  font-size: 28px;
  color: ${color.gray[800]};
`;

const StyledPreview = styled.p`
  font-weight: 400;
  color: ${color.gray[800]};
  font-size: 20px;
  max-height: 60px;
  align-self: stretch;
  overflow: hidden;
  display: -webkit-box;
  max-height: 60px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  align-self: stretch;
  text-overflow: ellipsis;
  margin-bottom: 8px;
  margin-top: 8px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
  margin-bottom: 32px;
`;

const StyledDate = styled.p`
  color: ${color.gray[500]};
  align-self: stretch;
  font-size: 16px;
`;

function PostItem(props) {
  const { post, onClick, image } = props;

  const createdAt = post.createdAt?.toDate();

  const formattedDate = createdAt
    ? createdAt.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  const type = props.type || "default";

  return (
    <StyledWrapper onClick={onClick}>
      {image && <StyledImage src={image} alt={post.title} />}
      <StyledTitle>{post.title}</StyledTitle>
      <StyledPreview>{post.content}</StyledPreview>
      <StyledDate>{formattedDate}</StyledDate>
    </StyledWrapper>
  );
}

export default PostItem;
