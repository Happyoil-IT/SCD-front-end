import React, { useEffect, useState } from "react";
import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Icon, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { database } from "../../server/firebase";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import RestpointDetail from './RestpointDetail'
import theme from "../../theme/theme";
import { Link } from "react-router-dom";
import { IconButtonSuccess, TablecellHeader } from "../../theme/style";

const Respoint = () => {
  const [dataList, setDataList] = useState();
  const [open,setOpen] = React.useState();
  const [restdetail,setRestDetail] = React.useState("");
  const [restlocation,setRestLocation] = React.useState("");
  const [restname,setRestName] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    useEffect(() => {
        database.ref('primarydata/restpoint').on('value', (snapshot) => {
            const datas = snapshot.val();
            const dataList = [];
            for ( let id in datas ) {
                dataList.push({ id, ...datas[id] });
            }
            console.log(dataList);
            setDataList(dataList);
        });
    }, []);

    const handleSubmit = () => {
      // ผลักดันข้อมูลไปยัง Realtime Database
      database.ref('primarydata/restpoint').child(dataList.length).update({
        restdetail : restdetail,
        restlocation : restlocation,
        restname : restname,
      }).then(() => {
        console.log('Data pushed successfully');
      }).catch((error) => {
        console.error('Error pushing data:', error);
      });
      setOpen(false);
    };

  return (
    <Container maxWidth="lg" sx={{ marginTop:10,marginBottom:3 }}>
      <Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant="h1" color={theme.palette.warning.dark} fontWeight="bold" gutterBottom>S</Typography>
          <Typography variant="h1" color={theme.palette.error.dark} fontWeight="bold" gutterBottom>C</Typography>
          <Typography variant="h1" color={theme.palette.info.dark} fontWeight="bold" gutterBottom>D</Typography>
        </Box>
        <Typography variant="h5" color={theme.palette.info.dark} fontWeight="bold" textAlign="center" sx={{ marginTop: -6,marginBottom:2 }} gutterBottom>(ข้อมูลของ Respoint)</Typography>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle><Typography variant="h5" textAlign="center" gutterBottom>เพิ่มข้อมูล</Typography></DialogTitle>
          <Divider />
            <DialogContent>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <TextField 
                    size="small"
                    label="Rest_Detail"
                    fullWidth
                    onChange={(e) => setRestDetail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={8}>
                  <TextField 
                    size="small"
                    label="Rest_Name"
                    fullWidth
                    onChange={(e) => setRestName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                    size="small"
                    label="Rest_Location"
                    fullWidth
                    onChange={(e) => setRestLocation(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Divider sx={{ marginTop:3, marginBottom:3 }}/>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Button variant="contained" color="error" onClick={handleClose} sx={{ marginRight:1 }}>ยกเลิก</Button>
                <Button variant="contained" color="info" onClick={handleSubmit} autoFocus>เพิ่มข้อมูล</Button>
              </Box>
          </DialogContent>
        </Dialog>
        <TableContainer component={Paper} style={{ maxHeight: "90vh" }} >
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TablecellHeader sx={{ position: "sticky", left: 0, width: 50 }}>ID</TablecellHeader>
                <TablecellHeader>Rest_Detail</TablecellHeader>
                <TablecellHeader>Rest_Location</TablecellHeader>
                <TablecellHeader>Rest_Name</TablecellHeader>
                <TablecellHeader sx={{ position: "sticky", right: 0,backgroundColor: theme.palette.error.light }} width={150}><IconButtonSuccess color="success" onClick={handleClickOpen} ><AddBoxRoundedIcon/></IconButtonSuccess></TablecellHeader>
              </TableRow>
            </TableHead>
            <TableBody>
            {
              dataList ? 
              dataList.map((row) => 
                <RestpointDetail row={row} key={row} />
              )
              :
              ""
            }
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}

export default Respoint;
