import React, { useState } from "react";
import { Container, Typography, Box } from "@mui/material"; //MUI 라이브러리를 이용할 수 있다.
import OperaList from "./components/OperaList";
import OperaDetail from "./components/OperaDetail";
import operasData from "./data/operas"; //오페라 데이터를 가져온다.

const App = () => {
  const [selectedOpera, setSelectedOpera] = useState(null); //오페라가 선택되었는지를 알려주는 state이다.

  const handleOperaSelect = (opera) => {
    setSelectedOpera(opera);
  }; //오페라가 선택되었을때 selectedOpera를 업데이트해주는 함수.

  const handleRefresh = () => {
    window.location.reload();
  }; //My Favorite Opera를 누르면 페이지가 새로고침되게 하는 함수.

  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="10vh"
        sx={{
          border: "2px solid grey",
          padding: "8px 16px",
          borderRadius: "8px",
          width: "fit-content",
          margin: "0 auto",
          marginBottom: "24px",
          marginTop: "24px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
          backgroundColor: "#D2B48C",
          cursor: "pointer", // 클릭이 가능하도록 포인터를 제공해준다.
        }}
        onClick={handleRefresh} //MyFavoriteOperas가 클릭되면 페이지가 새로고침된다.

        //Box를 이용해서 중앙정렬한다. My Favorite Operas를 정렬한다.
        //또한 sx를 이용하여 그림자를 넣고 안쪽 색은 어둡게 처리했다.
        //해당 내용 참고 : https://mui.com/material-ui/react-box/#basics
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontSize: "2rem",
            fontFamily: "sans-serif",
            fontWeight: "bold",
          }}
          //타이포그래피에 sx추가
          //Typhography 참고자료 : https://mui.com/material-ui/api/typography/
          //sx 사용법 : https://mui.com/system/getting-started/the-sx-prop/
        >
          My Favorite Operas
        </Typography>
      </Box>
      <OperaList operas={operasData} onOperaSelect={handleOperaSelect} />{" "}
      {/*OperaList 컴포넌트에 필요한 props를 제공해준다.넘겨주는 정보는 오페라 데이터들과 선택여부 함수*/}
      {selectedOpera && <OperaDetail opera={selectedOpera} />}
      {/*selectedOpera가 존재할 때만, 즉 선택되었을때만 OperaDetail 컴포넌트를 렌더링한다.*/}
    </Container>
  );
};

export default App;
