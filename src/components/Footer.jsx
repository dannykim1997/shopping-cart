import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {
    return (
        <AppBar position='static' sx={{ marginTop: '2rem', backgroundColor: 'orange' }}>
            <Toolbar>
                <Typography variant='h7' sx={{margin: 'auto', color: 'white'}}>
                    Made by Daniel Kim
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Footer