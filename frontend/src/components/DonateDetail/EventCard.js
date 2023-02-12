import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Button from '@material-ui/core/Button';
export default function EventCard({image,name,cost,setTotal,total}) {
  const theme = useTheme();

  const [itemCount,setItemCount]=React.useState(0)
 const handleClick=()=>{
  setTotal(total+cost)
  setItemCount(itemCount+1)

 }

  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          {name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
           {cost} per unit
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <Button onClick={handleClick} variant="outlined">Add+</Button>
        <Typography style={{marginLeft:'20px'}} component="div" variant="h5">
          item Added:{itemCount}
          </Typography>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 130 }}
        image={`/images/${image}.png`}
        alt="Live from space album cover"
      />
    </Card>
  );
}