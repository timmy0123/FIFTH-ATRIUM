import { Box, Stack, Grid, Modal } from "@mui/material";
import React, {useState} from 'react';
import TableRowsIcon from '@mui/icons-material/TableRows';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Logo from '../../picture/FIFTH ATRIUM-Logo-horizontal-b.svg';
import Logo2 from '../../picture/FIFTH ATRIUM-Logo-2.svg';
import {  createTheme, ThemeProvider, Typography } from "@material-ui/core";


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

theme.typography.h5 = {
    fontSize: "1rem",
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    [theme.breakpoints.up('sm')]: {
        fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.1rem',
      },
    [theme.breakpoints.up('lg')]: {
        fontSize: '1.5rem',
      },
    [theme.breakpoints.up('xl')]: {
        fontSize: '1.6rem',
      },

}


export const Header: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return(
        <div>
            <ThemeProvider theme = {theme}>
            <Stack spacing={5} sx={{ bgcolor: '#DAD5D2'}}>
                <Box sx={{m:2}}>
                <Grid container>
                    <Grid item xs={11} sm={11} md={11} lg={11} xl={11} display={{xs:'none', sm:'none', md:'none', lg:'block', xl:'block'}}>
                        < Logo width={700} height={50}/>
                    </Grid>
                    <Grid item xs={11} sm={11} md={11} lg={11} xl={11} display={{xs:'none', sm:'none', md:'block', lg:'none', xl:'none'}}>
                        < Logo width={500} height={50}/>
                    </Grid>
                    <Grid item xs={11} sm={11} md={11} lg={11} xl={11} display={{xs:'block', sm:'block', md:'none', lg:'none', xl:'none'}}>
                        < Logo2 width={150} height={50}/>
                    </Grid>
                    <Grid item xs={0} sm={0} md={1} lg={1} xl={1} display={{xs: 'none', md: 'block', lg: 'block', xl: 'block' }}>
                        <Stack>
                            <Box component="div" sx={{ display: 'inline', '&:hover': {color:'#EF4122'}}} onClick={() => {document.getElementById("Project")?.scrollIntoView({behavior: 'smooth',})}}><Typography variant='h5'>PROJECT</Typography></Box>
                            <Box component="div" sx={{ display: 'inline', '&:hover': {color:'#EF4122'}}} onClick={() => {document.getElementById("About")?.scrollIntoView({behavior: 'smooth',})}}><Typography variant='h5'>ABOUT</Typography></Box>
                            <Box component="div" sx={{ display: 'inline'}}><Typography variant='h5'>TEAM</Typography></Box>
                            <Box component="div" sx={{ display: 'inline'}}><Typography variant='h5'>ARTISTS</Typography></Box>
                            <Box component="div" sx={{ display: 'inline', '&:hover': {color:'#EF4122'}}} onClick={() => {document.getElementById("Contact")?.scrollIntoView({behavior: 'smooth',})}}><Typography variant='h5'>CONTACT</Typography></Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={1} sm={1} md={0} lg={0} xl={0} display={{xs: 'block', md: 'none', lg: 'none', xl: 'none' }}>
                        <TableRowsIcon onClick={handleOpen}/>
                    </Grid>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="parent-modal-title"
                        aria-describedby="parent-modal-description"
                    >
                        <Stack sx={{ width: "100%", height: "80%", bgcolor:'#EF4122' }}>
                        <Box marginX={2} marginY={2}>
                            <Stack spacing={10}>
                            <Grid container>
                                <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
                                    <Logo2 width={200} height={100}/>
                                </Grid>
                                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                                <ArrowForwardIcon onClick={handleClose} sx={{ fontSize:50, color:"white"}}/>
                                </Grid>
                            </Grid>
                            <Grid container>
                            <Grid item xs={9} sm={9}><a></a></Grid>
                            <Grid item xs={3} sm={3} display={{xs: 'block', sm: 'block', md: 'none', xl: 'none' }}>
                                <Stack spacing={5}>
                                    <Box component="div" sx={{ display: 'inline', '&:hover': {color:'#fff'}}} onClick={() => {document.getElementById("Project")?.scrollIntoView({behavior: 'smooth',})}}><Typography variant='h5'>PROJECT</Typography></Box>
                                    <Box component="div" sx={{ display: 'inline', '&:hover': {color:'#fff'}}} onClick={() => {document.getElementById("About")?.scrollIntoView({behavior: 'smooth',})}}><Typography variant='h5'>ABOUT</Typography></Box>
                                    <Box component="div" sx={{ display: 'inline'}}><Typography variant='h5'>TEAM</Typography></Box>
                                    <Box component="div" sx={{ display: 'inline'}}><Typography variant='h5'>ARTISTS</Typography></Box>
                                    <Box component="div" sx={{ display: 'inline', '&:hover': {color:'#fff'}}} onClick={() => {document.getElementById("Contact")?.scrollIntoView({behavior: 'smooth',})}}><Typography variant='h5'>CONTACT</Typography></Box>
                                </Stack>
                            </Grid>
                            </Grid>
                            </Stack>
                        </Box>
                        </Stack>
                    </Modal>
                </Grid>
                </Box>
            </Stack>
            </ThemeProvider>
        </div>
    );
}