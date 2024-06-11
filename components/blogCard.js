import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const StyledCard = styled(Card)(() => ({
    width: 280,
    maxHeight: 346,
    marginLeft: '12px',
    marginTop: '12px',
  }));

const StyledContent = styled(CardContent)(() => ({
    overflow:'hidden',
    lineHeight:'1.5em',
    maxHeight:'4.5em',
}))

const StyledHeader = styled(CardHeader)(() => ({
    padding: 0,
}))

const StyledButton = styled(Button)(({theme}) => ({
    color: theme.palette.secondary.main,
    borderRadius: '50px',
    borderColor: theme.palette.secondary.main,
    textTransform: 'none',
    '&:hover': {
        borderColor: theme.palette.secondary.main,
        backgroundColor: 'white'
      }
}))

export default function BlogCard(data) {
  return (
    <StyledCard> 
        <Paper variant='elevation' elevation={1}>
            <CardMedia
                component="img"
                alt="article title photo" //todo austen maybe this should be data in cms
                height='50%'
                image={data.blogData.image || '../images/_CardMedia_default.jpg'}
            />
            <StyledContent>
                <StyledHeader title={data.blogData.title} titleTypographyProps={{fontSize:'1em' }}></StyledHeader>
                <Typography variant="body2" color="text.secondary" >
                    {data.blogData.multi_line}
                </Typography>
            </StyledContent>
            <CardActions>
                <StyledButton href={`/posts/${data.blogData.id}`} variant="outlined" size='small'>Read more</StyledButton>
            </CardActions>
      </Paper>
    </StyledCard>
  );
}
