import * as React from 'react';
import Grid from '@mui/material/Grid';
import BlogCard from '/components/BlogCard.js'; 
import { styled } from '@mui/material/styles';


const CardGrid = styled(Grid)(() => ({
    direction:'row',
    justifyContent: 'left',
    alignItems: 'left',
}))

export default function BlogGroup(data) {
    return(
        <CardGrid container>
            {data.data.map(blog => {
                return(
                    <CardGrid item>
                        <BlogCard blogData={blog}></BlogCard>
                    </CardGrid>
                )
            })}
        </CardGrid>
    )
}


