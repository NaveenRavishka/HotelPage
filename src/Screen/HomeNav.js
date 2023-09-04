import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box } from '@mui/material';

const StyledMenu = styled((props) => (
 
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 0,
    marginTop: theme.spacing(0),
    minWidth:"100%",
    marginRight:7,
    
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[3000],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '0px ',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(2),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function HomeNav() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div style={{
      position:"relative",
      // top:-50
    }}>
    <div style={{backgroundColor:"black"
    ,display:"flex",
    flex:'column',
    justifyContent: 'space-around',
    paddingTop:"2%",
    paddingLeft:"8%",
    paddingRight:"8%",
    paddingBottom:"1%",
    }}>

      <Button style={{
        backgroundColor:"black"
      }}
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon style={{ color:"white"}} />}
      >
        <div style={{color:"white",
      fontWeight:"bold"
      }}>
        About
        </div>
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem >
         
          About Hotel
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
        
         OverView
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          
         Expolre Colombo
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
        
         map
        </MenuItem>
      </StyledMenu>

      <Button style={{
    
    backgroundColor:"black"
  }}
    id="demo-customized-button"
    aria-controls={open ? 'demo-customized-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
  
    disableElevation
    onClick={handleClick}
    endIcon={<KeyboardArrowDownIcon style={{ color:"white"}} />}
  >
     <div style={{color:"white",
      fontWeight:"bold"
      }}>
       Rooms & Suites
        </div>
  </Button>
  <StyledMenu
    id="demo-customized-menu"
    MenuListProps={{
      'aria-labelledby': 'demo-customized-button',
    }}
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
  >
    <MenuItem onClick={handleClose} disableRipple>
      <EditIcon />
      Edit
    </MenuItem>
    <MenuItem onClick={handleClose} disableRipple>
      <FileCopyIcon />
      Duplicate
    </MenuItem>
    <Divider sx={{ my: 0.5 }} />
    <MenuItem onClick={handleClose} disableRipple>
      <ArchiveIcon />
      Archive
    </MenuItem>
    <MenuItem onClick={handleClose} disableRipple>
      <MoreHorizIcon />
      More
    </MenuItem>
  </StyledMenu>

  <Button style={{
    
    backgroundColor:"black"
  }}
    id="demo-customized-button"
    aria-controls={open ? 'demo-customized-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
  
    disableElevation
    onClick={handleClick}
    endIcon={<KeyboardArrowDownIcon style={{ color:"white"}} />}
  >
    <div style={{color:"white",
      fontWeight:"bold"
      }}>
        Dining
        </div>
  </Button>
  <StyledMenu
    id="demo-customized-menu"
    MenuListProps={{
      'aria-labelledby': 'demo-customized-button',
    }}
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
  >
    <MenuItem onClick={handleClose} disableRipple>
      <EditIcon />
      Edit
    </MenuItem>
    <MenuItem onClick={handleClose} disableRipple>
      <FileCopyIcon />
      Duplicate
    </MenuItem>
    <Divider sx={{ my: 0.5 }} />
    <MenuItem onClick={handleClose} disableRipple>
      <ArchiveIcon />
      Archive
    </MenuItem>
    <MenuItem onClick={handleClose} disableRipple>
      <MoreHorizIcon />
      More
    </MenuItem>
  </StyledMenu>

  <Button style={{
    
    backgroundColor:"black"
  }}
    id="demo-customized-button"
    aria-controls={open ? 'demo-customized-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
  
    disableElevation
    onClick={handleClick}
    endIcon={<KeyboardArrowDownIcon style={{ color:"white"}} />}
  >
    <div style={{color:"white",
      fontWeight:"bold"
      }}>
      Experience
        </div>
  </Button>
  <StyledMenu
    id="demo-customized-menu"
    MenuListProps={{
      'aria-labelledby': 'demo-customized-button',
    }}
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
  >
    <MenuItem onClick={handleClose} disableRipple>
      <EditIcon />
      Edit
    </MenuItem>
    <MenuItem onClick={handleClose} disableRipple>
      <FileCopyIcon />
      Duplicate
    </MenuItem>
    <Divider sx={{ my: 0.5 }} />
    <MenuItem onClick={handleClose} disableRipple>
      <ArchiveIcon />
      Archive
    </MenuItem>
    <MenuItem onClick={handleClose} disableRipple>
      <MoreHorizIcon />
      More
    </MenuItem>
  </StyledMenu>

  <Button style={{
    
    backgroundColor:"black"
  }}
    id="demo-customized-button"
    aria-controls={open ? 'demo-customized-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
  
    disableElevation
    onClick={handleClick}
    endIcon={<KeyboardArrowDownIcon style={{ color:"white"}} />}
  >
 <div style={{color:"white",
      fontWeight:"bold"
      }}>
        Events
        </div>
  </Button>
  <StyledMenu
    id="demo-customized-menu"
    MenuListProps={{
      'aria-labelledby': 'demo-customized-button',
    }}
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
  >
    <MenuItem onClick={handleClose} disableRipple>
      <EditIcon />
      Edit
    </MenuItem>
    <MenuItem onClick={handleClose} disableRipple>
      <FileCopyIcon />
      Duplicate
    </MenuItem>
    <Divider sx={{ my: 0.5 }} />
    <MenuItem onClick={handleClose} disableRipple>
      <ArchiveIcon />
      Archive
    </MenuItem>
    <MenuItem onClick={handleClose} disableRipple>
      <MoreHorizIcon />
      More
    </MenuItem>
  </StyledMenu>

  <Button style={{
    
    backgroundColor:"black"
  }}
    id="demo-customized-button"
    aria-controls={open ? 'demo-customized-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
  
    disableElevation
    onClick={handleClick}
    endIcon={<KeyboardArrowDownIcon style={{ color:"white"}} />}
  >
    <div style={{color:"white",
      fontWeight:"bold"
      }}>
        Gallery
        </div>
  </Button>
  <StyledMenu
    id="demo-customized-menu"
    MenuListProps={{
      'aria-labelledby': 'demo-customized-button',
    }}
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
  >
    <MenuItem onClick={handleClose} disableRipple>
      <EditIcon />
      Edit
    </MenuItem>
    <MenuItem onClick={handleClose} disableRipple>
      <FileCopyIcon />
      Duplicate
    </MenuItem>
    <Divider sx={{ my: 0.5 }} />
    <MenuItem onClick={handleClose} disableRipple>
      <ArchiveIcon />
      Archive
    </MenuItem>
    <MenuItem onClick={handleClose} disableRipple>
      <MoreHorizIcon />
      More
    </MenuItem>
  </StyledMenu>

  <Button style={{
    
    backgroundColor:"black"
  }}
    id="demo-customized-button"
    aria-controls={open ? 'demo-customized-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
  
    disableElevation
    onClick={handleClick}
    endIcon={<KeyboardArrowDownIcon style={{ color:"white"}} />}
  >
     <div style={{color:"white",
      fontWeight:"bold"
      }}>
        Offers
        </div>
  </Button>
  <StyledMenu
    id="demo-customized-menu"
    MenuListProps={{
      'aria-labelledby': 'demo-customized-button',
    }}
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
  >
    <MenuItem onClick={handleClose} disableRipple>
      <EditIcon />
      Edit
    </MenuItem>
    <MenuItem onClick={handleClose} disableRipple>
      <FileCopyIcon />
      Duplicate
    </MenuItem>
    <Divider sx={{ my: 0.5 }} />
    <MenuItem onClick={handleClose} disableRipple>
      <ArchiveIcon />
      Archive
    </MenuItem>
    <MenuItem onClick={handleClose} disableRipple>
      <MoreHorizIcon />
      More
    </MenuItem>
  </StyledMenu>

  <Button style={{
    
    backgroundColor:"black"
  }}
    id="demo-customized-button"
    aria-controls={open ? 'demo-customized-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
  
    disableElevation
    onClick={handleClick}
    endIcon={<KeyboardArrowDownIcon style={{ color:"white"}} />}
  >
    <div style={{color:"white",
      fontWeight:"bold"
      }}>
       More
        </div>
  </Button>
  <StyledMenu
    id="demo-customized-menu"
    MenuListProps={{
      'aria-labelledby': 'demo-customized-button',
    }}
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
  >
    <MenuItem onClick={handleClose} disableRipple>
      <EditIcon />
      Edit
    </MenuItem>
    <MenuItem onClick={handleClose} disableRipple>
      <FileCopyIcon />
      Duplicate
    </MenuItem>
    <Divider sx={{ my: 0.5 }} />
    <MenuItem onClick={handleClose} disableRipple>
      <ArchiveIcon />
      Archive
    </MenuItem>
    <MenuItem onClick={handleClose} disableRipple>
      <MoreHorizIcon />
      More
    </MenuItem>
  </StyledMenu>

 
    </div>
    </div>
  );
}