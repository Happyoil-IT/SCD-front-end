import React, { useEffect, useState } from "react";
import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Icon, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import database from "./server/firebase";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import theme from "./theme/theme";

function Detail({ row }){
  const [edit,setEdit] = React.useState("");
  const [num1,setNum1] = React.useState("");
  const [num2,setNum2] = React.useState("");
  const [num3,setNum3] = React.useState("");
  const [num4,setNum4] = React.useState("");
  const [num5,setNum5] = React.useState("");
  const [num6,setNum6] = React.useState("");
  const [num7,setNum7] = React.useState("");
  const [num8,setNum8] = React.useState("");

  const deleteData = () => {
    withReactContent(Swal).fire({
      title: 'ต้องการลบใช่หรือไม่',
      icon : 'error',
      confirmButtonText: 'ตกลง',
      cancelButtonText: 'ยกเลิก',
      showCancelButton: true ,
    }).then((result) => {
      if (result.isConfirmed) {
          Swal.fire('ลบข้อมูลแล้ว', '', 'success');
          database.ref("primarydata/truck").child(row.id).remove();
          setEdit("");
      } else if (result.isDenied) {
          Swal.fire('ยกเลิกลบข้อมูล', '', 'info');
          setEdit("");
      }
  });
  };

  const completeData = () => {
    database.ref("primarydata/truck").child(row.id).update({
      ทะเบียนหัว : num1,
      ทะเบียนหาง : num2,
      น้ำหนัก : num3,
      ประกัน : num4,
      พขร : num5,
      สถานะรถ : num6,
      เรทน้ำมัน : num7,
      เวลาlocation : num8,
    });
    setEdit("");
  };

  return (
    <React.Fragment>
      {
        edit === row.id ?
        <TableRow>
          <TableCell>{row.id}</TableCell>
          <TableCell>{row.จำนวนช่อง}</TableCell>
          <TableCell>
            <TextField 
              size="small"
              defaultValue={row.ทะเบียนหัว}
              onChange={(e) => setNum1(e.target.value)}
            />
          </TableCell>
          <TableCell>
            <TextField 
              size="small"
              defaultValue={row.ทะเบียนหาง}
              onChange={(e) => setNum2(e.target.value)}
            />
          </TableCell>
          <TableCell>
            <TextField 
              size="small"
              defaultValue={row.น้ำหนัก}
              onChange={(e) => setNum3(e.target.value)}
            />
          </TableCell>
          <TableCell>
            <TextField 
              size="small"
              defaultValue={row.ประกัน}
              onChange={(e) => setNum4(e.target.value)}
            />
          </TableCell>
          <TableCell>
            <TextField 
              size="small"
              defaultValue={row.พขร}
              onChange={(e) => setNum5(e.target.value)}
            />
          </TableCell>
          <TableCell>
            <TextField 
              size="small"
              defaultValue={row.สถานะรถ}
              onChange={(e) => setNum6(e.target.value)}
            />
          </TableCell>
          <TableCell>
            <TextField 
              size="small"
              defaultValue={row.เรทน้ำมัน}
              onChange={(e) => setNum7(e.target.value)}
            />
          </TableCell>
          <TableCell>
            <TextField 
              size="small"
              defaultValue={row.เวลาlocation}
              onChange={(e) => setNum8(e.target.value)}
            />
          </TableCell>
          <TableCell width={150}>
            <Button variant="contained" color="error" sx={{ marginRight:1 }} onClick={() => setEdit("")}>ยกเลิก</Button>
            <Button variant="contained" color="success" onClick={completeData}>บันทึก</Button>
          </TableCell>
        </TableRow>
        :
        <TableRow sx={{ backgroundColor: "lightgray" }}>
          <TableCell sx={{ textAlign:"center" }}>{row.id}</TableCell>
          <TableCell sx={{ textAlign:"center" }}>{row.จำนวนช่อง}</TableCell>
          <TableCell sx={{ textAlign:"center" }}>{row.ทะเบียนหัว}</TableCell>
          <TableCell sx={{ textAlign:"center" }}>{row.ทะเบียนหาง}</TableCell>
          <TableCell sx={{ textAlign:"center" }}>{row.น้ำหนัก}</TableCell>
          <TableCell sx={{ textAlign:"center" }}>{row.ประกัน}</TableCell>
          <TableCell sx={{ textAlign:"center" }}>{row.พขร}</TableCell>
          <TableCell sx={{ textAlign:"center" }}>{row.สถานะรถ}</TableCell>
          <TableCell sx={{ textAlign:"center" }}>{row.เรทน้ำมัน}</TableCell>
          <TableCell sx={{ textAlign:"center" }}>{row.เวลาlocation}</TableCell>
          <TableCell>
            <Button variant="contained" color="error" sx={{ marginRight:1 }} onClick={deleteData}>ลบ</Button>
            <Button variant="contained" color="warning" onClick={() => setEdit(row.id)}>แก้ไข</Button>
          </TableCell>
        </TableRow>
      }
    </React.Fragment>
  )
}

