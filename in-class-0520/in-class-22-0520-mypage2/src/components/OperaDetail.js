import React from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Chip,
} from "@mui/material";
import "../styles.css"; // import the CSS file

const OperaDetail = ({ opera }) => {
  const { title, overview, poster_path, release_date, vote_average, cast } =
    opera;

  return (
    <Card className="cardDetail">
      <Grid container>
        <Grid item xs={12} md={4}>
          <CardMedia
            component="img"
            className="cardDetailMedia"
            image={poster_path}
            alt={title}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <CardContent className="cardDetailContent">
            <Typography variant="h4" component="h2" className="cardDetailTitle">
              {title}
            </Typography>
            <Typography variant="subtitle1" className="subtitle">
              방영일: {release_date}
            </Typography>
            <Typography variant="subtitle1" className="subtitle">
              평점: {vote_average}
            </Typography>
            <Typography variant="body1" paragraph>
              {overview}
            </Typography>
            <Typography variant="h6" component="h3">
              출연진:
            </Typography>
            <Grid container spacing={1}>
              {cast.map((actor, index) => (
                <Grid item key={index}>
                  <Chip label={actor.name} className="chip" />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default OperaDetail;
