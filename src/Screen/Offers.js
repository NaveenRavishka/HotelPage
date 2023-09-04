import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import wave from "../image/wave.jpg";
function Offers() {
  return (
    <div>
        <div style={{
            textAlign: 'center',
            fontSize:"28px",
            fontWeight:400,
            paddingTop:"4%",
            paddingBottom:"5%",
        }}>Offers</div>

        <div style={{
             display:"flex",
             flex:'column',
             justifyContent: 'space-between',
             marginLeft:"8%",
             marginRight:"8%",
             

        }}>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://sitecore-cd-imgr.shangri-la.com/MediaFiles/3/2/9/%7B32926B10-8EE8-4639-B2DD-AC55F70CB76D%7Dslcwithbreakfast.jpg?w=360&h=175&mode=crop&quality=100&scale=both"
        title="green iguana"
      />
      <CardContent>
        <Typography style={{
            textAlign:"center",
            fontSize:"13px",
            fontWeight:"bold",
            paddingBottom:"10px",

        }}>
        Rooms & Suites
        </Typography>
        <Typography style={{
            textAlign:"center",
            fontSize:"13px",
            fontWeight:"bold",
            paddingBottom:"10px",

        }}>

        Shangri–La Circle Exclusive Member Rate with Breakfast
        </Typography>
        <Typography style={{
            textAlign:"center",
            fontSize:"12px",
            
            paddingBottom:"15%",

        }}>
        Exclusive Member Rate with Breakfast for Shangri-La Circle member.
        </Typography>
        <Typography style={{
            textAlign:"center",
            fontSize:"14px",
            fontWeight:"bold",
            paddingBottom:"10px",

        }}>
         From LKR 57,603.60 Average Per Night
        </Typography>
     
     
      </CardContent>
      <CardActions>
        <div style={{
    paddingLeft:"40%",
    }}>
        <Button size="small" >View Details</Button>
        </div>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://sitecore-cd-imgr.shangri-la.com/MediaFiles/A/8/B/%7BA8B2E679-6D4A-497F-95C4-A905821952F5%7Dslcmemberrate.jpg?w=360&h=175&mode=crop&quality=100&scale=both"
        title="green iguana"
      />
      <CardContent>
      <Typography style={{
            textAlign:"center",
            fontSize:"13px",
            fontWeight:"bold",
            paddingBottom:"10px",

        }}>
        Rooms & Suites
        </Typography>
        <Typography style={{
            textAlign:"center",
            fontSize:"13px",
            fontWeight:"bold",
            paddingBottom:"10px",

        }}>

Shangri–La Circle Exclusive Member Rate
        </Typography>
        <Typography style={{
            textAlign:"center",
            fontSize:"12px",
            
            paddingBottom:"15%",

        }}>
       Exclusive Member Rate for Shangri-La Circle member.
        </Typography>
        <Typography style={{
            textAlign:"center",
            fontSize:"14px",
            fontWeight:"bold",
            paddingTop:"35px",

        }}>
         From LKR 51,203.20 Average Per Night
        </Typography>
     
     
      </CardContent>
      <CardActions>
        <div style={{
    paddingLeft:"40%",
    }}>
        <Button size="small" >View Details</Button>
        </div>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://sitecore-cd-imgr.shangri-la.com/MediaFiles/B/B/4/%7BBB49205C-F858-4B25-9FCF-3B7828AEBD0B%7D230901_SLCB_SeptMembersDay.jpg?w=360&h=175&mode=crop&quality=100&scale=both"
        title="green iguana"
      />
      <CardContent>
      <Typography style={{
            textAlign:"center",
            fontSize:"13px",
            fontWeight:"bold",
            paddingBottom:"10px",

        }}>
        Rooms & Suites
        </Typography>
        <Typography style={{
            textAlign:"center",
            fontSize:"12px",
            
          

        }}>
        06 Sep 2023 - 10 Dec 2023
        </Typography>
        <Typography style={{
            textAlign:"center",
            fontSize:"13px",
            fontWeight:"bold",
            paddingBottom:"10px",

        }}>
Weekend Getaway in the Heart of Colombo
        </Typography>
        <Typography style={{
            textAlign:"center",
            fontSize:"12px",
            
            paddingBottom:"15%",

        }}>
Relax in the heart of Colombo, with access to Horizon Club
        </Typography>
        <Typography style={{
            textAlign:"center",
            fontSize:"14px",
            fontWeight:"bold",
            paddingBottom:"10px",

        }}>
         From LKR 91,205.70 Average Per Night
        </Typography>
     
     
      </CardContent>
      <CardActions>
        <div style={{
    paddingLeft:"40%",
    }}>
        <Button size="small" >View Details</Button>
        </div>
      </CardActions>
    </Card>
        </div>
    </div>
  )
}

export default Offers