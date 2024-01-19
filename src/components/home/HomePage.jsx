import { Typography, Box, Paper } from "@mui/material";

const HomePage = () => {
    return (
        <Box height="100vh" display="flex" alignItems="center" justifyContent="center">
            <Paper variant="outlined" sx={{padding: 3, borderColor: 'orange'}}>
                <Typography variant="h5" align="center" sx={{color: 'grey'}}>
                    Shopaholic is a one-stop shop for all your shopping needs
                </Typography>
            </Paper>
        </Box>
    );
}

export default HomePage;
