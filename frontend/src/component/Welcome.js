import { Grid, Typography } from "@material-ui/core";
import video from './video.mp4';

const Welcome = (props) => {
  return (
    <Grid container item direction="column" alignItems="center" justify="center">
      
        <div class="caption header-text"
          style={{ position: "absolute",top: "0",left: "0", bottom: "7px",width: "100%",height : "100%",
            }}>

              <div style={{textAlign: "center",position: "absolute",width: "60%",left: "50%",top: "50%",
                            transform: "translate(-50%,-50%)"}}>
                <Grid item>
                  <Typography variant="h2" 
                  style={{marginTop: "30px",marginBottom:"25px",textTransform: "uppercase",
                  fontWeight: "100",color: "#3f51b5",letterSpacing: "1px"}}>
                    PUNJAB EMPLOYMENT AND ENTERPRISE MISSION <br></br>
                
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h2" 
                  style={{marginTop: "30px",marginBottom:"25px",textTransform: "uppercase",
                  fontWeight: "800",color: "darkgreen",letterSpacing: "1px"}}>
                    GHAR GHAR ROZGAR
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography variant="h9" 
                  style={{marginTop: "200rem",marginBottom:"25px",color: "black",letterSpacing: "1px"}}>
                    A Government of Punjab Initiative
                  </Typography>
                </Grid>
              </div>
        </div>
    </Grid>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
