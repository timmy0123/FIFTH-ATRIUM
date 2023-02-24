import * as React from 'react';
import { Box, Stack, Modal, Grid } from "@mui/material";
import {  createTheme, ThemeProvider, Typography } from "@material-ui/core";
import ReactPlayer from 'react-player';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Divider from '@mui/material/Divider';
import Link from "next/link";
import Image from "next/image";
import im1 from "../../picture/1.png";
import im2 from "../../picture/2.png";
import im3 from "../../picture/3.png";
import im4 from "../../picture/4.png";
import im5 from "../../picture/5.png";
import im6 from "../../picture/6.png";
import im7 from "../../picture/7.png";
import im8 from "../../picture/8.png";
import im9 from "../../picture/9.png";
import im10 from "../../picture/10.png";
import im11 from "../../picture/11.png";
import im12 from "../../picture/12.png";
import im13 from "../../picture/13.png";
import im14 from "../../picture/14.png";
import im15 from "../../picture/15.png";
import im16 from "../../picture/16.png";
import { breakpoints } from '@mui/system';
import { styled } from "@mui/material/styles";

const theme = createTheme({
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 800,
          lg: 1200,
          xl: 1536,
        },
      },
    typography: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
    },
});

theme.typography.h3 = {
    fontSize: "1.6rem",
    [theme.breakpoints.up('sm')]: {
        fontSize: '3rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '4rem',
      },
    [theme.breakpoints.up('lg')]: {
        fontSize: '4rem',
      },
    [theme.breakpoints.up('xl')]: {
        fontSize: '4rem',
      },

}

theme.typography.h4 = {
    fontSize: "1.2rem",
    [theme.breakpoints.up('sm')]: {
        fontSize: '2.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2.5rem',
      },
    [theme.breakpoints.up('lg')]: {
        fontSize: '2.5rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '2.5rem',
      },

}


const Icon = styled("div")(({ theme }) => ({
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("xs")]: {
        '& svg': {
            fontSize: 15
          }
    },
    [theme.breakpoints.up("md")]: {
        '& svg': {
            fontSize: 30
          }
    },
    [theme.breakpoints.up("lg")]: {
        '& svg': {
            fontSize: 30
          }
    },
  }));

