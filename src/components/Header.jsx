import '../App.css';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6' sx={{margin: 'auto'}}>
                    Shopaholic
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header