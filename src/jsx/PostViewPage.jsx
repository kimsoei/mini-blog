import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Button from "./Button";
import TextInput from "./TextInput";
import PostContainer from "./PostContainer";
import CommentList from "./CommentList";
import BlogFooter from "./BlogFooter";
import Header from "./Header";
import Chip from "./Chip";
import Spacer from "./spacer";

import { db } from "../../firebase";

const HashtagWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

function PostViewPage(props) {
  const postId = useParams().id;

  const navigate = useNavigate();

  const [post, setPost] = useState({
    id: 0,
    title: "",
    content: "",
    comments: [],
    hashtag: [],
    category: "",
    image: "",
  });

  useEffect(() => {
    db.collection("post")
      .doc(postId)
      .get()
      .then((doc) => {
        setPost(doc.data());
      });
  }, []);

  const [comment, setComment] = useState("");

  const writeComment = () => {
    if (!comment.trim()) {
      alert("댓글을 입력해주세요.");
      return;
    }

    let timestamp = new Date().getTime().toString();
    let tempComments = post.comments;
    tempComments.push({
      id: `${postId}_${timestamp}`,
      content: comment,
    });

    db.collection("post")
      .doc(postId)
      .update({
        comments: tempComments,
      })
      .then(() => {
        setComment("");
        alert("댓글이 등록되었습니다!");
      });
  };

  const deletePost = () => {
    db.collection("post")
      .doc(postId)
      .delete()
      .then(() => {
        navigate("/");
      });
  };

  return (
    <PageWrapper>
      <Header />
      <Spacer size="80px" />
      <ContentWrapper>
        <PostContainer post={post} onDelete={deletePost} />
        <HashtagWrapper>
          {post.hashtag.map((tag, index) => (
            <Chip key={index} type="display" text={`${tag}`} />
          ))}
        </HashtagWrapper>
        <Spacer size="140px" />
        <CommentList comments={post.comments} />
        <TextInput
          placeholder="댓글을 작성하세요"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <ButtonWrapper>
          <Button title="댓글 작성" onClick={writeComment} />
        </ButtonWrapper>
      </ContentWrapper>
      <BlogFooter />
    </PageWrapper>
  );
}

export default PostViewPage;
