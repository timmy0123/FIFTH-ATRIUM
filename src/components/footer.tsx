import { Box, Stack, Grid } from "@mui/material";
import {  createTheme, ThemeProvider, Typography } from "@material-ui/core";
import Logo from '../../picture/FIFTH ATRIUM-Footer.svg';
import Link from 'next/link';

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
    fontSize: "1.5rem",
    textDecoration:"underline",
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.4rem',
      },
    [theme.breakpoints.up('lg')]: {
        fontSize: '1.3rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '1.4rem',
      },
}

theme.typography.body1 = {
    fontSize: "0.5rem",
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    [theme.breakpoints.up('sm')]: {
        fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1rem',
      },
    [theme.breakpoints.up('lg')]: {
        fontSize: '1rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '1rem',
      },
}

export const Footer: React.FC = () => {
    return(
        <ThemeProvider theme = {theme}>
        <Stack sx={{ bgcolor: '#000000'}}>
        <Box marginX={4} marginBottom={5} marginTop={{xs:1,md:15}}>
        <Stack spacing={5}>
            <Grid container rowSpacing={10}>
                <Grid item sm={12} md={8} lg={10} xl={10} order={{xs:2, md:1}}>
                    <Logo width={250} height={100}/>
                </Grid>
                <Grid item sm={12} md={4} lg={2} xl={2} order={{xs:1, md:2}}>
                    <Stack spacing={2}>
                        <Box sx={{ color:'white'}}><Link href={"mailto:hello@fifthatrium.com"}><Typography variant='h2'>hello@fifthatrium.com</Typography></Link></Box>
                        <Box sx={{ color:'white'}}><Link href={"https://www.instagram.com/fifthatrium/"}><Typography variant='h2'>INSTAGRAM</Typography></Link></Box>
                        <Box sx={{ color:'white'}}><Link href={"https://www.facebook.com/5thatrium/"}><Typography variant='h2'>FACEBOOK</Typography></Link></Box>
                    </Stack>
                </Grid>
            </Grid>
            <Grid item xs={12} md={5} lg={10} xl={10}>
                <Box sx={{fontSize:15, color:'white'}}><Typography variant='body1'>2023 © FIFTH ATRIUM. All Rights reserved</Typography></Box>
            </Grid>
            <Grid item xs={1} md={5} lg={2} xl={2} display={{xs:'none',sm:'none',md:'block',lg:'block',xl:'block'}}><a></a></Grid>
        </Stack>
        </Box>
        </Stack>
        </ThemeProvider>
    );}