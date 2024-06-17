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
        <CardGrid container data-testid="card-grid">
            {data.data.map(({title, image, id, multi_line}) => (
                    <React.Fragment key={id}>
                        <BlogCard title={title} image={image} id={id} multi_line={multi_line}/>
                    </React.Fragment>
            ))}
        </CardGrid>
    )
}


