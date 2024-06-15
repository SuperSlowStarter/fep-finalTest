import React from "react";
import { useLocation } from "react-router-dom";
import qs from "qs";

const About = () => {
  // useLocation 훅을 사용하여 현재 URL의 location 객체를 가져옴
  const location = useLocation();
  // qs 라이브러리를 사용하여 쿼리 문자열을 파싱
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  // 쿼리 파라미터 'detail'의 값을 가져와서 문자열 'true'와 비교
  const showDetail = query.detail === "true";

  return (
    <div>
      <h2>소개(About)</h2>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 프로젝트입니다.</p>
      {/* 'detail' 값이 'true'일 때 추가적인 메시지를 표시 */}
      {showDetail && <p>detail 값을 true로 설정하셨군요!</p>}
    </div>
  );
};

export default About;
