import "../styles/MainPage/MbtiCh.scss";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MbtiCh = () => {
  const MbtiBtn = styled.button`
    width: 11.5rem;
    height: 9.75rem;
    border: 0;
    border-radius: 25px;
    background: #1c1b1a;
    color: white;
    font-size: 8rem;
  `;

  const ResultBtn = styled.button`
    width: 49rem;
    height: 5rem;
    border-radius: 50px;
    border: 3px solid #1c1b1a;
    background: white;
    font-size: 1.5rem;
  `;

  const [selectEorI, setSelectEorI] = useState("");
  const [selectSorN, setSelectSorN] = useState("");
  const [selectTorF, setSelectTorF] = useState("");
  const [selectJorP, setSelectJorP] = useState("");

  const handleEorIClick = (selection) => {
    setSelectEorI(selection);
  };
  const handleSorNClick = (selection) => {
    setSelectSorN(selection);
  };
  const handleTorFClick = (selection) => {
    setSelectTorF(selection);
  };
  const handleJorPClick = (selection) => {
    setSelectJorP(selection);
  };

  const mbti = selectEorI + selectSorN + selectTorF + selectJorP;
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (mbti) {
      navigate(`/result/${mbti}`);
    }
  };

  return (
    <div className="mbti-container">
      <div className="energy">
        <MbtiBtn
          onClick={() => handleEorIClick("E")}
          style={{ backgroundColor: selectEorI === "E" ? "#ff7710" : "" }}
        >
          E
        </MbtiBtn>
        <p>에너지 방향</p>
        <MbtiBtn
          onClick={() => handleEorIClick("I")}
          style={{ backgroundColor: selectEorI === "I" ? "#ff7710" : "" }}
        >
          I
        </MbtiBtn>
      </div>
      <div className="recognize">
        <MbtiBtn
          onClick={() => handleSorNClick("S")}
          style={{ backgroundColor: selectSorN === "S" ? "#ff7710" : "" }}
        >
          S
        </MbtiBtn>
        <p>인식 방식</p>
        <MbtiBtn
          onClick={() => handleSorNClick("N")}
          style={{ backgroundColor: selectSorN === "N" ? "#ff7710" : "" }}
        >
          N
        </MbtiBtn>
      </div>
      <div className="judgement">
        <MbtiBtn
          onClick={() => handleTorFClick("T")}
          style={{ backgroundColor: selectTorF === "T" ? "#ff7710" : "" }}
        >
          T
        </MbtiBtn>
        <p>판단</p>
        <MbtiBtn
          onClick={() => handleTorFClick("F")}
          style={{ backgroundColor: selectTorF === "F" ? "#ff7710" : "" }}
        >
          F
        </MbtiBtn>
      </div>
      <div className="life">
        <MbtiBtn
          onClick={() => handleJorPClick("J")}
          style={{ backgroundColor: selectJorP === "J" ? "#ff7710" : "" }}
        >
          J
        </MbtiBtn>
        <p>생활 양식</p>
        <MbtiBtn
          onClick={() => handleJorPClick("P")}
          style={{ backgroundColor: selectJorP === "P" ? "#ff7710" : "" }}
        >
          P
        </MbtiBtn>
      </div>
      <ResultBtn onClick={handleSubmit}>확인</ResultBtn>
    </div>
  );
};

export default MbtiCh;
