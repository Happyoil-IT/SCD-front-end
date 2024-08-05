import React, { useEffect, useState } from "react";
import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Icon, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import database from "../../server/firebase";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import OrderDetail from './OrderDetail'
import theme from "../../theme/theme";
import { Link } from "react-router-dom";
import { TablecellHeader } from "../../theme/style";

const Order = () => {
  const [dataList, setDataList] = useState();
  const [open,setOpen] = React.useState();
  const [address,setAddress] = React.useState("");
  const [billing,setBilling] = React.useState("");
  const [buyprice,setBuyprice] = React.useState("");
  const [customer,setCustomer] = React.useState("");
  const [date,setDate] = React.useState("");
  const [depot,setDepot] = React.useState("");
  const [location,setLocation] = React.useState("");
  const [orderseller,setOrderseller] = React.useState("");
  const [ordersellerID,setOrdersellerID] = React.useState("");
  const [orderstatus,setOrderstatus] = React.useState("");
  const [ordertag,setOrdertag] = React.useState("");
  const [piclink,setPiclink] = React.useState("");
  const [product,setProduct] = React.useState("");
  const [sellprice,setSellprice] = React.useState("");
  const [seq,setSeq] = React.useState("");
  const [time,setTime] = React.useState("");
  const [truck,setTruck] = React.useState("");
  const [volume,setVolume] = React.useState("");
  const [wt,setWT] = React.useState("");
  const [fixed,setFixed] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    useEffect(() => {
        database.ref('order').on('value', (snapshot) => {
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
      database.ref('order').child(dataList.length).update({
        address: address,
        billing: billing,
        buyprice: buyprice,
        customer: customer,
        date: date,
        depot: depot,
        location: location,
        orderseller: orderseller,
        ordersellerID: ordersellerID,
        orderstatus: orderstatus,
        ordertag: ordertag,
        piclink: piclink,
        product: product,
        sellprice: sellprice,
        seq: seq,
        time: time,
        truck: truck,
        volume: volume,
        wt : wt,
        กำหนดชำระ : fixed
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
        <Typography variant="h5" color={theme.palette.info.dark} fontWeight="bold" textAlign="center" sx={{ marginTop: -6,marginBottom:2 }} gutterBottom>(ข้อมูล Order)</Typography>
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
                <Grid item xs={8}>
                  <TextField 
                    size="small"
                    label="address"
                    fullWidth
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField 
                    size="small"
                    label="billing"
                    fullWidth
                    onChange={(e) => setBilling(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    size="small"
                    label="buyprice"
                    fullWidth
                    onChange={(e) => setBuyprice(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    size="small"
                    label="customer"
                    fullWidth
                    onChange={(e) => setCustomer(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    size="small"
                    label="date"
                    fullWidth
                    onChange={(e) => setDate(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    size="small"
                    label="depot"
                    fullWidth
                    onChange={(e) => setDepot(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    size="small"
                    label="location"
                    fullWidth
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    size="small"
                    label="orderseller"
                    fullWidth
                    onChange={(e) => setOrderseller(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    size="small"
                    label="ordersellerID"
                    fullWidth
                    onChange={(e) => setOrdersellerID(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    size="small"
                    label="orderstatus"
                    fullWidth
                    onChange={(e) => setOrderstatus(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    size="small"
                    label="ordertag"
                    fullWidth
                    onChange={(e) => setOrdertag(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    size="small"
                    label="piclink"
                    fullWidth
                    onChange={(e) => setPiclink(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    size="small"
                    label="product"
                    fullWidth
                    onChange={(e) => setProduct(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    size="small"
                    label="sellprice"
                    fullWidth
                    onChange={(e) => setSellprice(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    size="small"
                    label="seq"
                    fullWidth
                    onChange={(e) => setSeq(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    size="small"
                    label="time"
                    fullWidth
                    onChange={(e) => setTime(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    size="small"
                    label="truck"
                    fullWidth
                    onChange={(e) => setTruck(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    size="small"
                    label="volume"
                    fullWidth
                    onChange={(e) => setVolume(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    size="small"
                    label="wt"
                    fullWidth
                    onChange={(e) => setWT(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    size="small"
                    label="กำหนดชำระ"
                    fullWidth
                    onChange={(e) => setFixed(e.target.value)}
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
                <TablecellHeader>address</TablecellHeader>
                <TablecellHeader>billing</TablecellHeader>
                <TablecellHeader>buyprice</TablecellHeader>
                <TablecellHeader>customer</TablecellHeader>
                <TablecellHeader>date</TablecellHeader>
                <TablecellHeader>depot</TablecellHeader>
                <TablecellHeader>location</TablecellHeader>
                <TablecellHeader>orderseller</TablecellHeader>
                <TablecellHeader>ordersellerID</TablecellHeader>
                <TablecellHeader>orderstatus</TablecellHeader>
                <TablecellHeader>ordertag</TablecellHeader>
                <TablecellHeader>piclink</TablecellHeader>
                <TablecellHeader>product</TablecellHeader>
                <TablecellHeader>sellprice</TablecellHeader>
                <TablecellHeader>seq</TablecellHeader>
                <TablecellHeader>time</TablecellHeader>
                <TablecellHeader>truck</TablecellHeader>
                <TablecellHeader>volume</TablecellHeader>
                <TablecellHeader>wt</TablecellHeader>
                <TablecellHeader>กำหนดชำระ</TablecellHeader>
                <TablecellHeader sx={{ position: "sticky", right: 0, }} width={150}><IconButton color="success" onClick={handleClickOpen} sx={{ backgroundColor: theme.palette.primary.contrastText }}><AddBoxRoundedIcon/></IconButton></TablecellHeader>
              </TableRow>
            </TableHead>
            <TableBody>
            {
              dataList ? 
              dataList.map((row) => 
                <OrderDetail row={row} key={row} />
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

export default Order;
