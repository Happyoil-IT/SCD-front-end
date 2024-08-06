import React, { useEffect, useState } from "react";
import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Icon, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import database from "../../server/firebase";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import CustomersDetail from './CustomersDetail'
import theme from "../../theme/theme";
import { TablecellHeader } from "../../theme/style";

const Customers = () => {
  const [dataList, setDataList] = useState();
  const [open,setOpen] = React.useState();
  const [customerid,setCustomerID] = React.useState("");
  const [address,setAddress] = React.useState("");
  const [creditlimit,setCreditLimit] = React.useState("");
  const [creditterm,setCreditTerm] = React.useState("");
  const [custag,setCustag] = React.useState("");
  const [debt,setDebt] = React.useState("");
  const [location,setLocation] = React.useState("");
  const [route,setRoute] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    useEffect(() => {
        database.ref('primarydata/customersid').on('value', (snapshot) => {
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
      database.ref('primarydata/customersid').child(dataList.length).update({
        ID : customerid,
        address : address,
        creditlimit : creditlimit,
        creditterm : creditterm,
        custag : custag,
        location : location,
        route : route,
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
        <Typography variant="h5" color={theme.palette.info.dark} fontWeight="bold" textAlign="center" sx={{ marginTop: -6,marginBottom:2 }} gutterBottom>(ข้อมูลของ CustomersID)</Typography>
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
                <Grid item xs={3}>
                  <TextField 
                    size="small"
                    label="customerID"
                    fullWidth
                    onChange={(e) => setCustomerID(e.target.value)}
                  />
                </Grid>
                <Grid item xs={9}>
                  <TextField 
                    size="small"
                    label="address"
                    fullWidth
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    size="small"
                    label="Credit_Limit"
                    fullWidth
                    onChange={(e) => setCreditLimit(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    size="small"
                    label="Credit_Term"
                    fullWidth
                    onChange={(e) => setCreditTerm(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField 
                    size="small"
                    label="Custag"
                    fullWidth
                    onChange={(e) => setCustag(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField 
                    size="small"
                    label="Debt"
                    fullWidth
                    onChange={(e) => setDebt(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField 
                    size="small"
                    label="Route"
                    fullWidth
                    onChange={(e) => setRoute(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                    size="small"
                    label="Location"
                    fullWidth
                    onChange={(e) => setLocation(e.target.value)}
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
                <TablecellHeader>CustomerID</TablecellHeader>
                <TablecellHeader>Address</TablecellHeader>
                <TablecellHeader>Credit_Limit</TablecellHeader>
                <TablecellHeader>Credit_Term</TablecellHeader>
                <TablecellHeader>Custag</TablecellHeader>
                <TablecellHeader>Debt</TablecellHeader>
                <TablecellHeader>Location</TablecellHeader>
                <TablecellHeader>Route</TablecellHeader>
                <TablecellHeader sx={{ position: "sticky", right: 0, }} width={150}><IconButton color="success" onClick={handleClickOpen} sx={{ backgroundColor: theme.palette.primary.contrastText }}><AddBoxRoundedIcon/></IconButton></TablecellHeader>
              </TableRow>
            </TableHead>
            <TableBody>
            {
              dataList ? 
              dataList.map((row) => 
                <CustomersDetail row={row} key={row} />
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

export default Customers;