export const Project: React.FC = () => {
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const handleOpen = (idx:number) => {
        if(idx == 1){
            setOpen1(true);
        }else if(idx == 2){
            setOpen2(true);
        }else if(idx == 3){
            setOpen3(true);
        }else{
            setOpen4(true);
        } 
    };
    const handleClose = (idx:number) => {
        if(idx == 1){
            setOpen1(false);
        }else if(idx == 2){
            setOpen2(false);
        }else if(idx == 3){
            setOpen3(false);
        }else{
            setOpen4(false);
        } 
    };
    return(
        <ThemeProvider theme = {theme}>
        <Stack sx={{ bgcolor: '#DAD5D2' }} >
        <Box marginX={2} marginY={10}>
        <Stack spacing={10}>
            <Grid container>
                <Grid item xs={2.8} sm={2.8} md={4.8} lg={4.8} xl={4.8}><a></a></Grid>
                <Grid item xs={9} sm={9} md={7} lg={7} xl={7}>
                    <Box display="flex" justifyContent="left" sx={{ fontSize: 50, color:"#EF4122"}}> 
                        <Typography variant='h3'>LIFE IS</Typography>
                    </Box>
                </Grid>
                <Grid item xs={4} sm={4} md={5.25}  lg={5.25} xl={5.25}><a></a></Grid>
                <Grid item xs={8} sm={8} md={6} lg={6} xl={6}>
                    <Box display="flex" justifyContent="left" sx={{ fontSize: 50, color:"#EF4122"}}>
                    <Typography variant='h3'>OUR STORIES</Typography>
                    </Box>
                </Grid>
                <Grid item xs={3} sm={3} md={5} lg={5} xl={5}><a></a></Grid>
                <Grid item xs={9} sm={9} md={7} lg={7} xl={7}>
                    <Box display="flex" justifyContent="left" sx={{ fontSize: 50, color:"#EF4122"}}>
                    <Typography variant='h3'>AND</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Box display="flex" justifyContent="center" sx={{ fontSize: 50, color:"#EF4122"}}>
                        <Typography variant='h3'>WE BRING YOUR STORY</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6.5} sm={6.5} md={6.5} lg={6.5} xl={6.5}><a></a></Grid>
                <Grid item xs={5} sm={5} md={5}  lg={5} xl={5}>
                    <Box display="flex" justifyContent="left" sx={{ fontSize: 50, color:"#EF4122"}}>
                        <Typography variant='h3'>To LIFE</Typography>
                    </Box>
                </Grid>
            </Grid>


            <Grid container justifyContent="center">
                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}><a></a></Grid>
                <Grid item xs={0.75} sm={0.75} md={0.35} lg={0.35} xl={0.35}>
                    <Icon><FiberManualRecordIcon/></Icon>
                </Grid>
                <Grid item xs={9.25} sm={9.25} md={9} lg={4} xl={4}>
                    <Typography variant='h4'>Brand Identity</Typography>
                </Grid>
                
                <Grid item xs={3.5} sm={3.5} md={4} lg={1} xl={1}><a></a></Grid>
                <Grid item xs={0.75} sm={0.75} md={0.35} lg={0.35} xl={0.35}>
                    <Icon><FiberManualRecordIcon/></Icon>
                </Grid>
                <Grid item xs={7.25} sm={7.25} md={6} lg={4} xl={4}>
                    <Typography variant='h4'>Logo Animation</Typography>
                </Grid>


                <Grid item xs={2} sm={2} md={2} lg={2.5} xl={2.5}><a></a></Grid>
                <Grid item xs={0.75} sm={0.75} md={0.35} lg={0.35} xl={0.35}>
                    <Icon><FiberManualRecordIcon/></Icon>
                </Grid>
                <Grid item xs={9.25} sm={9.25} md={9} lg={2} xl={2}>
                    <Typography variant='h4'>Title Design</Typography>
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}><a></a></Grid>
                <Grid item xs={0.75} sm={0.75} md={0.35} lg={0.35} xl={0.35}>
                    <Icon><FiberManualRecordIcon/></Icon>
                </Grid>
                <Grid item xs={10.25} sm={10.25} md={10} lg={5} xl={5}>
                    <Typography variant='h4'>Film/Project Pitch Deck</Typography>
                </Grid>


                <Grid item xs={1} sm={1} md={1} lg={1.5} xl={1.5}><a></a></Grid>
                <Grid item xs={0.75} sm={0.75} md={0.35} lg={0.35} xl={0.35}>
                    <Icon><FiberManualRecordIcon/></Icon>
                </Grid>
                <Grid item xs={10.25} sm={10.25} md={8} lg={3} xl={3}>
                    <Typography variant='h4'>Animation</Typography>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={2} xl={2}><a></a></Grid>
                <Grid item xs={0.75} sm={0.75} md={0.35} lg={0.35} xl={0.35}>
                    <Icon><FiberManualRecordIcon/></Icon>
                </Grid>
                <Grid item xs={8.25} sm={8.25} md={8.25} lg={4.5} xl={4.5}>
                    <Typography variant='h4'>Motion Graphics</Typography>
                </Grid>


                <Grid item xs={2} sm={2} md={2} lg={1.5} xl={1.5}><a></a></Grid>
                <Grid item xs={0.75} sm={0.75} md={0.35} lg={0.35} xl={0.35}>
                    <Icon><FiberManualRecordIcon/></Icon>
                </Grid>
                <Grid item xs={9.25} sm={9.25} md={9.25} lg={4.5} xl={4.5}>
                    <Typography variant='h4'>Campaign Creation</Typography>
                </Grid>


                <Grid item xs={2} sm={2} md={2} lg={1} xl={1}><a></a></Grid>
                <Grid item xs={0.75} sm={0.75} md={0.35} lg={0.35} xl={0.35}>
                    <Icon><FiberManualRecordIcon/></Icon>
                </Grid>
                <Grid item xs={9.25} sm={9.25} md={9.25} lg={3.5} xl={3.5}>
                    <Typography variant='h4'>Poster Design</Typography>
                </Grid>


                <Grid item xs={3} sm={3} md={3} lg={1} xl={1}><a></a></Grid>
                <Grid item xs={0.75} sm={0.75} md={0.35} lg={0.35} xl={0.35}>
                    <Icon><FiberManualRecordIcon/></Icon>
                </Grid>
                <Grid item xs={8.25} sm={8.25} md={6} lg={4.5} xl={4.5}>
                    <Typography variant='h4'>Explainer Video</Typography>
                </Grid>
            </Grid>


            <Grid container justifyContent="space-between" alignItems="center" rowSpacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={2.8} xl={2.8}>
                    <Stack spacing={1}>
                        <Divider sx={{ borderBottomWidth:3, width:"98%", borderColor:"#EF4122"}} />
                        <Box display="flex" justifyContent="left" sx={{ fontSize: 30, color:"#EF4122"}}>
                            BRAND
                        </Box>
                        <Box display="flex" justifyContent="left" sx={{ fontSize: 30, color:"#EF4122"}}>
                            IDENTITY
                        </Box>
                        
                        <Divider sx={{ borderBottomWidth: 3, width:"98%", borderColor:"#EF4122"}} />
                        
                        <Box display="flex" justifyContent="left">
                            <Image src={im1} alt="" style={{ width: '98%', height: 'auto' }}/>
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={2.8} xl={2.8}>
                    <Stack spacing={1}>
                        <Box display="flex" justifyContent="right">
                            <Link href="https://www.instagram.com/fifthatrium/">
                                <ArrowOutwardIcon sx={{ fontSize: 70, color:"red"}}/>
                            </Link>
                        </Box>
                        <Box display="flex" justifyContent="left"><a></a></Box>
                        <Box display="flex" justifyContent="left"><a></a></Box>
                        <Box display="flex" justifyContent="left"><a></a></Box>
                        <Box display="flex" justifyContent="left">
                            <Image src={im2} alt="" style={{ width: '98%', height: 'auto' }}/>
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={3.675} xl={3.675}>
                    <Box display="flex" justifyContent="left">
                        <Image src={im3} alt="" style={{ width: '98%', height: 'auto' }}/>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={4.25} lg={2.215} xl={2.215}>
                    <Image src={im4} alt="" style={{ width: '98%', height: 'auto' }}/>
                </Grid>
            </Grid>


            <Grid container justifyContent="space-between" alignItems="center" rowSpacing={2}>
                <Grid item xs={12} sm={12} md={6.5} lg={3.57} xl={3.57}>
                    <Image onClick={() => handleOpen(1)} src={im5} alt="" style={{ width: '98%', height: 'auto' }}/>
                    <Modal
                        open={open1}
                        onClose={() => handleClose(1)}
                        aria-labelledby="parent-modal-title"
                        aria-describedby="parent-modal-description"
                    >
                        <Stack sx={{ width: "100%", height: "100%"  }}>
                            <Stack sx={{ flexDirection: {md: "row"}}}>
                                <Box sx={{ width: "98%", color:"white"}}><h1 id="parent-modal-title">FIFTH ATRIUM</h1></Box>
                                <ArrowForwardIcon onClick={() => handleClose(1)} sx={{ fontSize:50, color:"white"}}/>
                            </Stack>
                            <Box display="flex" justifyContent="center" sx={{ width: "100%", height: "100%"  }}>
                                <ReactPlayer
                                    width="100%"
                                    height="98%"
                                    controls
                                    playing
                                    url="https://vimeo.com/784153092"
                                ></ReactPlayer>
                            </Box>
                        </Stack>
                    </Modal>
                </Grid>
                <Grid item xs={12} sm={12} md={5.5} lg={2.9} xl={2.9}>
                    <Stack spacing={5.25}>
                        <Box>
                            <Divider sx={{ borderBottomWidth:3, width:"98%", borderColor:"#EF4122"}} />
                            <Box sx={{ fontSize: 30, color:'red'}}>
                                ANIMATION
                            </Box>
                            <Divider sx={{ borderBottomWidth: 3, width:"98%", borderColor:"#EF4122"}} />
                        </Box>
                        <Image onClick={() => handleOpen(2)} src={im6} alt="" style={{ width: '98%', height: 'auto' }}/>
                        <Modal
                            open={open2}
                            onClose={() => handleClose(2)}
                            aria-labelledby="parent-modal-title"
                            aria-describedby="parent-modal-description"
                        >
                            <Stack sx={{ width: "100%", height: "100%"  }}>
                                <Stack sx={{ flexDirection: {md: "row"}}}>
                                    <Box sx={{ width: "98%", color:"white"}}><h1 id="parent-modal-title">FIFTH ATRIUM</h1></Box>
                                    <ArrowForwardIcon onClick={() => handleClose(2)} sx={{ fontSize:50, color:"white"}}/>
                                </Stack>
                                <Box display="flex" justifyContent="center" sx={{ width: "100%", height: "100%"  }}>
                                    <ReactPlayer
                                        width="100%"
                                        height="98%"
                                        controls
                                        playing
                                        url="https://vimeo.com/739298370"
                                    ></ReactPlayer>
                                </Box>
                            </Stack>
                        </Modal>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={5} lg={2.16} xl={2.16}>
                    <Image onClick={() => handleOpen(3)} src={im7} alt="" style={{ width: '98%', height: 'auto' }}/>
                    <Modal
                        open={open3}
                        onClose={() => handleClose(3)}
                        aria-labelledby="parent-modal-title"
                        aria-describedby="parent-modal-description"
                    >
                        <Stack sx={{ width: "100%", height: "100%"  }}>
                            <Stack sx={{ flexDirection: {md: "row"}}}>
                                <Box sx={{ width: "98%", color:"white"}}><h1 id="parent-modal-title">FIFTH ATRIUM</h1></Box>
                                <ArrowForwardIcon onClick={() => handleClose(3)} sx={{ fontSize:50, color:"white"}}/>
                            </Stack>
                            <Box display="flex" justifyContent="center" sx={{ width: "100%", height: "100%"  }}>
                                <ReactPlayer
                                    width="100%"
                                    height="98%"
                                    controls
                                    playing
                                    url="https://vimeo.com/771763898"
                                ></ReactPlayer>
                            </Box>
                        </Stack>
                    </Modal>
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={2.84} xl={2.84}>
                    <Stack spacing={2}>
                    <Box display="flex" justifyContent="right">
                            <Link href="https://www.instagram.com/fifthatrium/">
                                <ArrowOutwardIcon sx={{ fontSize: 70, color:"red"}}/>
                            </Link>
                        </Box>
                        <Image onClick={() => handleOpen(4)} src={im8} alt="" style={{ width: '98%', height: 'auto' }}/>
                        <Modal
                            open={open4}
                            onClose={() => handleClose(4)}
                            aria-labelledby="parent-modal-title"
                            aria-describedby="parent-modal-description"
                        >
                            <Stack sx={{ width: "100%", height: "100%"  }}>
                                <Stack sx={{ flexDirection: {md: "row"}}}>
                                    <Box sx={{ width: "98%", color:"white"}}><h1 id="parent-modal-title">FIFTH ATRIUM</h1></Box>
                                    <ArrowForwardIcon onClick={() => handleClose(4)} sx={{ fontSize:50, color:"white"}}/>
                                </Stack>
                                <Box display="flex" justifyContent="center" sx={{ width: "100%", height: "100%"  }}>
                                    <ReactPlayer
                                        width="100%"
                                        height="98%"
                                        controls
                                        playing
                                        url="https://vimeo.com/689855601"
                                    ></ReactPlayer>
                                </Box>
                            </Stack>
                        </Modal>
                    </Stack>
                </Grid>
            </Grid>


            <Grid container justifyContent="space-between" alignItems="center" rowSpacing={2}>
                <Grid item xs={12} sm={12} md={7} lg={2.87} xl={2.87}>
                    <Stack spacing={2.85}>
                        <Box>
                            <Divider sx={{ borderBottomWidth:3, width:"98%", borderColor:"red"}} />
                            <Box sx={{ fontSize: 30, color:'red'}}>
                                POSTER
                            </Box>
                            <Box sx={{ fontSize: 30, color:'red'}}>
                                DESIGN
                            </Box>
                            <Divider sx={{ borderBottomWidth: 3, width:"98%", borderColor:"red"}} />
                        </Box>
                        <Image src={im9} alt="" style={{ width: '98%', height: 'auto' }}/>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={5} lg={2.20} xl={2.20}>
                    <Image src={im10} alt="" style={{ width: '98%', height: 'auto' }}/>
                </Grid>
                <Grid item xs={12} sm={12} md={5.5} lg={3.02} xl={3.02}>
                    <Stack spacing={1}>
                    <Box display="flex" justifyContent="right">
                            <Link href="https://www.instagram.com/fifthatrium/">
                                <ArrowOutwardIcon sx={{ fontSize: 70, color:'red'}}/>
                            </Link>
                        </Box>
                        <Image src={im11} alt="" style={{ width: '98%', height: 'auto' }}/>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={6.5} lg={3.68} xl={3.68}>
                    <Image src={im12} alt="" style={{ width: '98%', height: 'auto' }}/>
                </Grid>
            </Grid>


            <Grid container justifyContent="space-between" alignItems="center" rowSpacing={2}>
                <Grid item xs={12} sm={12} md={4.5} lg={2.25} xl={2.25} order={{ md: 3, lg: 1 }}>
                    <Image src={im13} alt="" style={{ width: '98%', height: 'auto' }}/>
                </Grid>
                <Grid item xs={12} sm={12} md={7.5} lg={3.75} xl={3.75} order={{ md: 4, lg: 2 }}>
                    <Image src={im14} alt="" style={{ width: '98%', height: 'auto' }}/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={2.95} xl={2.95} order={{ md: 1, lg: 3 }}>
                    <Stack spacing={2.85}>
                        <Box>
                            <Divider sx={{ borderBottomWidth:3, width:"98%", borderColor:"red"}} />
                            <Box sx={{ fontSize: 30, color:"red"}}>
                                CAMPAIGN
                            </Box>
                            <Box sx={{ fontSize: 30, color:"red"}}>
                                CREATION
                            </Box>
                            <Divider sx={{ borderBottomWidth: 3, width:"98%", borderColor:"red"}} />
                        </Box>
                        <Image src={im15} alt="" style={{ width: '98%', height: 'auto' }}/>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3.05} xl={3.05} order={{ md: 2, lg: 4 }}>
                    <Stack spacing={1}>
                    <Box display="flex" justifyContent="right">
                            <Link href="https://www.instagram.com/fifthatrium/">
                                <ArrowOutwardIcon sx={{ fontSize: 70, color:"red"}}/>
                            </Link>
                        </Box>
                        <Image src={im16} alt="" style={{ width: '98%', height: 'auto' }}/>
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
        </Box>
        </Stack>
        </ThemeProvider>
);}