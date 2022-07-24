import React from "react";
import {Button, Grid} from "@mui/material";
import maingirl from "../images/landing-page-girl.png";
import background1 from "../images/background1.png";
import Typography from '@mui/material/Typography';

export default function Main() {
    return(
        <Grid container spacing={2}  className="Main1" id="Main1" style={{backgroundImage: `url(${background1})`, display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "10%", paddingLeft: "4%"}}>
            <Grid item sx={5} sm={4} md={4} order={{ sx: 3, sm: 2 }}>
                <img src={maingirl} alt="" style={{width: "85%", marginTop: "3rem", paddingLeft: "10%"}}/>
            </Grid>
            <Grid item sx={7} sm={8} md={8} order={{ sx: 1, sm: 2 }} style={{paddingLeft: "5rem"}}>
                <Typography variant="h1" paragraph color="#FFFFFD" style={{fontFamily: "Poppins", fontWeight: "300"}}>Feel the Music</Typography>
                <Typography variant="h5" paragraph color="#FFFFFD" style={{fontFamily: "Poppins", paddingRight: "5rem"}}>Stream over 20 thousand songs with one click </Typography>
                <Button  href="#Main3" style={{color: "white", backgroundColor: "#4853ab", width: "6rem", fontFamily: "Poppins", fontWeight: "400", fontSize: "0.8rem", textTransform: "capitalize", marginBottom: "2rem"}}>Join Now</Button>
            </Grid>
        </Grid>
    )
}
