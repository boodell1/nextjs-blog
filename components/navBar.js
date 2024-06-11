import * as React from 'react';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { styled } from '@mui/material/styles';


const StyledPaper = styled(Paper)(({ theme }) => ({
    direction:'row',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    height: 64,
}))

const NavLink = styled(IconButton)(() => ({
    fontSize: '0.8em', 
    color: 'white'
}))

export default function NavBar(title) {
    return (
        <StyledPaper>
            <Toolbar variant='regular'>
            <Typography variant='h6' marginRight={2}>{title.title}</Typography>
            <Stack direction='row' spacing={2}>
                <NavLink>Label</NavLink>
                <NavLink>Label</NavLink>
                <NavLink>Label</NavLink>
            </Stack>
            <Stack direction='row' marginLeft='auto' marginRight={0} spacing={1}>
                <ShoppingCartIcon sx={{color:'white'}}></ShoppingCartIcon>
                <AccountCircleIcon sx={{color:'#BDBDBD'}}></AccountCircleIcon>
            </Stack>
            </Toolbar>
        </StyledPaper>
    );
}
