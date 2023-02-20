import * as React from 'react';
import { Box, Stack, Modal, Grid } from "@mui/material";
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
        <Stack sx={{ bgcolor: '#DAD5D2' }} >
        <Box marginX={2} marginY={10}>
        <Stack spacing={10}>
            <Grid container>
                <Grid lg={4.8} xl={4.8}><a></a></Grid>
                <Grid lg={7} xl={7}>
                    <Box display="flex" justifyContent="left" sx={{ fontSize: 50, color:"#EF4122"}}> 
                        LIFE IS
                    </Box>
                </Grid>
                <Grid lg={5.25} xl={5.25}><a></a></Grid>
                <Grid lg={6} xl={6}>
                    <Box display="flex" justifyContent="left" sx={{ fontSize: 50, color:"#EF4122"}}>
                        OUR STORIES
                    </Box>
                </Grid>
                <Grid lg={5} xl={5}><a></a></Grid>
                <Grid lg={7} xl={7}>
                    <Box display="flex" justifyContent="left" sx={{ fontSize: 50, color:"#EF4122"}}>
                        AND
                    </Box>
                </Grid>
                <Grid lg={12} xl={12}>
                    <Box display="flex" justifyContent="center" sx={{ fontSize: 50, color:"#EF4122"}}>
                        WE BRING YOUR STORY
                    </Box>
                </Grid>
                <Grid lg={6.5} xl={6.5}><a></a></Grid>
                <Grid lg={5} xl={5}>
                    <Box display="flex" justifyContent="left" sx={{ fontSize: 50, color:"#EF4122"}}>
                        To LIFE
                    </Box>
                </Grid>
            </Grid>


            <Grid container>
                <Grid lg={1} xl={1}><a></a></Grid>
                <Grid lg={5} xl={5}>
                    <Stack display="flex" justifyContent="left" sx={{ flexDirection: {sx: "column", md: "row"}}}>
                        <FiberManualRecordIcon sx={{ fontSize: 35}}/>
                        <Box sx={{ fontSize: 35}}>
                            Brand Identity
                        </Box>
                    </Stack>
                </Grid>
                <Grid lg={1} xl={1}><a></a></Grid>
                <Grid lg={5} xl={5}>
                    <Stack display="flex" justifyContent="left" sx={{ flexDirection: {sx: "column", md: "row"}}}>
                        <FiberManualRecordIcon sx={{ fontSize: 35}}/>
                        <Box sx={{ fontSize: 35}}>
                            Logo Animation
                        </Box>
                    </Stack>
                </Grid>


                <Grid lg={1.5} xl={1.5}><a></a></Grid>
                <Grid lg={3} xl={3}>
                    <Stack display="flex" justifyContent="left" sx={{ flexDirection: {sx: "column", md: "row"}}}>
                        <FiberManualRecordIcon sx={{ fontSize: 35}}/>
                        <Box sx={{ fontSize: 35}}>
                            Title Design
                        </Box>
                    </Stack>
                </Grid>
                <Grid lg={2} xl={2}><a></a></Grid>
                <Grid lg={5.5} xl={5.5}>
                    <Stack display="flex" justifyContent="left" sx={{ flexDirection: {sx: "column", md: "row"}}}>
                        <FiberManualRecordIcon sx={{ fontSize: 35}}/>
                        <Box sx={{ fontSize: 35}}>
                            Film/Project Pitch Deck
                        </Box>
                    </Stack>
                </Grid>


                <Grid lg={1} xl={1}><a></a></Grid>
                <Grid lg={3} xl={3}>
                    <Stack display="flex" justifyContent="left" sx={{ flexDirection: {sx: "column", md: "row"}}}>
                        <FiberManualRecordIcon sx={{ fontSize: 35}}/>
                        <Box sx={{ fontSize: 35}}>
                            Animation
                        </Box>
                    </Stack>
                </Grid>
                <Grid lg={2} xl={2}><a></a></Grid>
                <Grid lg={6} xl={6}>
                    <Stack display="flex" justifyContent="cleftenter" sx={{ flexDirection: {sx: "column", md: "row"}}}>
                        <FiberManualRecordIcon sx={{ fontSize: 35}}/>
                        <Box sx={{ fontSize: 35}}>
                            Motion Graphics
                        </Box>
                    </Stack>
                </Grid>


                <Grid lg={1.5} xl={1.5}><a></a></Grid>
                <Grid lg={4.5} xl={4.5}>
                    <Stack display="flex" justifyContent="left" sx={{ flexDirection: {sx: "column", md: "row"}}}>
                        <FiberManualRecordIcon sx={{ fontSize: 35}}/>
                        <Box sx={{ fontSize: 35}}>
                            Campaign Creation
                        </Box>
                    </Stack>
                </Grid>
                <Grid lg={2} xl={2}><a></a></Grid>
                <Grid lg={4} xl={4}>
                    <Stack display="flex" justifyContent="left" sx={{ flexDirection: {sx: "column", md: "row"}}}>
                        <FiberManualRecordIcon sx={{ fontSize: 35}}/>
                        <Box sx={{ fontSize: 35}}>
                            Poster Design
                        </Box>
                    </Stack>
                </Grid>
                <Grid lg={1} xl={1}><a></a></Grid>
                <Grid lg={6} xl={6}>
                <Stack display="flex" justifyContent="left" sx={{ flexDirection: {sx: "column", md: "row"}}}>
                    <FiberManualRecordIcon sx={{ fontSize: 35}}/>
                    <Box sx={{ fontSize: 35}}>
                        Explainer Video
                    </Box>
                </Stack>
                </Grid>
            </Grid>


            <Grid container spacing={3}>
                <Grid lg={3} xl={3}>
                    <Stack spacing={1}>
                        <Box display="flex" justifyContent="left">
                            <Divider sx={{ borderBottomWidth:3, width:"98%", borderColor:"#EF4122"}} />
                        </Box>
                        <Box display="flex" justifyContent="left" sx={{ fontSize: 30, color:"#EF4122"}}>
                            BRAND
                        </Box>
                        <Box display="flex" justifyContent="left" sx={{ fontSize: 30, color:"#EF4122"}}>
                            IDENTITY
                        </Box>
                        <Box display="flex" justifyContent="left">
                            <Divider sx={{ borderBottomWidth: 3, width:"98%", borderColor:"#EF4122"}} />
                        </Box>
                        <Box display="flex" justifyContent="left">
                            <Image src={im1} alt="" style={{ width: '98%', height: 'auto' }}/>
                        </Box>
                    </Stack>
                </Grid>
                <Grid lg={3} xl={3}>
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
                <Grid lg={3.675} xl={3.675}>
                    <Box display="flex" justifyContent="left">
                        <Image src={im3} alt="" style={{ width: '98%', height: 'auto' }}/>
                    </Box>
                </Grid>
                <Grid lg={2.215} xl={2.215}>
                    <Box display="flex" justifyContent="left">
                        <Image src={im4} alt="" style={{ width: '98%', height: 'auto' }}/>
                    </Box>
                </Grid>
            </Grid>


            <Grid container spacing={6}>
                <Grid lg={3.55} xl={3.55}>
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
                <Grid lg={3.05} xl={3.05}>
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
                <Grid lg={2.15} xl={2.15}>
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
                <Grid lg={2.97} xl={2.97}>
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


            <Grid container spacing={6}>
                <Grid lg={2.95} xl={2.95}>
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
                <Grid lg={2.15} xl={2.15}>
                    <Image src={im10} alt="" style={{ width: '98%', height: 'auto' }}/>
                </Grid>
                <Grid lg={3.07} xl={3.07}>
                    <Stack spacing={1}>
                    <Box display="flex" justifyContent="right">
                            <Link href="https://www.instagram.com/fifthatrium/">
                                <ArrowOutwardIcon sx={{ fontSize: 70, color:'red'}}/>
                            </Link>
                        </Box>
                        <Image src={im11} alt="" style={{ width: '98%', height: 'auto' }}/>
                    </Stack>
                </Grid>
                <Grid lg={3.6} xl={3.6}>
                    <Image src={im12} alt="" style={{ width: '98%', height: 'auto' }}/>
                </Grid>
            </Grid>


            <Grid container spacing={6}>
                <Grid lg={2.15} xl={2.15}>
                    <Image src={im13} alt="" style={{ width: '98%', height: 'auto' }}/>
                </Grid>
                <Grid lg={3.55} xl={3.55}>
                    <Image src={im14} alt="" style={{ width: '98%', height: 'auto' }}/>
                </Grid>
                <Grid lg={2.93} xl={2.95}>
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
                <Grid lg={3.03} xl={3.03}>
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
);}