import '../App.css';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
    return (
        <AppBar position='static' sx={{ backgroundColor: 'grey'}}>
            <Toolbar>
                <Typography variant='h6' sx={{margin: 'auto', color: 'orange'}}>
                    Shopaholic
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header