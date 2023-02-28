import * as React from 'react';
import { Box, Stack, Grid } from "@mui/material";
import {  createTheme, ThemeProvider, Typography } from "@material-ui/core";
import Logo from '../../picture/FIFTH ATRIUM-R.svg';
import Image from "next/image";
import im17 from "../../picture/17.jpg";
import im18 from "../../picture/18.jpg";
import im19 from "../../picture/19.jpg";
import im20 from "../../picture/20.jpg";

const theme = createTheme({
    breakpoints: {
        values: {
          xs: 0,
          sm: 500,
          md: 800,
          lg: 1200,
          xl: 1536,
        },
      }
});

theme.typography.h2 = {
    fontSize: "1rem",
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
      },
    [theme.breakpoints.up('lg')]: {
        fontSize: '3rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '3rem',
      },
}

theme.typography.h3 = {
    fontSize: "5rem",
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    [theme.breakpoints.down('sm')]: {
        fontSize: '2.5rem',
    }
}

theme.typography.h5 = {
    fontSize: "1rem",
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    [theme.breakpoints.up('sm')]: {
        fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
      },
    [theme.breakpoints.up('lg')]: {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '1.5rem',
      },

}

export const About: React.FC = () =>{ 
    return(
        <ThemeProvider theme = {theme}>
        <Stack sx={{ bgcolor: '#000000'}}>
        <Box marginX={4} marginY={5}>
        <Stack spacing={5}>
            <Grid container>
                <Grid item sm={9} md={9} lg={10.75} xl={10.75} order={{ xs: 2, md: 1 }}>
                    <Stack spacing={{xs:2,sm:2,md:75,lg:75}} >
                        <Box sx={{ color:"#EF4122"}}><Typography variant='h2'>ANIMATION AND DESIGN STUDIO</Typography></Box>
                        <Grid container rowSpacing={5}>
                            <Grid item xs={12} lg={6}>
                                <Box sx={{ color: "white"}}>
                                    <Typography variant='h5'>Through our artful animation and distinct design, we will infuse our dedicated passion for storytelling to align with your unique vision every step of the way.</Typography>
                                </Box>
                            </Grid>
                            <Grid item display={{sx:'none', sm:'none', md:'none', lg:'block', xl:'block'}} lg={6}><a></a></Grid>
                            <Grid item xs={12} lg={6}>
                                <Box sx={{ color: "white"}}>
                                    <Typography variant='h5'>Offering a full-service suite that spans original graphics, logos, animation, videos, web design, and brand consulting, we are a studio that produces content for you and most importantly, with you.</Typography>
                                </Box>
                            </Grid>
                            <Grid item display={{sx:'none', sm:'none', md:'none', lg:'block', xl:'block'}} lg={6}><a></a></Grid>
                        </Grid>
                    </Stack>
                </Grid>
                <Grid item sm={3} md={3} lg={1} xl={1} order={{ xs: 1, md: 2 }} display={{xs:'none', sm:'none', md:'none', lg:'block', xl:'block'}}>
                    <Logo width={200} height={350}/>
                </Grid>
                <Grid item sm={3} md={3} lg={1} xl={1} order={{ xs: 1, md: 2 }} display={{xs:'none', sm:'none', md:'block', lg:'none', xl:'none'}}>
                    <Logo width={300} height={350}/>
                </Grid>
                <Grid item xs={9} sm={9} md={0} lg={0} xl={0} order={{ xs: 1, md: 2 }} display={{xs:'block', sm:'block', md:'none', lg:'none', xl:'none'}}><a></a></Grid>
                <Grid item xs={3} sm={3} md={0} lg={0} xl={0} order={{ xs: 1, md: 2 }} display={{xs:'block', sm:'block', md:'none', lg:'none', xl:'none'}}>
                    <Stack spacing={15}>
                        <Logo width={150} height={150}/>
                        <a></a>
                    </Stack>
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
                <Grid item xs={12} xl={8}>
                    <Box sx={{color:"#EF4122"}}><Typography variant='h3'>So</Typography></Box>
                </Grid>
                <Grid item xs={12} xl={4}>
                    <Box display="flex" justifyContent="right" marginTop={8}> 
                        <Box sx={{color:"white"}}>
                            <Typography variant='h5'>Come plant your ideas with Fifth Atrium and see them spring to life!</Typography>
                        </Box>
                    </Box>
                </Grid>
                
            </Grid>
        </Stack>
        </Box>
        </Stack>
        </ThemeProvider>
);}