import { useState } from "react";
import styled from "styled-components";
import color from "../style/color";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";

import Button from "./Button";
import TextInput from "./TextInput";
import Header from "./Header";
import Chip from "./Chip";
import ImageInput from "./ImageInput";
import Dropdown from "./DropDown";
import Spacer from "./spacer";
import BlogFooter from "./BlogFooter";
import Modal from "./Modal";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

function PostWritePage(props) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [hashtag, setHashtag] = useState("");
  const [hashtagList, setHashtagList] = useState([]);
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");

  const handleLogoClick = () => {
    setModalType("logo");
    setShowModal(true);
  };

  const writePost = () => {
    if (!title || !content || !category) {
      setModalType("post");
      setShowModal(true);
      return;
    }
    let timestamp = new Date().getTime().toString();
    let createdAt = new Date();
    db.collection("post")
      .doc(timestamp)
      .set({
        id: timestamp,
        title: title,
        content: content,
        hashtag: hashtagList,
        image: image,
        category: category,
        comments: [],
        createdAt: createdAt,
      })
      .then(() => {
        alert("글이 등록되었습니다!");
        navigate("/");
      });
  };

  const handleHashtag = (e) => {
    if (e.key === "Enter" && hashtag.trim() !== "") {
      e.preventDefault();
      const trimmed = hashtag.trim();
      if (!hashtagList.includes(trimmed)) {
        setHashtagList([...hashtagList, trimmed]);
      }
      setHashtag("");
    }
  };

  const removeHashtag = (indexToRemove) => {
    setHashtagList(hashtagList.filter((_, i) => i !== indexToRemove));
  };

  const handleConfirm = () => {
    setShowModal(false);

    if (modalType === "logo") {
      navigate("/");
    }
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const submitDisabled = !title || !category || !content;

  return (
    <div>
      <Header onLogoClick={handleLogoClick} />

      <Spacer size="80px" />

      <h1>새로운 글 쓰기</h1>

      <Spacer size="40px" />

      <h2 style={{ color: color.gray[800] }}>필수 항목</h2>

      <Spacer size="20px" />

      <TextInput
        title="제목"
        placeholder="제목을 작성하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></TextInput>

      <Spacer size="40px" />

      <Dropdown onSelect={(value) => setCategory(value)} />

      <Spacer size="40px" />

      <TextInput
        title="본문"
        placeholder="본문을 작성하세요"
        height="200"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></TextInput>

      <Spacer size="64px" />

      <h2 style={{ color: color.gray[800] }}>선택 항목</h2>

      <Spacer size="20px" />

      <ImageInput image={image} setImage={setImage} />

      <Spacer size="40px" />

      <TextInput
        title="해시태그"
        placeholder="해시태그를 입력한 뒤 엔터키를 누르세요"
        value={hashtag}
        onChange={(e) => setHashtag(e.target.value)}
        onKeyDown={handleHashtag}
      ></TextInput>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginTop: "12px",
        }}
      >
        {hashtagList.map((tag, index) => (
          <Chip
            key={index}
            type="editor"
            text={`${tag}`}
            onDelete={() => removeHashtag(index)}
          />
        ))}
      </div>

      <ButtonWrapper>
        <Button
          title="글 작성 완료"
          onClick={(e) => {
            writePost();
          }}
          disabled={submitDisabled}
        ></Button>
      </ButtonWrapper>
      <Spacer size="160px" />
      <BlogFooter />

      {showModal && (
        <Modal
          title={
            modalType === "logo" ? "정말 이동하시겠습니까?" : "필수 항목 미작성"
          }
          message={
            modalType === "logo"
              ? "로고를 클릭하여 메인 페이지로 이동합니다."
              : "제목, 내용, 카테고리는 필수 항목입니다. 모두 입력해주세요."
          }
          onConfirm={handleConfirm}
          onCancel={modalType === "logo" ? handleCancel : null}
        />
      )}
    </div>
  );
}

export default PostWritePage;
