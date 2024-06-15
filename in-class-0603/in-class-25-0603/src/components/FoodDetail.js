import React from "react";
import "./FoodDetail.css";

const FoodDetail = ({ food, onBack }) => {
  return (
    <div className="food-detail">
      {" "}
      {/* 음식 상세 정보를 감싸는 div */}
      <h3>{food.name}</h3> {/* 음식 이름을 출력하는 제목 */}
      <img src={food.image} alt={food.name} />{" "}
      {/* 음식 이미지를 출력하는 태그 */}
      <p>{food.description}</p> {/* 음식 설명을 출력하는 단락 */}
      <button onClick={onBack}>돌아가기</button> {/* "돌아가기" 버튼 */}
    </div>
  );
};

export default FoodDetail;
