import * as React from 'react';
import Button from '@mui/material/Button';

export default function BlogButton(route) {
    console.log(route)
    return (
        <Button href={route.route} variant="outlined" sx={{color:"#ff9800", borderRadius:'50px', borderColor: "#ff9800"}}>Read More</Button>
    )
}