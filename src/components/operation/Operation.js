import React, { useEffect, useState } from "react";
import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Icon, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import database from "../../server/firebase";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import OperationDetail from './OperationDetail'
import theme from "../../theme/theme";
import { Link } from "react-router-dom";

const Operation = () => {
  const [dataList, setDataList] = useState();
  const [open,setOpen] = React.useState();
  const [otp,setOTP] = React.useState("");
  const [otpback,setOTPback] = React.useState("");
  const [salecode,setSaleCode] = React.useState("");
  const [salename,setSaleName] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    useEffect(() => {
        database.ref('primarydata/seller').on('value', (snapshot) => {
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
      database.ref('primarydata/seller').child(dataList.length).update({
        otp : otp,
        otpback : otpback,
        salecode : salecode,
        salename : salename
      }).then(() => {
        console.log('Data pushed successfully');
      }).catch((error) => {
        console.error('Error pushing data:', error);
      });
      setOpen(false);
    };

  return (
    <Container maxWidth="lg" sx={{ marginTop:10 }}>
      <Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant="h1" color={theme.palette.warning.dark} fontWeight="bold" gutterBottom>S</Typography>
          <Typography variant="h1" color={theme.palette.error.dark} fontWeight="bold" gutterBottom>C</Typography>
          <Typography variant="h1" color={theme.palette.info.dark} fontWeight="bold" gutterBottom>D</Typography>
        </Box>
        <Typography variant="h5" color={theme.palette.info.dark} fontWeight="bold" textAlign="center" sx={{ marginTop: -6,marginBottom:2 }} gutterBottom>(ข้อมูลของ Seller)</Typography>
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
                <Grid item xs={6}>
                  <TextField 
                    size="small"
                    label="OTP"
                    fullWidth
                    onChange={(e) => setOTP(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    size="small"
                    label="OTP-Back"
                    fullWidth
                    onChange={(e) => setOTPback(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    size="small"
                    label="Sale-Code"
                    fullWidth
                    onChange={(e) => setSaleCode(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    size="small"
                    label="Sale-Name"
                    fullWidth
                    onChange={(e) => setSaleName(e.target.value)}
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
                <TableCell sx={{ color: "white",backgroundColor: theme.palette.error.light,position: "sticky", left: 0, textAlign: "center" }}>ID</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>OTP</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>OTP-Back</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>Sale_Code</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>Sale_Name</TableCell>
                <TableCell sx={{ textAlign: "center",backgroundColor: theme.palette.error.light,position: "sticky", right: 0, }} width={150}><IconButton color="success" onClick={handleClickOpen} sx={{ backgroundColor: theme.palette.primary.contrastText }}><AddBoxRoundedIcon/></IconButton></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {
              dataList ? 
              dataList.map((row) => 
                <OperationDetail row={row} key={row} />
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

export default Operation;
