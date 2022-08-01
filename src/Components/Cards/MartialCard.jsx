import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Divider} from '@mui/material';
import yinyang from './yinyang.png'
import { Link } from 'react-router-dom';

import { CardStyle as classes} from '../Styles/Card';

export default function MartialArts() {
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media}
        component="img"
        src={yinyang}
        alt="/"
      />
      <CardContent className={classes.content}>
        <Typography className={classes.heading} gutterBottom>
          Martial Arts
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Learning how to use my body to the best of its abilities
        </Typography>
      </CardContent>
      <Divider className={classes.divider} light />
      <CardActions>
        <Link to="/HealthCard_inside">
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
