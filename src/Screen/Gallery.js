import  React, {useState}from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSpring, animated } from '@react-spring/web';

const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({

    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Gallery() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value,setValue] =useState("");
  console.log("hii",value);

  return (
    <div>
      <div style={{
        color:"blue",
        fontSize:"28px",
        fontWeight:600,
        paddingLeft:"4%",
        paddingTop:"5%"
      }}>
      Make the most of summertime</div>
      <div>
        <div style={{
fontWeight:600,
paddingLeft:"4%",

        }}>
        Summer is here - celebrate with one of our exclusive offers.
        </div>

      </div>
      <div style={{
       display:"flex",
       flex:'column',
       justifyContent: 'space-between',
       paddingLeft: '20px',
       paddingRight: '20px',
       
      }}>
      <img
              width={"30%"}
              height={"10%"}
              alt='1'
              src="https://www.hilton.com/im/en/MBJRHHF/16722849/2021-lifestyle-shoot-at-hilton-rose-hall-resort-spa-an-all-inclusive-resort.jpg?impolicy=crop&cw=5000&ch=3259&gravity=NorthWest&xposition=0&yposition=36&rw=2048&rh=1336"
            />
            
            
             <img
              width={"30%"}
              height={"20%"}
              alt="2"
              src="https://www.hilton.com/im/en/NoHotel/18127576/family-pool-day-0199-v1.jpg?impolicy=crop&cw=2000&ch=1303&gravity=NorthWest&xposition=0&yposition=98&rw=2048&rh=1336"
            />
            <img
              width={"30%"}
              height={"20%"}
              src="https://www.hilton.com/im/en/NoHotel/15196711/shutterstock-269455079.jpg?impolicy=crop&cw=5000&ch=3259&gravity=NorthWest&xposition=0&yposition=36&rw=2048&rh=1336"
            />
            
            </div>
            <div style={{
       display:"flex",
       flex:'column',
       justifyContent: 'space-between',
       paddingTop: 40,
       paddingLeft: '20px',
       paddingRight: '20px',
       
      }}>
      <img
              width={"30%"}
              height={"10%"}
              src="https://www.hilton.com/im/en/NoHotel/13984175/cheers-5000x3333.jpg?impolicy=crop&cw=5000&ch=3259&gravity=NorthWest&xposition=0&yposition=36&rw=2048&rh=1336"
            />
             <img
              onClick={handleOpen}
              width={"30%"}
              height={"20%"}
              src="https://www.hilton.com/im/en/NoHotel/16156655/shutterstock-673616299.jpg?impolicy=crop&cw=5000&ch=3259&gravity=NorthWest&xposition=0&yposition=36&rw=2048&rh=1336"
            />
               
            
            <img
            onClick={handleOpen}
          
            
              width={"30%"}

              height={"20%"}
              src="https://www.hilton.com/im/en/SINORHI/14530273/f-por-157-heroimage-crop3-2.jpg?impolicy=crop&cw=1500&ch=977&gravity=NorthWest&xposition=0&yposition=11&rw=2048&rh=1336"
            />
                
          
            </div>


      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="spring-modal-title" variant="h6" component="h2">
              Text in a modal
            
            </Typography>
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
  
}