const App = () => {
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
      database.ref('primarydata/truck').push({
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
    <Container maxWidth="xl">
      <Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant="h1" color={theme.palette.warning.dark} fontWeight="bold" gutterBottom>S</Typography>
          <Typography variant="h1" color={theme.palette.error.dark} fontWeight="bold"gutterBottom>C</Typography>
          <Typography variant="h1" color={theme.palette.info.dark} fontWeight="bold"gutterBottom>D</Typography>
        </Box>
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
                    label="ข้อมูลช่อง"
                    fullWidth
                    onChange={(e) => setNum1(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField 
                    label="ทะเบียนหัว"
                    fullWidth
                    onChange={(e) => setNum2(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField 
                    label="ทะเบียนหาง"
                    fullWidth
                    onChange={(e) => setNum3(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField 
                    label="น้ำหนัก"
                    fullWidth
                    onChange={(e) => setNum4(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField 
                    label="ประกัน"
                    fullWidth
                    onChange={(e) => setNum5(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField 
                    label="พขร"
                    fullWidth
                    onChange={(e) => setNum6(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField 
                    label="สถานะ"
                    fullWidth
                    onChange={(e) => setNum7(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField 
                    label="เรทน้ำมัน"
                    fullWidth
                    onChange={(e) => setNum8(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField 
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
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ position: "sticky",top: 0, zIndex:1 }}>
              <TableRow sx={{ backgroundColor: theme.palette.error.main }}>
                <TableCell sx={{ color: "white", textAlign: "center" }}>ID</TableCell>
                <TableCell sx={{ color: "white", textAlign: "center" }}>ช่อง</TableCell>
                <TableCell sx={{ color: "white", textAlign: "center" }}>ทะเบียนหัว</TableCell>
                <TableCell sx={{ color: "white", textAlign: "center" }}>ทะเบียนหาง</TableCell>
                <TableCell sx={{ color: "white", textAlign: "center" }}>น้ำหนัก</TableCell>
                <TableCell sx={{ color: "white", textAlign: "center" }}>ประกัน</TableCell>
                <TableCell sx={{ color: "white", textAlign: "center" }}>พขร</TableCell>
                <TableCell sx={{ color: "white", textAlign: "center" }}>สถานะรถ</TableCell>
                <TableCell sx={{ color: "white", textAlign: "center" }}>เรทน้ำมัน</TableCell>
                <TableCell sx={{ color: "white", textAlign: "center" }}>เวลาlocation</TableCell>
                <TableCell sx={{ textAlign: "center",backgroundColor: theme.palette.error.light }} width={150}><Button variant="contained" color="success" onClick={handleClickOpen}>เพิ่มข้อมูล</Button></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {
              dataList ? 
              dataList.map((row) => 
                <Detail row={row} key={row} />
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

export default App;
