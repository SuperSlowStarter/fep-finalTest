import React, { useState } from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Chip,
  Box,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
//npm install @mui/icons-material 를 통해 설치해야 한다. 닫기 버튼을 사용할 수 있다.

const OperaDetail = ({ opera }) => {
  // 오페라 데이터에서 분해 할당을 이용하여 필요한 정보를 추출한다.
  const {
    title,
    overview,
    poster_path,
    release_date,
    vote_average,
    cast,
    yaemae_link, //사진이 클릭되면 yaemae_link를 통해 예매 사이트로 이동.
  } = opera;
  const [selectedCast, setSelectedCast] = useState(null); //출연진이 선택되었는지 여부를 알려주는 state.

  const handleCastClick = (actor) => {
    setSelectedCast(actor); //출연진 정보 클릭 핸들러이다.
  };

  const handleCloseClick = () => {
    setSelectedCast(null); //출연진 정보 닫기 핸들러이다.
  };

  const handleImageClick = () => {
    window.open(yaemae_link);
  }; //사진이 클릭되면 yaemae_link를 통해 예매 사이트를 열어주는 함수.

  return (
    // 오페라 정보를 보여주는 카드 컴포넌트 하나를 리턴한다.
    <Card style={{ marginTop: "20px" }}>
      <Grid container>
        <Grid item xs={12} md={4}>
          {/* 오페라 포스터 이미지 */}
          <CardMedia
            component="img"
            height="450"
            image={poster_path}
            alt={title}
            onClick={handleImageClick}
            sx={{
              width: "80%",
              objectFit: "cover", //비율을 유지하면서 부모를 완전히 덮도록 한다.
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.8)", // 그림자를 추가한다.
              borderRadius: "8px", // 상세 페이지의 사진도 둥근 테두리를 가진다.
              margin: "40px", // 상하좌우 마진 추가
            }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <CardContent>
            {/* 오페라 제목 */}
            <Typography variant="h4" component="h2">
              {title}
            </Typography>
            {/* 공연 기간과 평점 */}
            <Typography variant="subtitle1" color="textSecondary">
              공연 기간: {release_date}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              평점: {vote_average}
            </Typography>
            {/* 오페라 개요 */}
            <Typography variant="body1" paragraph>
              {overview}
            </Typography>
            {/* 출연진 */}
            <Typography variant="h6" component="h3">
              출연진:
            </Typography>
            {/* 출연진 목록을 반복하여 Chip 컴포넌트로 렌더링한다. */}
            <Grid container spacing={1}>
              {cast.map((actor, index) => (
                <Grid item key={index}>
                  {/* 배열을 이용하여 배우 이름들을 가로로 나열한다. 이때, map을 이용한다. */}
                  <Chip
                    label={actor.name}
                    //Chip컴포넌트의 label은 해당 컴포넌트의 내용을 의미한다. "The content of the component."
                    //참고 자료 : https://mui.com/material-ui/api/chip/
                    onClick={() => handleCastClick(actor)}
                  />
                </Grid>
              ))}
            </Grid>
            {/* 출연진 정보 표시 */}
            {selectedCast && ( //출연진이 선택이 되면 !! 나오는 것들
              <Box
                mt={2}
                p={2}
                border="1px solid grey"
                borderRadius="8px"
                bgcolor="#f9f9f9"
                position="relative"
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <CardMedia
                      component="img"
                      height="220"
                      image={selectedCast.photo} //각 배우들의 사진
                      alt={selectedCast.name} //사진 안나오면 그냥 이름만 보여주기
                      sx={{
                        borderRadius: "8px",
                        width: "80%",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.8)",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography variant="h6">{selectedCast.name}</Typography>
                    <Typography variant="body2">{selectedCast.bio}</Typography>
                    {/*각 배우들의 간략한 정보*/}
                  </Grid>
                </Grid>
                <IconButton
                  //출연진을 닫을 수 있는 버튼이다.
                  onClick={handleCloseClick}
                  sx={{ position: "absolute", bottom: 8, right: 8 }}
                >
                  <CloseIcon />{" "}
                  {/*@mui/icons-material/Close 에서 가져온 x 아이콘*/}
                </IconButton>
              </Box>
            )}
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default OperaDetail;
