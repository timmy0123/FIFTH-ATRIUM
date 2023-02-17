import * as React from 'react';
import { Box, Stack, Typography  } from "@mui/material";
import Divider from '@mui/material/Divider';
import Link from "next/link";

export const Contact: React.FC = () => (
    <Stack spacing={5}>
        <Box></Box>
        <Box display="flex" justifyContent="center">
            <Link href={"mailto:hello@fifthatrium.com"}>
                <Typography sx={{textDecoration: 'underline', fontSize: 40}}>hello@fifthatrium.com</Typography>
            </Link>
        </Box>
        <Box display="flex" justifyContent="center">
            <Stack spacing={3}>
                <Divider sx={{ borderWidth: 1.5, width:"1400px"}} />
                <Box display="flex" justifyContent="center">
                    <Stack direction="row" spacing={3} sx={{ flexDirection: {md: "row"}}}>
                        <Box display="flex" justifyContent="right" sx={{ fontSize: 25,width:"45%"}}>Contact us</Box>
                        <Divider orientation='vertical' flexItem variant="middle" sx={{borderWidth: 1.5}}/>
                        <Box sx={{ fontSize: 20,width: "50%"}}>Request to see our Full Portfolio or Schedule a time to chat about your Next Project!</Box>
                    </Stack>
                </Box>
                <Divider sx={{ borderWidth: 1.5, width:"1400px"}} />
            </Stack>
        </Box>
    </Stack>
)