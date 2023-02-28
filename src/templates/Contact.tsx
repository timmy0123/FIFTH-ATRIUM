import * as React from 'react';
import { Box, Stack, Grid  } from "@mui/material";
import {  createTheme, ThemeProvider, Typography } from "@material-ui/core";
import Divider from '@mui/material/Divider';
import Link from "next/link";

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
    fontSize: "1.4rem",
    textDecoration:"underline",
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    [theme.breakpoints.up('sm')]: {
        fontSize: '2rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
      },
    [theme.breakpoints.up('lg')]: {
        fontSize: '3rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '4rem',
      },
}

theme.typography.body1 = {
    fontSize: "1rem",
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.5rem',
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

export const Contact: React.FC = () => (
    <ThemeProvider theme = {theme}>
    <Stack sx={{ bgcolor: '#EF4122' }}>
    <Box marginTop={10} marginBottom={4} marginX={6}>
    <Stack spacing={5}>
        <Grid container>
            <Grid sm={12} md={12} lg={12} xl={12}>
                <Box display="flex" justifyContent="center" sx={{'&:hover': {backgroundColor:"black",color:'#EF4122'}}}>
                    <Link href={"mailto:hello@fifthatrium.com"}>
                        <Typography variant='h2'>hello@fifthatrium.com</Typography>
                    </Link>
                </Box>
            </Grid>
        </Grid>
        
            
        <Stack spacing={3}>
            <Grid container>
                <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Box display="flex" justifyContent="center">
                        <Divider sx={{ borderWidth: 1.5, width:"100%", borderColor:"black"}} />
                    </Box>
                </Grid>
            </Grid>
            <Box display="flex" justifyContent="center">
                <Grid container>
                    <Grid xs={9} sm={9} md={5} lg={5} xl={5}>
                        <Box display="flex" justifyContent="right"><Typography variant='body1'>Contact us</Typography></Box>
                    </Grid>
                    <Grid xs={2} sm={2} md={1} lg={1} xl={1}><a></a></Grid>
                    <Divider orientation='vertical'  sx={{borderWidth: 1.5, borderColor:"black"}}/>
                    <Grid xs={1} sm={1} md={1} lg={1} xl={1} display={{xs:'none',sm:'none',md:'block',lg:'block',xl:'block'}}><a></a></Grid>
                    <Grid xs={9} sm={4} md={4} lg={4} xl={4} display={{xs:'none',sm:'none',md:'block',lg:'block',xl:'block'}}>
                        <Typography variant='body1'>Request to see our Full Portfolio or Schedule a time to chat about your Next Project!</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Grid container>
                <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Box display="flex" justifyContent="center">
                        <Divider sx={{ borderWidth: 1.5, width:"100%", borderColor:"black"}} />
                    </Box>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4} display={{xs:'block',sm:'block',md:'none',lg:'none',xl:'none'}}>
                    <Typography variant='body1'>Request to see our Full Portfolio or Schedule a time to chat about your Next Project!</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} display={{xs:'block',sm:'block',md:'none',lg:'none',xl:'none'}}>
                    <Box display="flex" justifyContent="center">
                        <Divider sx={{ borderWidth: 1.5, width:"100%", borderColor:"black"}} />
                    </Box>
                </Grid>
            </Grid>
        </Stack>
            

    </Stack>
    </Box>
    </Stack>
    </ThemeProvider>
)