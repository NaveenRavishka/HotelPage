import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ArrowLeftIcon } from "@mui/x-date-pickers";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Destination() {
  const [age, setAge] = React.useState("");
  const [showImage, setShowImage] = useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
    setShowImage(true);
  };

  return (
    <div>
      <div
        style={{
          fontSize: "55px",
          color: "purple",
          fontWeight: "400",
          fontStyle: "italic",
          textAlign: "center",
          paddingTop: "10%",
        }}
      >
        Our Destination
      </div>

      <div>
        <Box
          sx={{
            textAlign: "center",
            paddingTop: "3%",
            paddingBottom: "6%",
          }}
        >
          <FormControl style={{ width: "35%" }}>
            <InputLabel id="demo-simple-select-label"></InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value="1">
                <div
                  style={{
                    color: "purple",
                    fontWeight: 350,
                    fontStyle: "italic",
                  }}
                >
                  {" "}
                  Habarana VIllage by Cinnamon
                </div>
              </MenuItem>
              <MenuItem value="2">
              <div
                  style={{
                    color: "purple",
                    fontWeight: 350,
                    fontStyle: "italic",
                  }}
                >
                  {" "}
                  Cinnamon Wild Yala
                </div>
              </MenuItem>
              <MenuItem value="3">
              <div
                  style={{
                    color: "purple",
                    fontWeight: 350,
                    fontStyle: "italic",
                  }}
                >
              Cinnamon Citadel Kandy
              </div>
</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>

      <div style={{ textAlign: "center" }}>
        {showImage && age === "1" && (
          <div>
            <div
              style={{
                paddingTop: "6%",
                position: "absolute",
                left: "65%",
              }}
            >
              <Box>
                <Card
                  style={{
                    backgroundColor: "white",
                    width: "70%",
                    height: "80%",
                  }}
                >
                  <div
                    style={{
                      fontSize: "25px",
                      color: "purple",
                      fontWeight: "400",
                      fontStyle: "italic",
                      textAlign: "left",
                      paddingTop: "20%",
                      paddingBottom: "10%",
                      paddingLeft: "15%",
                      paddingRight: "15%",
                    }}
                  >
                    Habarana Village by Cinnamon
                  </div>
                  <div
                    style={{
                      fontSize: "18px",
                      textAlign: "left",
                      paddingLeft: "15%",
                      paddingBottom: "10%",
                      paddingLeft: "15%",
                      paddingRight: "15%",
                    }}
                  >
                    Experience affordable rustic barefoot type elegance, which
                    is designed to reflect the rural environs and simplicity of
                    the local village life surrounded by rich biodiversity.
                  </div>
                  <div style={{paddingBottom:"5%"}}>
                  <Button style={{ backgroundColor: "purple", color: "white" }}>
                  
                    Discover More
                  </Button>
                  </div>
                </Card>
              </Box>
            </div>

            <div
              style={{
                position: "absolute",
                paddingTop: "8%",
                paddingLeft: "6%",
              }}
            >
              <img
                width={"100%"}
                height={"20%"}
                src="data:image/png;base64,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"
              />
            </div>
            <img
              width={"50%"}
              height={"20%"}
              src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/hotel_resorts/DEST--Habarana_Village_715X550.jpg"
            />
          </div>
        )}

         {showImage && age === "2" && (
          <div>
            <div
              style={{
                paddingTop: "6%",
                position: "absolute",
                left: "65%",
              }}
            >
              <Box>
                <Card
                  style={{
                    backgroundColor: "white",
                    width: "70%",
                    height: "80%",
                  }}
                >
                  <div
                    style={{
                      fontSize: "25px",
                      color: "purple",
                      fontWeight: "400",
                      fontStyle: "italic",
                      textAlign: "left",
                      paddingTop: "20%",
                      paddingBottom: "10%",
                      paddingLeft: "15%",
                      paddingRight: "15%",
                    }}
                  >
                   Cinnamon Wild Yala
                  </div>
                  <div
                    style={{
                      fontSize: "18px",
                      textAlign: "left",
                      paddingLeft: "15%",
                      paddingBottom: "10%",
                      paddingLeft: "15%",
                      paddingRight: "15%",
                    }}
                  >
                    Experience the thrill of living around a forest while you sit by a bar overlooking the pool that is also sometimes the tusker’s choice of water-hole.
                  </div>
                  <div style={{paddingBottom:"5%"}}>
                  <Button style={{ backgroundColor: "purple", color: "white" }}>
                  
                    Discover More
                  </Button>
                  </div>
                </Card>
              </Box>
            </div>

            <div
              style={{
                position: "absolute",
                paddingTop: "8%",
                paddingLeft: "6%",
              }}
            >
              <img
                width={"100%"}
                height={"20%"}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAY1BMVEX///+AgIB9fX16enp3d3eIiIiCgoL7+/ucnJzZ2dmjo6N0dHT29vbz8/Pn5+fu7u7T09PMzMypqam4uLjh4eGVlZWMjIyzs7PCwsLq6uqgoKDd3d2oqKi3t7eRkZG/v79ra2u3uQ7SAAAHgklEQVR4nO2daYOyLBSG4YArbphbWjn//1e+WrM085gZobyHuj7NR7wHzg4R8ubNmzdv3rx588YQUdJ1nulFmCGj4JS+49cfnPPK9GqMkHFKKQA4yQEYiNT0ejYnjWpBL0BVR1nIfdNL2pr0Y5cC/QJANFLUphe1MZkIyI7RH5jcicb0qral5JIU/FoEnh0+AtPL2hTJnZ0XZc6VCiwo+d70ujalgvPWP3Cgg104a8GKA49Mr2tLCuGCExMSONAyiKQzirFvXitKSCNSnGPDLN/xcBCjYpTtGj82vbDt2Tt1SvaHUY0jp8z1Ty/mHUaSSuSfuYIcoiZweWl36hBPBYOS8jo7G8MOOGOcu8nGy9qUmDkTKkQ+50yOf6Vd0Ox7IbKtF7YhXiXE1D+5BCrOIpCuCbxYUpvjZq+YDIMko3zQJu0rPpwFP/Nq326j8C/hECJB25dDCn1OoZjT1M5L5dLxJXn6FOAzcAaA18ke5AmuU6frLOpVIgUpYFqBUYTQ9Oq2IeA3JRhORPkSOVQ0sw8GEV6jwJa5MyK47EWOQzgjQlf3ppe3CfmMBiwhNsfN38xpQGkvTK9vC+bOwhg6SdML3IBZCQYc+1OHZC5CGOH2b4T63j5wqe0bwXPvSADHwvYUMrt3FChAZNdGiNow7K9LSfOe8SKCZQVGb9eC4NWPmXPuSjBESvaV1qTDePV5xru7R2HcCNw+i+CVvG+L858LjgKF8FhZ2H6q+fmj0sONGtKfs5AlrekVr0APg60P2IJdMCJSYpdruDD4O7loE5w3Qk/8wvSKV6AIl5jDC7CXnFpoEu7mCb93ArWxpOQtiQyuERaehkc1oBa2nh7WALh18eLDGgzHwbJ+Q3QvaZ6A2VZlLhcGSL9EaOyKlZaHSFeInell60Xc/+QJTK9aK56SBtCZXrdO0ocCxW+4TY2nQk0DyiwKlWZHD2aA0vTK9XFQ8I1nDXLTK9dGpKaAVRrcbyzc0oDbkkAmCqHyRYKytyR1KriaNQCXOXtL9kGtEigPEtRp5o++sbMgVFrSV5jiROkoQS0E/o68qmMcT0OwT3MAx/QnPEuiqsAI56Mx4aa/4Vl2aubglxLYLcL8HNYiHOyhkkoN6TcswG4QFOqpfzWQmNPHKCFENU6+JkR8O7ohZK9DA8R3POJgyJeedwuo88es0+IaKeYBVucjSLVIQDnSbrx3YK566eA3WKe5U+YWSm22KQ2QDil5zhDapM9HiQNujjVlOI1PXZx0iOAWDOn8ajUWwnotvrEocRqE/UehMIYzjXPsUG6E/UeiaRuM1dUcZZgUuQdC5q40PiQCw/mOji9SUmjSAOs9n+M4ZqjpMAwwjLFiME7tB9o0AD/Ap0IkoCq1STDaBIR2MTy/kKYPhrCMoDp2cBt8j4YojuDcBuEwt6Yg8QeMl50ajRZxBGMZodCsAcaamvIQzi2Auqa/6WEqrb5xBJ9/VJ09uAkwjs0/Kg1rz0nQ9i42EVQHVG/BvSgDSFHlDbo1oA5QWUlUeUOqNrQ/B+QkEag2QqvdMdAhezwdTX/XI9x9AkVFhCRgmG586Q8QKHWdPD+Y/rDlyBUkGOCBi2eAddHbF48DeYPnwles3y+cNQgloucWdSeOXxr0zPSXLWcNmzjWEeoPPFn0CvEBHWfaC0RtJ8XB/Xs4RYzHKOqupn1RIfodD/3l9U98PIPc+5X2AXUBTZ091jOTNQWY/rbFVKtpgOfe3/Oj+7dgaBJo7VXVb/AMMeubwfgLQxMhaJlbR67BY++E2amBpqHtKQ2w2EQvWCdrooj2QVSTtaIkPI34MlorSsKjQVOvJAEiDVboNKHTYDVzgGkSYY1O0xnAc79ntSoKorEcTbe6pkDTfdY+pPgNnn2w2lkAPK2m41qJIyLfqOfC8wQCz+DuWhoAngbDal0WNKkzWc8m4umxEBKvpIGLaCRppfgAkWckz7wVNqsBqlcFu1WMIrK3yFc5DMheB1nDOyJKnM+s4RmwDfDreDbuD3iGD77QHyYxNH33b7RbRYQPAWjPmwCXVxjRXWBHFhxc0DuNgilt/kFv9xmhRRyIde4DrL/1qbXxavpj1NhrbDJg/YWSSN8MP8ZHUS5oixAEWgl0XWwCwBcgfuPpOAsAIZ6ewgQaigjcxxch/+L5IgLKAPkX3pPeERiifsItnptHYSfUluCTpwwCR3S/eYZEXQNAWDKZRnlolzko31KdIlH7EUfOejxXWu/ycCHFdTkNsRXR53n05TDWdhJRc3kZ4QMiAOO1De7wL/HCl4aH76dljfj3R+ZI74sAjAlfJtadgR/SOw+sAvWPmUVuYJKE3bYJgxt0bTQB/5DkDpveC+yUENu3wBdRXfKJzcARzdrpIN0JxuBHCBiwKxZaQprWYTOcitE8AJTtyZqU4EGKtm56ENX639/lGZFR8H8NObwN6kNxWYdRJsuglOWpLPymPXUnSfqyK5u2PCDt3T1G6ss6Jn5e7VpZJmHu+NEpb0hISi/3M/Q/jbgMWTWEHNLMl0G9r/3WPXV+3/T+sA/qrkA33KSFl9j9b968efPmSf4D3HpiUGWrGlAAAAAASUVORK5CYII="
              />
            </div>
            <img
              width={"50%"}
              height={"20%"}
              src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/media/wild-detination-home-090921D.jpeg"
            />
          </div>
        )}
           {showImage && age === "3" && (
          <div>
            <div
              style={{
                paddingTop: "6%",
                position: "absolute",
                left: "65%",
              }}
            >
              <Box>
                <Card
                  style={{
                    backgroundColor: "white",
                    width: "70%",
                    height: "80%",
                  }}
                >
                  <div
                    style={{
                      fontSize: "25px",
                      color: "purple",
                      fontWeight: "400",
                      fontStyle: "italic",
                      textAlign: "left",
                      paddingTop: "20%",
                      paddingBottom: "10%",
                      paddingLeft: "15%",
                      paddingRight: "15%",
                    }}
                  >
                    Cinnamon Citadel Kandy
                  </div>
                  <div
                    style={{
                      fontSize: "18px",
                      textAlign: "left",
                      paddingLeft: "15%",
                      paddingBottom: "10%",
                      paddingLeft: "15%",
                      paddingRight: "15%",
                    }}
                  >
                    Experience the thrill of living around a forest while you sit by a bar overlooking the pool that is also sometimes the tusker’s choice of water-hole.
                  </div>
                  <div style={{paddingBottom:"5%"}}>
                  <Button style={{ backgroundColor: "purple", color: "white" }}>
                  
                    Discover More
                  </Button>
                  </div>
                </Card>
              </Box>
            </div>

            <div
              style={{
                position: "absolute",
                paddingTop: "8%",
                paddingLeft: "6%",
              }}
            >
              <img
                width={"100%"}
                height={"20%"}
                src="data:image/png;base64,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"
              />
            </div>
            <img
              width={"50%"}
              height={"20%"}
              src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/hotel_resorts/DEST-cinnamon_citadel_kandy.jpg"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Destination;
