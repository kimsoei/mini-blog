import { useState } from "react";
import styled from "styled-components";
import color from "../style/color";
import Button from "./Button";
import Modal from "./Modal";
import Spacer from "./spacer";

const StyledWrapper = styled.div`
  display: block;
`;

const StyledTitle = styled.h3`
  color: ${color.gray[800]};
  font-size: 40px;
`;

const StyledContent = styled.p`
  color: ${color.gray[800]};
  font-size: 20px;
  margin: 40px 0 40px 0;
  white-space: pre-line;
`;

const StyledDate = styled.p`
  color: ${color.gray[500]};
  align-self: stretch;
  font-size: 20px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 540px;
  object-fit: cover;
  object-position: center;
`;

const MenuWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  z-index: 10;
`;

function PostContainer(props) {
  const { post, onDelete } = props;

  const createdDate = post.createdAt?.toDate
    ? post.createdAt.toDate()
    : new Date(post.createdAt);

  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  return (
    <StyledWrapper>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div>
          <StyledTitle>{post.title}</StyledTitle>
          <StyledDate>
            {createdDate.toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            • {post.category}
          </StyledDate>
        </div>

        <MenuWrapper>
          <img
            src={import.meta.env.BASE_URL + "/ellipsis-v.svg"}
            alt="ellipsis-v"
            style={{ cursor: "pointer" }}
            onClick={() => setIsButtonVisible((prev) => !prev)}
          />
          {isButtonVisible && (
            <ButtonContainer>
              <Button title="삭제하기" onClick={handleDeleteClick} />
            </ButtonContainer>
          )}
        </MenuWrapper>
      </div>
      {post.image && (
        <>
          <Spacer size="40px" />
          <StyledImage src={post.image} alt="대표 이미지" />
        </>
      )}
      <StyledContent>{post.content}</StyledContent>

      {isModalOpen && (
        <Modal
          title="정말로 글을 삭제하시겠습니까?"
          message="삭제한 글은 복구할 수 없습니다."
          onConfirm={onDelete}
          onCancel={() => setIsModalOpen(false)}
        />
      )}
    </StyledWrapper>
  );
}

export default PostContainer;
