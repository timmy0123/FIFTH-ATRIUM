import * as React from 'react';
import { Box, Stack, Typography, Grid  } from "@mui/material";
import Divider from '@mui/material/Divider';
import Link from "next/link";

export const Contact: React.FC = () => (
    <Stack sx={{ bgcolor: '#EF4122' }}>
    <Box marginTop={10} marginBottom={4} marginX={6}>
    <Stack spacing={5}>
        <Grid container>
            <Grid sm={12} md={12} lg={12} xl={12}>
                <Box display="flex" justifyContent="center" sx={{'&:hover': {backgroundColor:"black",color:'#EF4122'}}}>
                    <Link href={"mailto:hello@fifthatrium.com"}>
                        <Typography sx={{textDecoration: 'underline', fontSize: 40}}>hello@fifthatrium.com</Typography>
                    </Link>
                </Box>
            </Grid>
        </Grid>
        
            
        <Stack spacing={3}>
            <Grid container>
                <Grid sm={12} md={12} lg={12} xl={12}>
                    <Box display="flex" justifyContent="center">
                        <Divider sx={{ borderWidth: 1.5, width:"100%", borderColor:"black"}} />
                    </Box>
                </Grid>
            </Grid>
            <Box display="flex" justifyContent="center">
                <Grid container>
                    <Grid sm={5} md={5} lg={5} xl={5}>
                        <Box display="flex" justifyContent="right" sx={{ fontSize: 25}}>Contact us</Box>
                    </Grid>
                    <Grid sm={1} md={1} lg={1} xl={1}><a></a></Grid>
                    <Divider orientation='vertical'  sx={{borderWidth: 1.5, borderColor:"black"}}/>
                    <Grid sm={1} md={1} lg={1} xl={1}><a></a></Grid>
                    <Grid sm={4} md={4} lg={4} xl={4}>
                        <Box sx={{ fontSize: 20}}>Request to see our Full Portfolio or Schedule a time to chat about your Next Project!</Box>
                    </Grid>
                </Grid>
            </Box>
            <Grid container>
                <Grid sm={12} md={12} lg={12} xl={12}>
                    <Box display="flex" justifyContent="center">
                        <Divider sx={{ borderWidth: 1.5, width:"100%", borderColor:"black"}} />
                    </Box>
                </Grid>
            </Grid>
        </Stack>
            

    </Stack>
    </Box>
    </Stack>
)