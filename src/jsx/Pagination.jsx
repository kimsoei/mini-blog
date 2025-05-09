import { useState, useEffect } from "react";
import { db } from "../../firebase";
import styled from "styled-components";
import PostList from "./PostList";
import Button from "./Button.jsx";
import { useNavigate } from "react-router-dom";
import color from "../style/color";
import Spacer from "./spacer";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const WriteButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const PageButton = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  border: 0;
  background-color: transparent;
  font-size: 20px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

function Pagination({ data }) {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 5;

  const totalPages = Math.ceil(data.length / postPerPage);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  return (
    <div>
      {currentPosts.length === 0 ? (
        <div>
          <p
            style={{
              textAlign: "center",
              color: color.gray[500],
              fontSize: "18px",
            }}
          >
            작성된 게시글이 없습니다.
          </p>
          <Spacer size="80px" />
          <WriteButtonWrapper>
            <Button title="글 작성" onClick={() => navigate(`/write`)} />
          </WriteButtonWrapper>
        </div>
      ) : (
        <div>
          <PostList
            posts={currentPosts}
            itemClicked={(post) => {
              navigate(`/post/${post.id}`);
            }}
          />
          <Spacer size="80px" />
          <Wrapper>
            <ButtonWrapper>
              <PageButton
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                &lt;
              </PageButton>

              {Array.from({ length: totalPages }, (_, i) => (
                <PageButton
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  style={{
                    backgroundColor:
                      currentPage === i + 1
                        ? color.pointblue[1000]
                        : "transparent",
                    color:
                      currentPage === i + 1
                        ? color.gray.white
                        : color.gray[800],
                  }}
                >
                  {i + 1}
                </PageButton>
              ))}

              <PageButton
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                &gt;
              </PageButton>
            </ButtonWrapper>

            <Button title="글 작성" onClick={() => navigate(`/write`)} />
          </Wrapper>
        </div>
      )}
    </div>
  );
}

export default Pagination;
