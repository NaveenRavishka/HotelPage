import React ,{useState} from 'react'
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Button from '@mui/material/Button';


import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


 
function Home() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    
    <div 
    style={{
        backgroundImage:`url("https://images.squarespace-cdn.com/content/v1/549d41a3e4b003c6ce131926/1533794487081-QTF03VU3BV4RRVJOI0Z9/Colombo-31-20180505.jpg")`
        ,backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '110vh',
        position: 'relative',
       
    
    }}
    >
     <div style={{fontSize:"48px",
     paddingTop:"20%",
     color:"white",
     fontWeight:"600",
    textAlign:"center",
   
     
      
    }}>Shangri- la Colombo</div>

<div style={{fontSize:"48px",
     color:"white",
     fontWeight:"600",
    textAlign:"center",
    paddingBottom:"110px",
   
}}
        >Make Your Comfortable Life </div>
        
        <div style={{ backgroundColor:"white",
        marginLeft:"10%",
        marginRight:"10%",
        width:"50%",
        height:"10%",
        paddingBottom:"1%",
        paddingLeft:"1%",
        paddingRight:"1%",
        position:"absolute",
        
      
      }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'DatePicker',
          'TimePicker',
          'DateTimePicker',
          'DateRangePicker',
        ]}
      >
        <DateRangePicker 
        style={{
          backgroundColor:"red"
        }}
            localeText={{
              start: '',
              end: '',
            }}
          />
          
          </DemoContainer>
          <div style={{
            backgroundColor:"white",
           
            width:"15%",
            height:"96%",
            paddingLeft:"1%",
            paddingTop:"1.7%",
            paddingBottom:"9.5%",
            position:"absolute",
           position:"relative",
           left:"101%",
           bottom:"109%",
        

          }}>

          <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          
          <MenuItem value="">
         
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>one</MenuItem>
          <MenuItem value={2}>Two</MenuItem>
          <MenuItem value={3}>Three</MenuItem>
        </Select>
      
        </div>
          </LocalizationProvider>
         
       

        </div>
      
        </div>
       
  )
}

export default Home