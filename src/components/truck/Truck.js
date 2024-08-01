import React, { useEffect, useState } from "react";
import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Icon, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import database from "../../server/firebase";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import TruckDetail from './TruckDetal'
import theme from "../../theme/theme";
import { Link } from "react-router-dom";

const Truck = () => {
  const [dataList, setDataList] = useState();
  const [open,setOpen] = React.useState();
  const [num1,setNum1] = React.useState("");
  const [num2,setNum2] = React.useState("");
  const [num3,setNum3] = React.useState("");
  const [num4,setNum4] = React.useState("");
  const [num5,setNum5] = React.useState("");
  const [num6,setNum6] = React.useState("");
  const [num7,setNum7] = React.useState("");
  const [num8,setNum8] = React.useState("");
  const [num9,setNum9] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    useEffect(() => {
        database.ref('primarydata/truck').on('value', (snapshot) => {
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
      database.ref('primarydata/truck').child(dataList.length).update({
        Cap1 : "-",
        Cap2 : "-",
        Cap3 : "-",
        Cap4 : "-",
        Cap5 : "-",
        Cap6 : "-",
        Cap7 : "-",
        Cap8 : "-",
        PD1 : "-",
        PD2 : "-",
        PD3 : "-",
        PD4 : "-",
        PD5 : "-",
        PD6 : "-",
        PD7 : "-",
        PD8 : "-",
        V1 : "-",
        V2 : "-",
        V3 : "-",
        V4 : "-",
        V5 : "-",
        V6 : "-",
        V7 : "-",
        V8 : "-",
        locationล่าสุด: "-",
        จำนวนช่อง : num1,
        ทะเบียนหัว : num2,
        ทะเบียนหาง : num3,
        น้ำหนัก : num4,
        ประกัน : num5,
        พขร : num6,
        พรบ : "-",
        ภาษี : "-",
        สถานะรถ : num7,
        เรทน้ำมัน : num8,
        เวลาlocation : num9,
        เวลาสถานะ : "-",
        แผนPM : "-",

        จำนวนช่อง: num1,
        ทะเบียนหัว : num2,
        ทะเบียนหาง : num3,
        น้ำหนัก : num4,
        ประกัน : num5,
        พขร : num6,
        สถานะรถ : num7,
        เรทน้ำมัน : num8,
        เวลาlocation : num9,
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
        <Typography variant="h5" color={theme.palette.info.dark} fontWeight="bold" textAlign="center" sx={{ marginTop: -6,marginBottom:2 }} gutterBottom>(ข้อมูลของ Truck)</Typography>
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
                    label="ข้อมูลช่อง"
                    fullWidth
                    onChange={(e) => setNum1(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField 
                    size="small"
                    label="ทะเบียนหัว"
                    fullWidth
                    onChange={(e) => setNum2(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField 
                    size="small"
                    label="ทะเบียนหาง"
                    fullWidth
                    onChange={(e) => setNum3(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField 
                    size="small"
                    label="น้ำหนัก"
                    fullWidth
                    onChange={(e) => setNum4(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField 
                    size="small"
                    label="ประกัน"
                    fullWidth
                    onChange={(e) => setNum5(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField 
                    size="small"
                    label="พขร"
                    fullWidth
                    onChange={(e) => setNum6(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField 
                    size="small"
                    label="สถานะ"
                    fullWidth
                    onChange={(e) => setNum7(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField 
                    size="small"
                    label="เรทน้ำมัน"
                    fullWidth
                    onChange={(e) => setNum8(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField 
                    size="small"
                    label="เวลาlocation"
                    fullWidth
                    onChange={(e) => setNum9(e.target.value)}
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
                <TableCell sx={{ color: "white",backgroundColor: theme.palette.error.light,position: "sticky", left: 0, textAlign: "center", width: 50 }}>ID</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>Cap1</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>Cap2</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>Cap3</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>Cap4</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>Cap5</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>Cap6</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>Cap7</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>Cap8</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>PD1</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>PD2</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>PD3</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>PD4</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>PD5</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>PD6</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>PD7</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>PD8</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>V1</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>V2</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>V3</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>V4</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>V5</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>V6</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>V7</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>V8</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>locationล่าสุด</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>จำนวนช่อง</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>ทะเบียนหัว</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>ทะเบียนหาง</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>น้ำหนัก</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>ประกัน</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>พขร</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>พรบ</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>ภาษี</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>สถานะรถ</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>เรทน้ำมัน</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>เวลาlocation</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>เวลาสถานะ</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.error.main, color: "white", textAlign: "center" }}>แผนPM</TableCell>
                <TableCell sx={{ textAlign: "center",backgroundColor: theme.palette.error.light,position: "sticky", right: 0, }} width={150}><IconButton color="success" onClick={handleClickOpen} sx={{ backgroundColor: theme.palette.primary.contrastText }}><AddBoxRoundedIcon/></IconButton></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {
              dataList ? 
              dataList.map((row) => 
                <TruckDetail row={row} key={row} />
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

export default Truck;
