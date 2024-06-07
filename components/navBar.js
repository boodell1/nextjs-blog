import * as React from 'react';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import ImageAvatars from './avatar';


export default function NavBar() {

    return (
        <Paper elevation={0} square='true' sx={{backgroundColor:'#009688', width:'100%'}}>
            <Toolbar variant='regular' ></Toolbar>
            <Typography variant='body1'>Title</Typography>
            <Stack direction='column' spacing={0}>
                <IconButton size='medium'></IconButton>
                <IconButton size='medium'></IconButton>
                <ImageAvatars></ImageAvatars>
            </Stack>
        </Paper>
    );

}