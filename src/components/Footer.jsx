import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {
    return (
        <AppBar position='static' sx={{ marginTop: '2rem' }}>
            <Toolbar>
                <Typography variant='h7' sx={{margin: 'auto'}}>
                    Made by Daniel Kim
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Footer