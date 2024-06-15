import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import "../styles.css"; // import the CSS file

const OperaList = ({ operas, onOperaSelect }) => {
  return (
    <Grid container spacing={4}>
      {operas.map((opera) => (
        <Grid item key={opera.id} xs={12} sm={6} md={3}>
          <Card className="card" onClick={() => onOperaSelect(opera)}>
            <CardMedia
              component="img"
              className="cardMedia"
              image={opera.poster_path}
              alt={opera.title}
            />
            <CardContent className="cardContent">
              <Typography variant="h6" className="cardTitle">
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
