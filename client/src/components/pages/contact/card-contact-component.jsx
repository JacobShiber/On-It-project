import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardContact = ({userItem}) => {
  return (
    <Card  className = 'cardUser'>
      <CardActionArea>
        <CardMedia
          component="img"
          image={userItem.img}
          alt="User image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {userItem.firstName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {userItem.role} at {userItem.school} <br/>
          Course - {userItem.course} <br />
          Email - {userItem.email} <br />
          Telephone - {userItem.phone}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default CardContact;
