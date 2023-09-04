import React from 'react'
import wave from "../image/wave.jpg";
import TextField from '@mui/material/TextField';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Checkbox from '@mui/material/Checkbox';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';


function Fotter() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <div>
        


      <div style={{
 display:"flex",
 flex:'column',
 justifyContent: 'space-around',
 margin:"1%"

      }}>
        <div  style={{paddingLeft:"10%",
     
    }}>
        <div style={{
            color:"purple",
            fontSize:"28px",
            fontWeight:500,
            fontStyle:"italic",
            paddingTop:"10%",
        }}>Corporate information</div>
        <div style={{padding:"1%"}}>Cinnamon Hotels & Resorts  </div>
          <div style={{padding:"1%"}}>  John Kells Group</div>
         

          <div style={{
            color:"purple",
            fontSize:"28px",
            fontWeight:500,
            fontStyle:"italic",
            paddingTop:"10%",
        }}>Blogs</div>
        <div style={{padding:"1%"}}>Cinnamon Ublog </div>
       
          
  
    <div style={{
            color:"purple",
            fontSize:"28px",
            fontWeight:500,
            fontStyle:"italic",
            paddingTop:"10%",
        }}>Careers</div>
        <div style={{padding:"1%"}}>Careers
         </div>
       
          
    
    </div>

    <div>
        <div style={{
            color:"purple",
            fontSize:"28px",
            fontWeight:500,
            fontStyle:"italic",
            paddingTop:"10%",
        }}>News and Awards</div>
        <div style={{padding:"1%"}}>News </div>
          <div style={{padding:"1%"}}>Awards</div>
         

          <div style={{
            color:"purple",
            fontSize:"28px",
            fontWeight:500,
            fontStyle:"italic",
            paddingTop:"10%",
        }}>Corporate Governance</div>
        <div style={{padding:"1%"}}>CSR </div>
       
          
  
   
       
          
    
    </div>

    <div>
        <div style={{
            color:"purple",
            fontSize:"28px",
            fontWeight:500,
            fontStyle:"italic",
            paddingTop:"9%",
            paddingRight:"20%",
        }}>Data Privacy & Security Policy</div>
        <div style={{padding:"1%"}}>Terms & Conditions </div>
          <div style={{padding:"1%"}}>Privacy Statement</div>
         

          <div style={{
            color:"purple",
            fontSize:"28px",
            fontWeight:500,
            fontStyle:"italic",
            paddingTop:"10%",
        }}>Get In Touch</div>
        <div style={{padding:"1%"}}>Corporate Contact Information </div>
        <div style={{padding:"1%"}}>Hotel Contact Information </div>
       
          
  
    <div style={{
            color:"purple",
            fontSize:"28px",
            fontWeight:500,
            fontStyle:"italic",
            paddingTop:"10%",
        }}>Follow us</div>
        <div style={{padding:"3%",
           
    }}>
            <FacebookIcon style={{
                color:"grey",
                fontSize:40,
            }} />

            <TwitterIcon 
             style={{
                color:"grey",
                fontSize:40,
            }} />
            
            <LinkedInIcon
             style={{
                color:"grey",
                fontSize:40,
            }} />
            <InstagramIcon
             style={{
                color:"grey",
                fontSize:40,
            }} />
            
            <YouTubeIcon
             style={{
                color:"grey",
                fontSize:40,
            }} />

         </div>
       
          
    
    </div>
    
    

    </div>
     
    <div style={{
            color:"purple",
            fontSize:"22px",
            fontWeight:500,
            fontStyle:"italic",
            paddingLeft:"10%",
            
        }}>Get Cinnamon in your inbox
        
        
        </div>
        <div style={{
            paddingLeft:"10%",
            paddingTop:"1%",
            width:"25%",
            height:"2%",
        }}>
        <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        placeholder='Email Address'
    
      />
          <ArrowForwardIosIcon style={{
            fontSize:40,
            color:"grey",
            paddingBottom:-300,
            


          }}/>
          <div style={{fontSize:"13px",
        paddingTop:"5%"}}>
          <Checkbox {...label} />
            agree with the connamon Data and protection policy

          </div>
      </div>
     


    <div>
    <img
              style={{
                width: "100%",
                
                
            
                height: "500%",
              
              }}
              src={wave}
              alt="wave"
            /> 
         
    </div>
    </div>
  )
}

export default Fotter