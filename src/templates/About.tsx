import * as React from 'react';
import { Box, Stack } from "@mui/material";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Image from "next/image";
import im17 from "../../picture/17.jpg";
import im18 from "../../picture/18.jpg";
import im19 from "../../picture/19.jpg";
import im20 from "../../picture/20.jpg";

const ContentTypography = withStyles({
    root: {
      color: "#FFFFFF",
      fontSize: 25
    }
})(Typography);

const TitleTypography = withStyles({
    root: {
      color: "#EF4122",
      fontSize: 35
    }
})(Typography);

const TypographySo = withStyles({
    root: {
      color: "#EF4122",
      fontSize: 40
    }
})(Typography);

const LabelTypography = withStyles({
    root: {
      color: "#EF4122",
      rotate: "90deg",
      height: "39%",
      width: "80%",
      fontSize: 70
    }
})(Typography);

export const About: React.FC = () =>{ 
    return(
        <Stack spacing={5} sx={{ bgcolor: '#000000' }}>
            <Stack sx={{ flexDirection: {md: "row"}}}>
                <Stack spacing={80} sx={{width: "90%"}}>
                    <Box sx={{ fontSize: 30}}><TitleTypography>ANIMATION AND DESIGN STUDIO</TitleTypography></Box>
                    <Stack spacing={5}>
                    <Box sx={{ fontSize: 20, width: "45%"}}><ContentTypography>Through our artful animation and distinct design, we will infuse our dedicated passion for storytelling to align with your unique vision every step of the way.</ContentTypography></Box>
                    <Box sx={{ fontSize: 20, width: "45%"}}><ContentTypography>Offering a full-service suite that spans original graphics, logos, animation, videos, web design, and brand consulting, we are a studio that produces content for you and most importantly, with you.</ContentTypography></Box>
                    </Stack>
                </Stack>
                <Box><LabelTypography>FIFTH ATRIUM</LabelTypography></Box>
            </Stack>

            <Stack direction="row" spacing={2.5} sx={{ flexDirection: {md: "row"}}}>
                <Box></Box>
                <Stack sx={{ flexDirection: {md: "row"}}}>
                    <Image src={im17} alt="" width="370" height="500"/>
                    <Image src={im18} alt="" width="370" height="500"/>
                    <Image src={im19} alt="" width="370" height="500"/>
                    <Image src={im20} alt="" width="370" height="500"/>
                </Stack>
                <Box></Box>
            </Stack>

            <Box sx={{ fontSize: 35, width: "45%"}}><TypographySo>So</TypographySo></Box>
            <Box display="flex" justifyContent="right"> 
                <Box sx={{ fontSize: 20, width:"35%"}}><ContentTypography>Come plant your ideas with Fifth Atrium and see them spring to life!</ContentTypography></Box>
            </Box>
        </Stack>
);}