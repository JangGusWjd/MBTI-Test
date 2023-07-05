import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Title from "./Title";
import Footer from "../MainPage/Footer";
import styled from "styled-components";
import "../styles/ResultPage/ResultApp.scss";

const ResultApp = () => {
  const StyledBtn = styled.button`
    width: 17rem;
    height: 5rem;
    border-radius: 50px;
    border: 3px solid #ff7710;
    background: #fff;
    color: #ff7710;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 1rem;
  `;

  const { mbti } = useParams();
  // mbti 데이터를 서버로부터 가져오기
  const [mbtiInfo, setMbtiInfo] = useState(null);
  useEffect(() => {
    const fetchMbtiInfo = async () => {
      try {
        const response = await axios.get(
          `http://49.247.33.67:8080/mbti/${mbti}`
        );
        setMbtiInfo(response.data);
      } catch (error) {
        console.error("MBTI 정보를 가져오는 중 오류 발생", error);
        setMbtiInfo(null);
      }
    };
    fetchMbtiInfo();
  }, [mbti]);

  // mbti 값을 가져오기 전 null을 반환하는 것을 방지(안썼더니 Cannnot read properties of null 오류 발생했음)
  if (!mbtiInfo) {
    return <div>MBTI 정보 불러오는중</div>;
  }

  return (
    <div className="PageBody">
      <Title />
      <div className="result-container">
        <h1>{mbti}는</h1>
        <div className="mbti-description">
          <p>{mbtiInfo.info}</p>
        </div>
      </div>
      <div className="button-container">
        <Link to="/">
          <StyledBtn>홈</StyledBtn>
        </Link>
        <Link to="/admin">
          <StyledBtn>관리자 페이지</StyledBtn>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default ResultApp;
