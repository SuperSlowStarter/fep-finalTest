import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

// 사용자의 데이터를 정의하는 객체
const data = {
  react123: {
    name: "리액트",
    description: "프론트엔드 라이브러리",
  },
  javascript01: {
    name: "자바스크립트",
    description: "프로그래밍 언어",
  },
};

const Profile = () => {
  // useParams 훅을 사용하여 URL의 파라미터를 가져옴
  const params = useParams();
  // URL 파라미터에 해당하는 사용자 데이터를 가져옴
  const user = data[params.username];

  // useSearchParams 훅을 사용하여 URL의 쿼리 파라미터를 가져오고 설정하는 함수
  const [searchParams, setSearchParams] = useSearchParams();
  // 'detail' 쿼리 파라미터 값을 가져옴
  const detail = searchParams.get("detail");

  // '상세 프로필' 토글 함수
  const onToggleDetail = () => {
    // 'detail' 값이 'true'라면 false로, 아니면 true로 설정
    setSearchParams({ detail: detail === "true" ? false : true });
  };

  return (
    <div>
      <div>Profile 페이지</div>
      {user ? (
        <div>
          {/* 사용자 이름 출력 */}
          <div>{user.name}</div>
          {/* 'detail'이 'true'일 때 사용자 설명 출력 */}
          {detail === "true" && <p>{user.description}</p>}
        </div>
      ) : (
        // 사용자가 존재하지 않을 때 출력
        <p>프로필이 존재하지 않습니다.</p>
      )}
      {/* '상세 프로필' 버튼 */}
      <button onClick={onToggleDetail}>
        {detail === "true" ? "상세 프로필 닫기" : "상세 프로필 열기"}
      </button>
    </div>
  );
};

export default Profile;
