import React from "react";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
//import CardImage from "../image/Ads.jpg";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginLeft: "10%",
  },
  card: {
    padding: "5%",
  },
}));

export default function Adscards(props) {
  const classes = useStyles();

  const adsData = props.adsData;

  return (
    <div style={{ paddingTop: "8%" }}>
      <Card className={"MuiProjectCard--01"}>
        <CardHeader title={adsData.title} className={"MuiCard__head"} />
        <CardMedia className={classes.media} title="Ads" image={adsData.image} style ={{ width: '30', height: '30' }}/>

        <CardContent className={"MuiCardContent-root"}>
          <div className={"MuiCardContent-inner"}>
            <Typography variant="h5" component="h2">
              {adsData.housetype}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {adsData.price}
            </Typography>
            <Typography variant="body2" component="p">
              {adsData.location}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
