import React, { useEffect, useState } from "react";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import database from "../../server/firebase";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import theme from "../../theme/theme";
import { Link } from "react-router-dom";

const Dashboard = () => {

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
