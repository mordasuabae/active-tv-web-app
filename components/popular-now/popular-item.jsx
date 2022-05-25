import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import {Stack , Typography} from "@mui/material";

export const PopularNowItem = ({ image }) => {
    return (
      <Box
        sx={{
          backgroundImage: `url('./row2pic${image}.webp')`,
          backgroundSize: "cover",
          width: "100%",
          height: "200px",
          borderRadius: "25px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          position: "relative",
          alignItems: "flex-end",
          "&:hover": {
            backgroundImage: "url('./avater.gif')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPostion: "center bottom",
            transitionDuration: "1s",
            cursor: "pointer",
          },
        }}
      >
        <Box
          sx={{
            background: "rgba(1,1,1,0.9)",
            padding: "6px 8px",
            color: "#eee",
            minWwidth: "50px",
            position: "absolute",
            top: "12px",
            right: "12px",
            fontSize: "14px",
            textAlign: "center",
          }}
        >
          09:05
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "50px",
            width: "100%",
            background: "rgba(1,1,1,.9)",
            borderRadius: "0px 0px 23px 23px",
            padding: "8px",
          }}
        >
          <Stack direction="row">
            <Avatar alt="" src="yellocc.jpg" style={{ width: "60%" }} />
          </Stack>
          <Typography
           className={"active-tv-font"}
            sx={{
              color: "white",
              fontSize: "13px",
              fontWeight: "bolder",
            }}
          >
            VFX Artist React To Bad & Good CGI...
          </Typography>
        </Box>
      </Box>
    );
  };
  