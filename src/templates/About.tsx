import * as React from 'react';
import { Box, Stack } from "@mui/material";
import Image from "next/image";
import im17 from "../../picture/17.jpg";
import im18 from "../../picture/18.jpg";
import im19 from "../../picture/19.jpg";
import im20 from "../../picture/20.jpg";


export const About: React.FC = () => (
    <Stack spacing={5}>
        <Stack sx={{ flexDirection: {md: "row"}}}>
            <Stack spacing={40} sx={{width: "98%"}}>
                <Box sx={{ fontSize: 30}}>ANIMATION AND DESIGN STUDIO</Box>
                <Stack spacing={5}>
                <Box sx={{ fontSize: 20, width: "45%"}}>Through our artful animation and distinct design, we will infuse our dedicated passion for storytelling to align with your unique vision every step of the way.</Box>
                <Box sx={{ fontSize: 20, width: "45%"}}>Offering a full-service suite that spans original graphics, logos, animation, videos, web design, and brand consulting, we are a studio that produces content for you and most importantly, with you.</Box>
                </Stack>
            </Stack>
            <Box>FIFTH ATRIUM</Box>
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

        <Box sx={{ fontSize: 35, width: "45%"}}> So</Box>
        <Box display="flex" justifyContent="right"> 
            <Box sx={{ fontSize: 20, width:"25%"}}>Come plant your ideas with Fifth Atrium and see them spring to life!</Box>
        </Box>
        <Box />
        <Box />
    </Stack>
);