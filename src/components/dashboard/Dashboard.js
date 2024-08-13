import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import database, { auth } from "../../server/firebase";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import theme from "../../theme/theme";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

const Dashboard = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in.
            console.log("true");
          } else {
            console.log("false");
            Swal.fire('กรุณาเข้าสู่ระบบ', '', 'error');
            navigate("/");
            // User is signed out.
          }
         })
  }, [])

  return (
    <Container maxWidth="xl" sx={{ marginTop:10,marginBottom:3 }}>
      <Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant="h1" color={theme.palette.warning.dark} fontWeight="bold" gutterBottom>S</Typography>
          <Typography variant="h1" color={theme.palette.error.dark} fontWeight="bold" gutterBottom>C</Typography>
          <Typography variant="h1" color={theme.palette.info.dark} fontWeight="bold" gutterBottom>D</Typography>
        </Box>
        <Typography variant="h5" color={theme.palette.info.dark} fontWeight="bold" textAlign="center" sx={{ marginTop: -6,marginBottom:2 }} gutterBottom>Dashboard</Typography>
        <Box marginTop={5}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Paper sx={{ backgroundColor: "lightgray",height:300 }}>

                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper sx={{ backgroundColor: "lightgray",height:300 }}>

                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper sx={{ backgroundColor: "lightgray",height:300 }}>

                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper sx={{ backgroundColor: "lightgray",height:300 }}>

                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper sx={{ backgroundColor: "lightgray",height:300 }}>

                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper sx={{ backgroundColor: "lightgray",height:300 }}>

                    </Paper>
                </Grid>
            </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Dashboard;
