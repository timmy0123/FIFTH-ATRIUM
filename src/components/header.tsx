import { Box, Stack } from "@mui/material";

export const Header: React.FC = () => {
    return(
        <header>
            <Stack sx={{ bgcolor: '#DAD5D2' }}>
            <Stack sx={{ flexDirection: {sx: "column", md: "row"}}}>
                <Box component="div" sx={{ width:'96%', display: 'inline', fontSize:60}}>FIFTH ATRIUM</Box>
                <Stack justifyContent="end">
                    <Box component="div" sx={{ display: 'inline' }}>PROJECT</Box>
                    <Box component="div" sx={{ display: 'inline' }}>ABOUT</Box>
                    <Box component="div" sx={{ display: 'inline' }}>TEAM</Box>
                    <Box component="div" sx={{ display: 'inline' }}>ARTISTS</Box>
                    <Box component="div" sx={{ display: 'inline' }}>CONTACT</Box>
                </Stack>
            </Stack>
            </Stack>
        </header>
    );
}