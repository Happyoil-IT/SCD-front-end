import React, { useEffect, useState } from "react";
import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Icon, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { database } from "../../server/firebase";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import TruckDetail from './TruckDetal'
import theme from "../../theme/theme";
import { Link } from "react-router-dom";
import { TablecellHeader,IconButtonSuccess } from "../../theme/style";

const Truck = () => {
  const [dataList, setDataList] = useState();
  const [open,setOpen] = React.useState();
  const [CAP1,setCAP1] = React.useState("");
  const [CAP2,setCAP2] = React.useState("");
  const [CAP3,setCAP3] = React.useState("");
  const [CAP4,setCAP4] = React.useState("");
  const [CAP5,setCAP5] = React.useState("");
  const [CAP6,setCAP6] = React.useState("");
  const [CAP7,setCAP7] = React.useState("");
  const [CAP8,setCAP8] = React.useState("");
  const [PD1,setPD1] = React.useState("");
  const [PD2,setPD2] = React.useState("");
  const [PD3,setPD3] = React.useState("");
  const [PD4,setPD4] = React.useState("");
  const [PD5,setPD5] = React.useState("");
  const [PD6,setPD6] = React.useState("");
  const [PD7,setPD7] = React.useState("");
  const [PD8,setPD8] = React.useState("");
  const [V1,setV1] = React.useState("");
  const [V2,setV2] = React.useState("");
  const [V3,setV3] = React.useState("");
  const [V4,setV4] = React.useState("");
  const [V5,setV5] = React.useState("");
  const [V6,setV6] = React.useState("");
  const [V7,setV7] = React.useState("");
  const [V8,setV8] = React.useState("");
  const [num1,setNum1] = React.useState("");
  const [num2,setNum2] = React.useState("");
  const [num3,setNum3] = React.useState("");
  const [num4,setNum4] = React.useState("");
  const [num5,setNum5] = React.useState("");
  const [num6,setNum6] = React.useState("");
  const [num7,setNum7] = React.useState("");
  const [num8,setNum8] = React.useState("");
  const [num9,setNum9] = React.useState("");
  const [num10,setNum10] = React.useState("");
  const [num11,setNum11] = React.useState("");
  const [num12,setNum12] = React.useState("");
  const [num13,setNum13] = React.useState("");
  const [num14,setNum14] = React.useState("");

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
        Cap1 : CAP1,
        Cap2 : CAP2,
        Cap3 : CAP3,
        Cap4 : CAP4,
        Cap5 : CAP5,
        Cap6 : CAP6,
        Cap7 : CAP7,
        Cap8 : CAP8,
        PD1 : PD1,
        PD2 : PD2,
        PD3 : PD3,
        PD4 : PD4,
        PD5 : PD5,
        PD6 : PD6,
        PD7 : PD7,
        PD8 : PD8,
        V1 : V1,
        V2 : V2,
        V3 : V3,
        V4 : V4,
        V5 : V5,
        V6 : V6,
        V7 : V7,
        V8 : V8,
        locationล่าสุด: num1,
        จำนวนช่อง : num2,
        ทะเบียนหัว : num3,
        ทะเบียนหาง : num4,
        น้ำหนัก : num5,
        ประกัน : num6,
        พขร : num7,
        พรบ : num8,
        ภาษี : num9,
        สถานะรถ : num10,
        เรทน้ำมัน : num11,
        เวลาlocation : num12,
        เวลาสถานะ : num13,
        แผนPM : num14,
      }).then(() => {
        Swal.fire('เพิ่มข้อมูลสำเร็จ', '', 'success');
        console.log('Data pushed successfully');
      }).catch((error) => {
        Swal.fire('เพิ่มข้อมูลไม่สำเร็จ', '', 'error');
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
                    label="CAP1"
                    fullWidth
                    onChange={(e) => setCAP1(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField 
                    size="small"
                    label="CAP2"
                    fullWidth
                    onChange={(e) => setCAP2(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField 
                    size="small"
                    label="CAP3"
                    fullWidth
                    onChange={(e) => setCAP3(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField 
                    size="small"
                    label="CAP4"
                    fullWidth
                    onChange={(e) => setCAP4(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField 
                    size="small"
                    label="CAP5"
                    fullWidth
                    onChange={(e) => setCAP5(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField 
                    size="small"
                    label="CAP6"
                    fullWidth
                    onChange={(e) => setCAP6(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField 
                    size="small"
                    label="CAP7"
                    fullWidth
                    onChange={(e) => setCAP7(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField 
                    size="small"
                    label="CAP8"
                    fullWidth
                    onChange={(e) => setCAP8(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}><Divider  sx={{ border: 1 }}/></Grid>
                <Grid item xs={3}>
                  <TextField 
                    size="small"
                    label="PD1"
                    fullWidth
                    onChange={(e) => setPD1(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField 
                    size="small"
                    label="PD2"
                    fullWidth
                    onChange={(e) => setPD2(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField 
                    size="small"
                    label="PD3"
                    fullWidth
                    onChange={(e) => setPD3(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField 
                    size="small"
                    label="PD4"
                    fullWidth
                    onChange={(e) => setPD4(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField 
                    size="small"
                    label="PD5"
                    fullWidth
                    onChange={(e) => setPD5(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField 
                    size="small"
                    label="PD6"
                    fullWidth
                    onChange={(e) => setPD6(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField 
                    size="small"
                    label="PD7"
                    fullWidth
                    onChange={(e) => setPD7(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField 
                    size="small"
                    label="PD8"
                    fullWidth
                    onChange={(e) => setPD8(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}><Divider sx={{ border: 1 }}/></Grid>
                <Grid item xs={3}>
                  <TextField 
                    size="small"
                    label="V1"
                    fullWidth
                    onChange={(e) => setV1(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField 
                    size="small"
                    label="V2"
                    fullWidth
                    onChange={(e) => setV2(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField 
                    size="small"
                    label="V3"
                    fullWidth
                    onChange={(e) => setV3(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField 
                    size="small"
                    label="V4"
                    fullWidth
                    onChange={(e) => setV4(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField 
                    size="small"
                    label="V5"
                    fullWidth
                    onChange={(e) => setV5(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField 
                    size="small"
                    label="V6"
                    fullWidth
                    onChange={(e) => setV6(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField 
                    size="small"
                    label="V7"
                    fullWidth
                    onChange={(e) => setV7(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField 
                    size="small"
                    label="V8"
                    fullWidth
                    onChange={(e) => setV8(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}><Divider sx={{ border: 1 }}/></Grid>
                <Grid item xs={12}>
                  <TextField 
                    size="small"
                    label="locationล่าสุด"
                    fullWidth
                    onChange={(e) => setNum1(e.target.value)}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField 
                    size="small"
                    label="จำนวนช่อง"
                    fullWidth
                    onChange={(e) => setNum2(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField 
                    size="small"
                    label="ทะเบียนหัว"
                    fullWidth
                    onChange={(e) => setNum3(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField 
                    size="small"
                    label="ทะเบียนหาง"
                    fullWidth
                    onChange={(e) => setNum4(e.target.value)}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField 
                    size="small"
                    label="น้ำหนัก"
                    fullWidth
                    onChange={(e) => setNum5(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    size="small"
                    label="ประกัน"
                    fullWidth
                    onChange={(e) => setNum6(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    size="small"
                    label="พขร"
                    fullWidth
                    onChange={(e) => setNum7(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    size="small"
                    label="พรบ"
                    fullWidth
                    onChange={(e) => setNum8(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    size="small"
                    label="ภาษี"
                    fullWidth
                    onChange={(e) => setNum9(e.target.value)}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField 
                    size="small"
                    label="สถานะ"
                    fullWidth
                    onChange={(e) => setNum10(e.target.value)}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField 
                    size="small"
                    label="เรทน้ำมัน"
                    fullWidth
                    onChange={(e) => setNum11(e.target.value)}
                  />
                </Grid>
                <Grid item xs={8}>
                  <TextField 
                    size="small"
                    label="เวลาlocation"
                    fullWidth
                    onChange={(e) => setNum12(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField 
                    size="small"
                    label="เวลาสถานะ"
                    fullWidth
                    onChange={(e) => setNum13(e.target.value)}
                  />
                </Grid>
                <Grid item xs={8}>
                  <TextField 
                    size="small"
                    label="แผนPM"
                    fullWidth
                    onChange={(e) => setNum14(e.target.value)}
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
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>Cap1</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>Cap2</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>Cap3</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>Cap4</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>Cap5</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>Cap6</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>Cap7</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>Cap8</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>PD1</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>PD2</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>PD3</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>PD4</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>PD5</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>PD6</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>PD7</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>PD8</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>V1</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>V2</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>V3</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>V4</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>V5</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>V6</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>V7</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>V8</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>locationล่าสุด</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>จำนวนช่อง</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>ทะเบียนหัว</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>ทะเบียนหาง</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>น้ำหนัก</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>ประกัน</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>พขร</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>พรบ</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>ภาษี</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>สถานะรถ</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>เรทน้ำมัน</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>เวลาlocation</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>เวลาสถานะ</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>แผนPM</TablecellHeader>
                <TablecellHeader sx={{ position: "sticky", right: 0,backgroundColor: theme.palette.error.light }} width={150}><IconButtonSuccess color="success" onClick={handleClickOpen}><AddBoxRoundedIcon/></IconButtonSuccess></TablecellHeader>
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
