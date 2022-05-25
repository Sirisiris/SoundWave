import React from "react";
import {Button, Box} from "@mui/material";
import tw from '../images/twitter.svg';
import fb from '../images/facebook.svg';

export default function Footer () {
    return(
        <Box style={{backgroundColor: "#202027"}}>
            <Button style={{color: "white", backgroundColor: "transparent", marginLeft: "20%", fontSize: "1.1rem"}}>
                About Us
            </Button>
            <Button style={{color: "white", backgroundColor: "transparent", marginLeft: "2%", fontSize: "1.1rem"}}>
                Contact
            </Button>
            <Button style={{color: "white", backgroundColor: "transparent", marginLeft: "35%"}}>
                <img src={tw} alt="Twitter" />
            </Button>
            <Button style={{color: "white", backgroundColor: "transparent", fontSize: "1.1rem"}}>
                Twitter
            </Button>
            <Button style={{color: "white", backgroundColor: "transparent"}}>
                <img src={fb} alt="Facebook" />
            </Button>
            <Button style={{color: "white", backgroundColor: "transparent", fontSize: "1.1rem"}}>
                Facebook
            </Button>
        </Box>
    )
}