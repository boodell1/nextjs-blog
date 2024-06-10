import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import BlogButton from './blogButton';


export default function BlogCard(data) {
    console.log("blogData in blogCard", data)
    console.log("title in blogcard", data.blogData.title)
  return (
    <Card sx={{ width: 345, height: 346, marginLeft: 2, marginTop: 3 }}> 
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



// import styled from '@emotion/styled';

// import mq from '../styles/media-query';

// const CardDiv = styled.div(({ theme }) =>
//   mq({
//     background: '#fff',
//     borderRadius: '10px',
//     border: `1px solid #f1f2f2`,
//     boxShadow: '0 5px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
//     width: ['100%', null, '85%', '50%'],
//   }),
// );

// const CardContentWrapper = styled.div({
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
// });

// const CardTitle = styled.div(() => ({
//   fontWeight: 600,
//   marginBottom: '5px',
//   textAlign: 'center',
// }));

// /**
//  * A basic card component that has a title and body.
//  */
// const Card = ({ children, title = '' }) => (
//   <CardDiv>
//     <CardContentWrapper>
//       <CardTitle>{title}</CardTitle>
//       {children}
//     </CardContentWrapper>
//   </CardDiv>
// );

// export default Card;