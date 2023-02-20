import { Box, Stack } from "@mui/material";

export const Header: React.FC = () => {
    return(
        <header>
            <Stack spacing={5} sx={{ bgcolor: '#DAD5D2'}}>
                <Box sx={{m:2}}>
                <Stack sx={{ flexDirection: {sx: "column", md: "row"}}}>
                    <Box component="div" sx={{ width:'96%', display: 'inline', fontSize:60}}>FIFTH ATRIUM</Box>
                    <Stack justifyContent="end">
                        <Box component="div" sx={{ display: 'inline', fontSize:24 }}>PROJECT</Box>
                        <Box component="div" sx={{ display: 'inline', fontSize:24 }}>ABOUT</Box>
                        <Box component="div" sx={{ display: 'inline', fontSize:24 }}>TEAM</Box>
                        <Box component="div" sx={{ display: 'inline', fontSize:24 }}>ARTISTS</Box>
                        <Box component="div" sx={{ display: 'inline', fontSize:24 }}>CONTACT</Box>
                    </Stack>
                </Stack>
                </Box>
            </Stack>
        </header>
    );
}