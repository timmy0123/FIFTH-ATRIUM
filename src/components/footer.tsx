import { Box, Stack } from "@mui/material";

export const Footer: React.FC = () => {
    return(
        <Stack spacing={5}>
            <Box />
            <Stack sx={{ flexDirection: {md: "row"}}}>
                <Box sx={{width:"85%"}}>
                    <Box sx={{fontSize:40}}>FITTH</Box>
                    <Box sx={{fontSize:40}}>ATRIUM</Box>
                </Box>
                <Box display="flex" justifyContent="right">
                    <Stack>
                        <Box sx={{fontSize:20}}>hello@fifthatrium.com</Box>
                        <Box sx={{fontSize:20}}>INSTAGRAM</Box>
                        <Box sx={{fontSize:20}}>FACEBOOK</Box>
                    </Stack>
                </Box>
            </Stack>
            <Box sx={{fontSize:15}}>2023 @ FIFTH ATRIUM. All Rights reserved</Box>
        </Stack>


    );}