import { styled } from "styled-components";
import { useRef } from "react";
import color from "../style/color";

const ImageInputWrapper = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${color.gray[50]};
  display: flex;
  height: 540px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 8px;
  cursor: pointer;

  & > h2 {
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    color: ${color.gray[400]};
  }

  & > p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    color: ${color.gray[400]};
  }

  img.preview {
    width: 100%;
    height: 540px;
    border-radius: 8px;
    object-fit: cover;
    object-position: center;
  }

  .overlay {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.4)
    );
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    border-radius: 8px;
    transition: opacity 0.2s ease-in-out;
  }

  &:hover .overlay {
    opacity: 1;
  }

  .delete-icon {
    position: absolute;
    bottom: 20px;
    left: 20px;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`;
const StyledTitle = styled.p`
  color: ${color.gray[800]};
  align-self: stretch;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  margin-bottom: 12px;
`;

function ImageInput(props) {
  const { image, setImage } = props;
  const inputRef = useRef(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (_e) => {
      console.log(_e.target.result);
      setImage(_e.target.result);
    };
  };

  return (
    <>
      <StyledTitle>대표 이미지</StyledTitle>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={inputRef}
        onChange={handleImage}
      />
      <ImageInputWrapper onClick={() => inputRef.current.click()}>
        {image ? (
          <>
            <img className="preview" src={image} alt="업로드 이미지" />
            <div
              className="overlay"
              onClick={(e) => {
                e.stopPropagation();
                setImage(null);
              }}
            >
              <img
                className="delete-icon"
                src={import.meta.env.BASE_URL + "/trash.svg"}
                alt="삭제"
              />
            </div>
          </>
        ) : (
          <>
            <img src={import.meta.env.BASE_URL + "/camera.svg"} alt="카메라" />
            <h2>클릭해 대표 이미지를 삽입해주세요</h2>
            <p>사진을 한 장만 삽입할 수 있습니다</p>
          </>
        )}
      </ImageInputWrapper>
      <p
        style={{
          padding: "12px 0px",
          fontSize: "16px",
          fontWeight: "400",
          color: color.gray[400],
        }}
      >
        • 사진은 1MB 이하로 삽입해주세요.
      </p>
    </>
  );
}

export default ImageInput;
