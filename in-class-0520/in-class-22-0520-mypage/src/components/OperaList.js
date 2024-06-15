import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

const OperaList = ({ operas, onOperaSelect }) => {
  return (
    <Grid container spacing={4}>
      {/* 그리드 아이템들 사이의 간격을 설정, 0에서 10 사이의 숫자로 설정할 수 있으며, 숫자가 클수록 간격이 넓어진다.  */}
      {/* 오페라 목록을 반복하여 Card 컴포넌트로 렌더링 */}
      {operas.map((opera) => (
        <Grid item key={opera.id} xs={12} sm={6} md={3}>
          {/* 오페라 사진을 일렬로 나열하기 위해서 md를 3으로 수정 */}
          {/* 공식 문서에 따르면, "If a number, it sets the number of columns the grid item uses." 이기 때문.*/}
          {/* 참고 문헌 : https://mui.com/material-ui/api/grid/*/}
          <Card onClick={() => onOperaSelect(opera)}>
            <CardMedia
              component="img"
              height="350"
              sx={{
                width: "100%",
                objectFit: "cover",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.8)",
                borderRadius: "8px",
              }}
              //CardMedia도 sx를 사용할 수 있다. 높이를 350으로 줄이고 sx를 이용해서 좌우도 설정했다. 또한, 둥근 테두리와 그림자도 추가했다
              //참고 문헌 : https://mui.com/material-ui/api/card-media/
              image={opera.poster_path}
              alt={opera.title}
            />
            <CardContent>
              <Typography
                variant="h6"
                align="center"
                sx={{
                  fontSize: "25px",
                  fontFamily: "sans-serif",
                }}
              >
                {opera.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default OperaList;
