import Styled, { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import color from "../style/color.js";

import Chip from "./Chip.jsx";
import BlogFooter from "./BlogFooter.jsx";
import Header from "./Header.jsx";
import Pagination from "./pagination.jsx";
import Spacer from "./spacer.jsx";

import { db } from "../../firebase.js";

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  gap: 12px;
  flex-wrap: wrap;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function MainPage(props) {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [category, setCategory] = useState("ALL view");

  const filteredData =
    category === "ALL view"
      ? data
      : data.filter((post) => post.category === category);

  useEffect(() => {
    let tempData = [];
    db.collection("post")
      .get()
      .then((qs) => {
        qs.forEach((doc) => {
          tempData.push(doc.data());
        });
        const sortedData = tempData.sort((a, b) => b.id - a.id); // 최신순
        setData(sortedData);
      });
  }, []);

  return (
    <div>
      <Header />
      <Spacer size="100px" />
      <LogoWrapper>
        <img src={import.meta.env.BASE_URL + "/Logo.svg"} />
      </LogoWrapper>
      <Spacer size="40px" />
      <p
        style={{
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "400",
          color: color.gray[800],
        }}
      >
        소리는 디자인을 공부하는 학생이고, 올해 4학년이에요.
        <br />
        그리고 커피마시면서 노래듣는 걸 좋아해요.
      </p>
      <Spacer size="80px" />
      <CategoryWrapper>
        <Chip
          type="category"
          text="ALL view"
          number={data.length}
          selected={category === "ALL view"}
          onClick={() => setCategory("ALL view")}
        />
        <Chip
          type="category"
          text="일상"
          number={data.filter((d) => d.category === "일상").length}
          selected={category === "일상"}
          onClick={() => setCategory("일상")}
        />
        <Chip
          type="category"
          text="공부"
          number={data.filter((d) => d.category === "공부").length}
          selected={category === "공부"}
          onClick={() => setCategory("공부")}
        />
        <Chip
          type="category"
          text="기타"
          number={data.filter((d) => d.category === "기타").length}
          selected={category === "기타"}
          onClick={() => setCategory("기타")}
        />
        <Chip type="default" />
      </CategoryWrapper>
      <Spacer size="80px" />
      <Pagination data={filteredData} />
      <Spacer size="160px" />
      <BlogFooter></BlogFooter>
    </div>
  );
}

export default MainPage;
