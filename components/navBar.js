import * as React from 'react';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { styled } from '@mui/material/styles';
import { AppBar, Container } from '@mui/material';


const StyledPaper = styled(Paper)(({ theme }) => ({
    direction:'row',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    height: 64,
    display: 'flex',
}))

const NavLink = styled(IconButton)(() => ({
    fontSize: '0.8em', 
    color: 'white'
}))

export default function NavBar(title) {
    return (
        <AppBar data-testid='navbar'>
            <Container maxWidth='xl'>
                <Toolbar variant='regular'>
                    <Typography variant='body1' marginRight={2}>{title.title}</Typography>
                    <Stack direction='row' spacing={1}>
                        <NavLink>Label</NavLink>
                        <NavLink>Label</NavLink>
                        <NavLink>Label</NavLink>
                    </Stack>
                    <Stack direction='row' marginLeft='auto' marginRight={0} spacing={1}>
                        <ShoppingCartIcon data-testid="ShoppingCartIcon" sx={{color:'white'}}></ShoppingCartIcon>
                        <AccountCircleIcon data-testid="AccountCircleIcon" sx={{color:'#BDBDBD'}}></AccountCircleIcon>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
