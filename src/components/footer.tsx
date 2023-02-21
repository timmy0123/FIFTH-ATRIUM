import { Box, Stack, Grid } from "@mui/material";

export const Footer: React.FC = () => {
    return(
        <Stack sx={{ bgcolor: '#000000'}}>
        <Box marginX={4} marginBottom={5} marginTop={15}>
        <Stack spacing={5}>
            <Grid container>
                <Grid item sm={5} md={5} lg={10} xl={10}>
                    <Box sx={{fontSize:60, color:"white"}}>FITTH</Box>
                    <Box sx={{fontSize:60, color:"white"}}>ATRIUM</Box>
                </Grid>
                <Grid item sm={5} md={5} lg={2} xl={2}>
                    <Stack spacing={2}>
                        <Box sx={{fontSize:30, color:'white'}}>hello@fifthatrium.com</Box>
                        <Box sx={{fontSize:30, color:'white'}}>INSTAGRAM</Box>
                        <Box sx={{fontSize:30, color:'white'}}>FACEBOOK</Box>
                    </Stack>
                </Grid>
            </Grid>
            <Box sx={{fontSize:15, color:'white'}}>2023 @ FIFTH ATRIUM. All Rights reserved</Box>
        </Stack>
        </Box>
        </Stack>
    );}