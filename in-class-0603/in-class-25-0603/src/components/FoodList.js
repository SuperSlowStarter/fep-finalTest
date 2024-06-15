import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./FoodList.css";
import "./FoodDetail.css";

const foods = {
  // categoryId 는 각각의 카테고리를 구분하기 위한 식별자
  // 1은 한식을 나타내고, 2는 중식, 3은 일식, 4는 양식
  1: [
    {
      id: 1,
      name: "비빔밥",
      description: "한국의 대표적인 혼합 밥 요리.",
      image:
        "https://health.chosun.com/site/data/img_dir/2021/01/27/2021012702508_0.jpg",
    },
    {
      id: 2,
      name: "김치찌개",
      description: "매운 김치와 돼지고기를 넣고 끓인 찌개.",
      image:
        "https://recipe1.ezmember.co.kr/cache/recipe/2016/03/18/2c93a282245cceae9c08374bbdd7bbee1.jpg",
    },
  ],
  2: [
    {
      id: 3,
      name: "짜장면",
      description: "중국식 짜장 소스를 사용한 면 요리.",
      image: "https://dimg.donga.com/wps/NEWS/IMAGE/2017/04/14/83849831.2.jpg",
    },
    {
      id: 4,
      name: "탕수육",
      description: "바삭한 돼지고기 요리.",
      image:
        "https://recipe1.ezmember.co.kr/cache/recipe/2020/07/05/2e0e7c019f283bcc36d34cdee876d15b1.jpg",
    },
  ],
  3: [
    {
      id: 5,
      name: "스시",
      description: "일본의 대표적인 초밥 요리.",
      image:
        "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202401/09/3e5fbf9e-ab4c-4bf4-9474-71d5eadb32cc.jpg",
    },
    {
      id: 6,
      name: "라멘",
      description: "일본식 국수 요리.",
      image:
        "https://recipe1.ezmember.co.kr/cache/recipe/2023/01/29/c43317a61f576eb3f24692ef4fd8f42b1.png",
    },
  ],
  4: [
    {
      id: 7,
      name: "파스타",
      description: "이탈리아의 대표적인 면 요리.",
      image:
        "https://recipe1.ezmember.co.kr/cache/recipe/2022/09/30/8e7eb8e3019532a8dc6d39a9a325aad41.jpg",
    },
    {
      id: 8,
      name: "스테이크",
      description: "고기를 구워서 만든 요리.",
      image:
        "https://recipe1.ezmember.co.kr/cache/recipe/2017/07/09/6741acc7f6bf0f7d04245851fb365c311.jpg",
    },
  ],
};

const FoodList = () => {
  const { categoryId } = useParams(); // 현재 선택된 카테고리 ID를 가져오기
  const [foodList, setFoodList] = useState([]); // 음식 목록 상태를 관리
  const [selectedFood, setSelectedFood] = useState(null); // 선택된 음식 상태를 관리
  const navigate = useNavigate(); // 페이지 이동 함수를 가져옵니다.

  useEffect(() => {
    // foods 객체에서 선택된 카테고리 ID에 해당하는 음식 목록을 가져와서 foodList 상태에 설정
    // (즉, 카테고리 ID가 변경될 때마다 실행)
    // 만약 해당 카테고리에 해당하는 음식이 없다면 빈 배열을 설정
    setFoodList(foods[categoryId] || []);
  }, [categoryId]);

  const handleFoodClick = (food) => {
    // 음식을 클릭했을 때 호출
    // 선택된 음식을 설정
    setSelectedFood(food);
  };

  const handleBackToCategory = () => {
    // "돌아가기" 버튼을 클릭했을 때 호출
    // 선택된 음식을 초기화하고, 홈으로 이동
    setSelectedFood(null);
    navigate("/"); // navigate 함수를 사용하여 루트 페이지로 이동하는 것
  };

  return (
    <div>
      <h2>음식 목록</h2>
      <div className="food-list">
        {foodList.map((food) => (
          <div key={food.id} className="food-item">
            <button onClick={() => handleFoodClick(food)}>{food.name}</button>
          </div>
        ))}
      </div>
      {selectedFood && (
        <div className="food-detail">
          <h3>{selectedFood.name}</h3>
          <img src={selectedFood.image} alt={selectedFood.name} />
          <p>{selectedFood.description}</p>
          <button onClick={handleBackToCategory}>돌아가기</button>
        </div>
      )}
    </div>
  );
};

export default FoodList;
