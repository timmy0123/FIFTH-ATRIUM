import { Box, Stack, Grid, Modal } from "@mui/material";
import React, {useState} from 'react';
import TableRowsIcon from '@mui/icons-material/TableRows';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

  
export const Header: React.FC = () => {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return(
        <header>
            <Stack spacing={5} sx={{ bgcolor: '#DAD5D2'}}>
                <Box sx={{m:2}}>
                <Grid container>
                    <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
                        <Box component="div" sx={{ width:'96%', display: 'inline', fontSize:60}}>FIFTH ATRIUM</Box>
                    </Grid>
                    <Grid item xs={0} sm={0} md={1} lg={1} xl={1} display={{xs: 'none', md: 'block', lg: 'block', xl: 'block' }}>
                        <Stack>
                            <Box component="div" sx={{ display: 'inline', fontSize:24, '&:hover': {color:'#EF4122'}}} onClick={() => {document.getElementById("Project")?.scrollIntoView({behavior: 'smooth',})}}>PROJECT</Box>
                            <Box component="div" sx={{ display: 'inline', fontSize:24, '&:hover': {color:'#EF4122'}}} onClick={() => {document.getElementById("About")?.scrollIntoView({behavior: 'smooth',})}}>ABOUT</Box>
                            <Box component="div" sx={{ display: 'inline', fontSize:24}}>TEAM</Box>
                            <Box component="div" sx={{ display: 'inline', fontSize:24}}>ARTISTS</Box>
                            <Box component="div" sx={{ display: 'inline', fontSize:24, '&:hover': {color:'#EF4122'}}} onClick={() => {document.getElementById("Contact")?.scrollIntoView({behavior: 'smooth',})}}>CONTACT</Box>
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
                            <Grid container>
                                <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
                                    <Box sx={{ color:"white"}}><h1 id="parent-modal-title">FIFTH ATRIUM</h1></Box>
                                </Grid>
                                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                                <ArrowForwardIcon onClick={handleClose} sx={{ fontSize:50, color:"white"}}/>
                                </Grid>
                            </Grid>
                            <Grid container>
                                
                            </Grid>

                        </Stack>
                    </Modal>
                </Grid>
                </Box>
            </Stack>
        </header>
    );
}