import * as React from 'react';
import Grid from '@mui/material/Grid';
import BlogCard from '/components/blogCard.js'; 



// const CardDiv = styled.div(() =>
//   mq({
//     background: '#fff',
//     borderRadius: '10px',
//     border: `1px solid #f1f2f2`,
//     boxShadow: '0 5px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
//     width: ['100%', null, '85%', '50%'],
//   }),
// );

export default function BlogGroup(data) {
    console.log("in group", data)
    return(
        <Grid container direction='row' justifyContent="left" alignItems="left">
            {data.data.map(blog => {
                return(
                    <Grid item xl={1400}>
                        <BlogCard blogData={blog}></BlogCard>
                    </Grid>
                )
            })}
        </Grid>
    )
}


