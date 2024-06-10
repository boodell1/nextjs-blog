import * as React from 'react';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function NavBar() {

    return (
        <Paper direction='row' sx={{backgroundColor:'#009688', color:'white', height:64}}>
            <Toolbar variant='regular' width='100%'>
            <Typography variant='h4' marginRight={3}>Title</Typography>
            <Stack direction='row' spacing={3}>
                <IconButton size='small' sx={{color:'white'}}>Label</IconButton>
                <IconButton size='small' sx={{color:'white'}}>Label</IconButton>
                <IconButton size='small' sx={{color:'white'}}>Label</IconButton>
            </Stack>
            <Stack direction='row' marginLeft='auto' marginRight={0} spacing={1}>
                <ShoppingCartIcon sx={{color:'white'}}></ShoppingCartIcon>
                <AccountCircleIcon sx={{color:'#BDBDBD'}}></AccountCircleIcon>
            </Stack>
            </Toolbar>
        </Paper>
    );
}

// width: 100%;
// /* align-self: end; */
// /* align-items: end; */
// direction: rtl;