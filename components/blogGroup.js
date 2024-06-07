import * as React from 'react';
import Grid from '@mui/material/Grid';
import BlogCard from '/components/blogCard.js'; 


export default function BlogGroup(data) {
    console.log("in group", data)
    return(
        <Grid container direction='row' justifyContent="center" alignItems="center">
            {data.data.map(blog => {
                return(
                    <Grid item xs>                  
                        <BlogCard blogData={blog}></BlogCard>
                    </Grid>
                )
            })}
        </Grid>
    )
}