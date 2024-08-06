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
import { TablecellHeader } from "../../theme/style";

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
                <Grid item xs={3}>
                  <TextField 
                    size="small"
                    label="ข้อมูลช่อง"
                    fullWidth
                    onChange={(e) => setNum1(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField 
                    size="small"
                    label="ทะเบียนหัว"
                    fullWidth
                    onChange={(e) => setNum2(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField 
                    size="small"
                    label="ทะเบียนหาง"
                    fullWidth
                    onChange={(e) => setNum3(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField 
                    size="small"
                    label="น้ำหนัก"
                    fullWidth
                    onChange={(e) => setNum4(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    size="small"
                    label="ประกัน"
                    fullWidth
                    onChange={(e) => setNum5(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    size="small"
                    label="พขร"
                    fullWidth
                    onChange={(e) => setNum6(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField 
                    size="small"
                    label="สถานะ"
                    fullWidth
                    onChange={(e) => setNum7(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField 
                    size="small"
                    label="เรทน้ำมัน"
                    fullWidth
                    onChange={(e) => setNum8(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
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
                <TablecellHeader sx={{ position: "sticky", left: 0, width: 50 }}>ID</TablecellHeader>
                <TablecellHeader>Cap1</TablecellHeader>
                <TablecellHeader>Cap2</TablecellHeader>
                <TablecellHeader>Cap3</TablecellHeader>
                <TablecellHeader>Cap4</TablecellHeader>
                <TablecellHeader>Cap5</TablecellHeader>
                <TablecellHeader>Cap6</TablecellHeader>
                <TablecellHeader>Cap7</TablecellHeader>
                <TablecellHeader>Cap8</TablecellHeader>
                <TablecellHeader>PD1</TablecellHeader>
                <TablecellHeader>PD2</TablecellHeader>
                <TablecellHeader>PD3</TablecellHeader>
                <TablecellHeader>PD4</TablecellHeader>
                <TablecellHeader>PD5</TablecellHeader>
                <TablecellHeader>PD6</TablecellHeader>
                <TablecellHeader>PD7</TablecellHeader>
                <TablecellHeader>PD8</TablecellHeader>
                <TablecellHeader>V1</TablecellHeader>
                <TablecellHeader>V2</TablecellHeader>
                <TablecellHeader>V3</TablecellHeader>
                <TablecellHeader>V4</TablecellHeader>
                <TablecellHeader>V5</TablecellHeader>
                <TablecellHeader>V6</TablecellHeader>
                <TablecellHeader>V7</TablecellHeader>
                <TablecellHeader>V8</TablecellHeader>
                <TablecellHeader>locationล่าสุด</TablecellHeader>
                <TablecellHeader>จำนวนช่อง</TablecellHeader>
                <TablecellHeader>ทะเบียนหัว</TablecellHeader>
                <TablecellHeader>ทะเบียนหาง</TablecellHeader>
                <TablecellHeader>น้ำหนัก</TablecellHeader>
                <TablecellHeader>ประกัน</TablecellHeader>
                <TablecellHeader>พขร</TablecellHeader>
                <TablecellHeader>พรบ</TablecellHeader>
                <TablecellHeader>ภาษี</TablecellHeader>
                <TablecellHeader>สถานะรถ</TablecellHeader>
                <TablecellHeader>เรทน้ำมัน</TablecellHeader>
                <TablecellHeader>เวลาlocation</TablecellHeader>
                <TablecellHeader>เวลาสถานะ</TablecellHeader>
                <TablecellHeader>แผนPM</TablecellHeader>
                <TablecellHeader sx={{ position: "sticky", right: 0, }} width={150}><IconButton color="success" onClick={handleClickOpen} sx={{ backgroundColor: theme.palette.primary.contrastText }}><AddBoxRoundedIcon/></IconButton></TablecellHeader>
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
