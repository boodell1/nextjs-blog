import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BlogCard() {
  return (
    // todo austen height is supposed to hug?
    <Card sx={{ width: 280, height: 'fit-content', mt: 123, ml:308 }}> 
      <CardMedia
        component="img"
        alt=""
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Post Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Summary
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
  );
}