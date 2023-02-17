import * as React from 'react';
import { Box, Stack } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
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

export const Project: React.FC = () => (
    <Stack spacing={5}>
        <Box>
            <Box display="flex" justifyContent="center" sx={{ fontSize: 50}}> 
                LIFE IS
            </Box>
            <Box display="flex" justifyContent="center" sx={{ fontSize: 50}}>
                OUR STORIES
            </Box>
            <Box display="flex" justifyContent="center" sx={{ fontSize: 50}}>
                AND
            </Box>
            <Box display="flex" justifyContent="center" sx={{ fontSize: 50}}>
                WE BRING YOUR STORY
            </Box>
        </Box>
        <Box>
            <Stack display="flex" justifyContent="center" sx={{ flexDirection: {sx: "column", md: "row"}}}>
                <FiberManualRecordIcon sx={{ fontSize: 30}}/>
                <Box sx={{ fontSize: 30}}>
                    Brand Identity
                </Box>
                <FiberManualRecordIcon sx={{ fontSize: 30}}/>
                <Box sx={{ fontSize: 30}}>
                    Logo Animation
                </Box>
            </Stack>
            <Stack display="flex" justifyContent="center" sx={{ flexDirection: {sx: "column", md: "row"}}}>
                <FiberManualRecordIcon sx={{ fontSize: 30}}/>
                <Box sx={{ fontSize: 30}}>
                    Title Design
                </Box>
                <FiberManualRecordIcon sx={{ fontSize: 30}}/>
                <Box sx={{ fontSize: 30}}>
                    Film/Project Pitch Deck
                </Box>
            </Stack>
            <Stack display="flex" justifyContent="center" sx={{ flexDirection: {sx: "column", md: "row"}}}>
                <FiberManualRecordIcon sx={{ fontSize: 30}}/>
                <Box sx={{ fontSize: 30}}>
                    Animation
                </Box>
                <FiberManualRecordIcon sx={{ fontSize: 30}}/>
                <Box sx={{ fontSize: 30}}>
                    Motion Graphics
                </Box>
            </Stack>
            <Stack display="flex" justifyContent="center" sx={{ flexDirection: {sx: "column", md: "row"}}}>
                <FiberManualRecordIcon sx={{ fontSize: 30}}/>
                <Box sx={{ fontSize: 30}}>
                    Campaign Creation
                </Box>
                <FiberManualRecordIcon sx={{ fontSize: 30}}/>
                <Box sx={{ fontSize: 30}}>
                    Poster Design
                </Box>
            </Stack>
            <Stack display="flex" justifyContent="center" sx={{ flexDirection: {sx: "column", md: "row"}}}>
                <FiberManualRecordIcon sx={{ fontSize: 30}}/>
                <Box sx={{ fontSize: 30}}>
                    Explainer Video
                </Box>
            </Stack>
        </Box>
        <Box>
            <Stack direction="row" spacing={2} sx={{ flexDirection: {md: "row"}}}>
                <Stack spacing={1}>
                    <Box>
                        <Divider sx={{ borderBottomWidth:3, width:"350px", color:"red"}} />
                        <Box sx={{ fontSize: 30}}>
                            BRAND
                        </Box>
                        <Box sx={{ fontSize: 30}}>
                            IDENTITY
                        </Box>
                        <Divider sx={{ borderBottomWidth: 3, width:"350px"}} />
                    </Box>
                    <Image src={im1} alt="" width="400"/>
                </Stack>
                <Stack spacing={1}>
                <Box display="flex" justifyContent="right">
                        <Link href="https://www.instagram.com/fifthatrium/">
                            <ArrowOutwardIcon sx={{ fontSize: 70}}/>
                        </Link>
                    </Box>
                    <Image src={im2} alt="" width="400"/>
                </Stack>
                <Image src={im3} alt="" width="400" height="485"/>
                <Image src={im4} alt="" width="260" height="485"/>
            </Stack>
        </Box>
        <Box>
            <Stack direction="row" spacing={2} sx={{ flexDirection: {md: "row"}}}>
                <Image src={im5} alt="" width="400" height="485"/>
                <Stack spacing={5.25}>
                    <Box>
                        <Divider sx={{ borderBottomWidth:3, width:"350px", color:"red"}} />
                        <Box sx={{ fontSize: 30}}>
                            ANIMATION
                        </Box>
                        <Divider sx={{ borderBottomWidth: 3, width:"350px"}} />
                    </Box>
                    <Image src={im6} alt="" width="400"/>
                </Stack>
                <Image src={im7} alt="" width="260" height="485"/>
                <Stack spacing={2}>
                <Box display="flex" justifyContent="right">
                        <Link href="https://www.instagram.com/fifthatrium/">
                            <ArrowOutwardIcon sx={{ fontSize: 70}}/>
                        </Link>
                    </Box>
                    <Image src={im8} alt="" width="400"/>
                </Stack>
            </Stack>
        </Box>
        <Box>
            <Stack direction="row" spacing={2} sx={{ flexDirection: {md: "row"}}}>
                <Stack spacing={2.85}>
                    <Box>
                        <Divider sx={{ borderBottomWidth:3, width:"350px", color:"red"}} />
                        <Box sx={{ fontSize: 30}}>
                            POSTER
                        </Box>
                        <Box sx={{ fontSize: 30}}>
                            DESIGN
                        </Box>
                        <Divider sx={{ borderBottomWidth: 3, width:"350px"}} />
                    </Box>
                    <Image src={im9} alt="" width="385"/>
                </Stack>
                <Image src={im10} alt="" width="260" height="485"/>
                <Stack spacing={1}>
                <Box display="flex" justifyContent="right">
                        <Link href="https://www.instagram.com/fifthatrium/">
                            <ArrowOutwardIcon sx={{ fontSize: 70}}/>
                        </Link>
                    </Box>
                    <Image src={im11} alt="" width="400"/>
                </Stack>
                <Image src={im12} alt="" width="415" height="485"/>
            </Stack>
        </Box>
        <Box>
            <Stack direction="row" spacing={2} sx={{ flexDirection: {md: "row"}}}>
                <Image src={im13} alt="" width="260" height="485"/>
                <Image src={im14} alt="" width="415" height="485"/>
                <Stack spacing={2.85}>
                    <Box>
                        <Divider sx={{ borderBottomWidth:3, width:"350px", color:"red"}} />
                        <Box sx={{ fontSize: 30}}>
                            CAMPAIGN
                        </Box>
                        <Box sx={{ fontSize: 30}}>
                            CREATION
                        </Box>
                        <Divider sx={{ borderBottomWidth: 3, width:"350px"}} />
                    </Box>
                    <Image src={im15} alt="" width="385"/>
                </Stack>
                <Stack spacing={1}>
                <Box display="flex" justifyContent="right">
                        <Link href="https://www.instagram.com/fifthatrium/">
                            <ArrowOutwardIcon sx={{ fontSize: 70}}/>
                        </Link>
                    </Box>
                    <Image src={im16} alt="" width="400"/>
                </Stack>
            </Stack>
        </Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
    </Stack>

)