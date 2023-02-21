import * as React from 'react';
import { Box, Stack, Grid } from "@mui/material";
import Image from "next/image";
import im17 from "../../picture/17.jpg";
import im18 from "../../picture/18.jpg";
import im19 from "../../picture/19.jpg";
import im20 from "../../picture/20.jpg";


export const About: React.FC = () =>{ 
    return(
        <Stack sx={{ bgcolor: '#000000'}}>
        <Box marginX={4} marginY={5}>
        <Stack spacing={5}>
            <Grid container>
                <Grid item sm={9} md={9} lg={10.75} xl={10.75}>
                    <Stack spacing={75} sx={{width: "90%"}}>
                        <Box sx={{ fontSize: 50, color:"#EF4122"}}>ANIMATION AND DESIGN STUDIO</Box>
                        <Stack spacing={5}>
                        <Box sx={{ fontSize: 30, color: "white", width: "50%"}}>Through our artful animation and distinct design, we will infuse our dedicated passion for storytelling to align with your unique vision every step of the way.</Box>
                        <Box sx={{ fontSize: 30, color: "white", width: "50%"}}>Offering a full-service suite that spans original graphics, logos, animation, videos, web design, and brand consulting, we are a studio that produces content for you and most importantly, with you.</Box>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item sm={3} md={3} lg={1} xl={1}>
                    <Box sx={{ fontSize: 100, color:"#EF4122",rotate: "90deg"}}>FIFTH ATRIUM</Box>
                </Grid>
            </Grid>

            <Grid container rowSpacing={2}>
                <Grid item sm={12} md={6} lg={2.98} xl={2.98}>
                    <Image src={im17} alt="" style={{ width: '98%', height: 'auto' }}/>
                </Grid>
                <Grid item sm={12} md={6} lg={2.98} xl={2.98}>
                    <Image src={im18} alt="" style={{ width: '98%', height: 'auto' }}/>
                </Grid>
                <Grid item sm={12} md={6} lg={3} xl={3}>
                    <Image src={im19} alt="" style={{ width: '98%', height: 'auto' }}/>
                </Grid>
                <Grid item sm={12} md={6} lg={2.99} xl={2.99}>
                    <Image src={im20} alt="" style={{ width: '98%', height: 'auto' }}/>
                </Grid>
            </Grid>

            <Grid container>
                <Grid lg={8} xl={8}>
                    <Box sx={{ fontSize: 60, color:"#EF4122"}}>So</Box>
                </Grid>
                <Grid lg={4} xl={4}>
                    <Box display="flex" justifyContent="right" marginTop={8}> 
                        <Box sx={{ fontSize: 30, color:"white", width:'90%'}}>Come plant your ideas with Fifth Atrium and see them spring to life!</Box>
                    </Box>
                </Grid>
            </Grid>
        </Stack>
        </Box>
        </Stack>
);}