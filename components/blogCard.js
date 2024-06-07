import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


import BlogButton from './blogButton';

export default function BlogCard(data) {
    console.log("blogData in blogCard", data)
    console.log("title in blogcard", data.blogData.title)
  return (
    <Card sx={{ width: 345, height: 346, margin_top: 123, margin_left:308 }}> 
      <CardMedia
        component="img"
        alt=""
        height='50%'
        image={data.blogData.image || '../images/_CardMedia_default.jpg'}
      />
      <CardContent sx={{overflow:'hidden', lineHeight:'1.5em', maxHeight:'4.5em'}}>
        <Typography variant="h7" component="div">
          {data.blogData.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" >
            {data.blogData.multi_line}
        </Typography>
      </CardContent>
      <CardActions>
        <BlogButton route={`/posts/${data.blogData.id}`}></BlogButton>
      </CardActions>
    </Card>
  );
}