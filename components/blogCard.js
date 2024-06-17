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
    marginLeft: '12px',
    marginTop: '12px',
    display: 'flex',
    flexDirection: 'column',
  }));

const StyledContent = styled(CardContent)(() => ({
    overflow:'hidden',
    lineHeight:'1.5em',
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
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

const StyledSummary = styled(Typography)(() => ({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 3, /* number of lines to show */
    lineClamp: 3,
    WebkitBoxOrient: 'vertical',
}))



export default function BlogCard({key, title, id, image, multi_line}) {
  return (
    <StyledCard key={key} data-testid="blog-card"> 
        <CardMedia
            component="img"
            alt="article title photo" 
            image={image || '../images/_CardMedia_default.jpg'}
        />
        <StyledContent>
            <StyledHeader title={title} titleTypographyProps={{fontSize:'1em' }}></StyledHeader>
            <StyledSummary variant="body2">
                {multi_line}
            </StyledSummary>
        </StyledContent>
        <CardActions>
            <StyledButton href={`/posts/${id}`} variant="outlined" size='small'>Read more</StyledButton>
        </CardActions>
    </StyledCard>
  );
}
