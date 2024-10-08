import React, { useEffect, useState } from "react";
import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Icon, IconButton, LinearProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { auth, database } from "../../server/firebase";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import OperationDetail from './OperationDetail'
import theme from "../../theme/theme";
import { Link, useNavigate } from "react-router-dom";
import { IconButtonSuccess, TablecellHeader } from "../../theme/style";
import { onAuthStateChanged } from "firebase/auth";

const Operation = () => {
  const navigate = useNavigate();
  const [dataList, setDataList] = useState();
  const [open,setOpen] = React.useState();
  const [BEP,setBEP] = React.useState("");
  const [CH1,setCH1] = React.useState("");
  const [CH2,setCH2] = React.useState("");
  const [CH3,setCH3] = React.useState("");
  const [CH4,setCH4] = React.useState("");
  const [CH5,setCH5] = React.useState("");
  const [CH6,setCH6] = React.useState("");
  const [CH7,setCH7] = React.useState("");
  const [CH8,setCH8] = React.useState("");
  const [TSID,setTSID] = React.useState("");
  const [date,setDate] = React.useState("");
  const [depotname,setDepotname] = React.useState("");
  const [netprofit,setNetprofit] = React.useState("");
  const [restpoint,setRestpoint] = React.useState("");
  const [route,setRoute] = React.useState("");
  const [status,setStatus] = React.useState("");
  const [sumvolume,setSumvolume] = React.useState("");
  const [sumwt,setSumwt] = React.useState("");
  const [time,setTime] = React.useState("");
  const [truck,setTruck] = React.useState("");
  const [way,setWay] = React.useState("");
  const [progress, setProgress] = React.useState(0);
  const [query, setQuery] = React.useState('idle');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    useEffect(() => {
        database.ref('operation').on('value', (snapshot) => {
            const datas = snapshot.val();
            const dataList = [];
            for ( let id in datas ) {
                dataList.push({ id, ...datas[id] });
            }
            console.log(dataList);
            setDataList(dataList);

            const timer = setInterval(() => {
              setProgress((oldProgress) => {
                if (oldProgress === 100) {
                  setQuery('success');
                  return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
              });
            }, 200);
        
            return () => {
              clearInterval(timer);
            };
        });

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
    }, []);

    const handleSubmit = () => {
      // ผลักดันข้อมูลไปยัง Realtime Database
      database.ref('operation').child(dataList.length).update({
        BEP: BEP,
        CH1: CH1,
        CH2: CH2,
        CH3: CH3,
        CH4: CH4,
        CH5: CH5,
        CH6: CH6,
        CH7: CH7,
        CH8: CH8,
        TSID: TSID,
        date: date,
        depotname: depotname,
        netprofit: netprofit,
        restpoint: restpoint,
        route: route,
        status: status,
        sumvolume: sumvolume,
        sumwt: sumwt,
        time: time,
        truck: truck,
        ระยะทาง: way
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
    <Container maxWidth="lg" sx={{ marginTop:10 }}>
      <Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant="h1" color={theme.palette.warning.dark} fontWeight="bold" gutterBottom>S</Typography>
          <Typography variant="h1" color={theme.palette.error.dark} fontWeight="bold" gutterBottom>C</Typography>
          <Typography variant="h1" color={theme.palette.info.dark} fontWeight="bold" gutterBottom>D</Typography>
        </Box>
        <Typography variant="h5" color={theme.palette.info.dark} fontWeight="bold" textAlign="center" sx={{ marginTop: -6,marginBottom:2 }} gutterBottom>(ข้อมูลของ Operation)</Typography>
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
                <Grid item xs={2}>
                  <TextField 
                    size="small"
                    label="BEP"
                    fullWidth
                    onChange={(e) => setBEP(e.target.value)}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField 
                    size="small"
                    label="CH1"
                    fullWidth
                    onChange={(e) => setCH1(e.target.value)}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField 
                    size="small"
                    label="CH2"
                    fullWidth
                    onChange={(e) => setCH2(e.target.value)}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField 
                    size="small"
                    label="CH3"
                    fullWidth
                    onChange={(e) => setCH3(e.target.value)}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField 
                    size="small"
                    label="CH4"
                    fullWidth
                    onChange={(e) => setCH4(e.target.value)}
                  />
                </Grid>
              <Grid item xs={2}>
                  <TextField 
                    size="small"
                    label="CH5"
                    fullWidth
                    onChange={(e) => setCH5(e.target.value)}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField 
                    size="small"
                    label="CH6"
                    fullWidth
                    onChange={(e) => setCH6(e.target.value)}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField 
                    size="small"
                    label="CH7"
                    fullWidth
                    onChange={(e) => setCH7(e.target.value)}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField 
                    size="small"
                    label="CH8"
                    fullWidth
                    onChange={(e) => setCH8(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField 
                    size="small"
                    label="TSID"
                    fullWidth
                    onChange={(e) => setTSID(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField 
                    size="small"
                    label="date"
                    fullWidth
                    onChange={(e) => setDate(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField 
                    size="small"
                    label="depotname"
                    fullWidth
                    onChange={(e) => setDepotname(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField 
                    size="small"
                    label="netprofit"
                    fullWidth
                    onChange={(e) => setNetprofit(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField 
                    size="small"
                    label="restpoint"
                    fullWidth
                    onChange={(e) => setRestpoint(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                    size="small"
                    label="route"
                    fullWidth
                    onChange={(e) => setRoute(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField 
                    size="small"
                    label="status"
                    fullWidth
                    onChange={(e) => setStatus(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField 
                    size="small"
                    label="sumvolume"
                    fullWidth
                    onChange={(e) => setSumvolume(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField 
                    size="small"
                    label="sumwt"
                    fullWidth
                    onChange={(e) => setSumwt(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
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
                    label="ระยะทาง"
                    fullWidth
                    onChange={(e) => setWay(e.target.value)}
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
                <TablecellHeader sx={{ position: "sticky", left: 0 }}>ID</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>BEP</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>CH1</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>CH2</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>CH3</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>CH4</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>CH5</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>CH6</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>CH7</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>CH8</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>TSID</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>Date</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>Depotname</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>Netprofit</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>Restpoint</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>Status</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>Sumvolume</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>Sumwt</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>Time</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>Truck</TablecellHeader>
                <TablecellHeader sx={{ paddingLeft:5,paddingRight:5 }}>ระยะทาง</TablecellHeader>
                <TablecellHeader sx={{ textAlign: "left"}}>Route</TablecellHeader>
                <TablecellHeader sx={{ position: "sticky", right: 0,backgroundColor: theme.palette.error.light }} width={150}><IconButtonSuccess color="success" onClick={handleClickOpen}><AddBoxRoundedIcon/></IconButtonSuccess></TablecellHeader>
              </TableRow>
            </TableHead>
            {query === 'success' ? (
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
              ) : (
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={11}>
                        <LinearProgress variant="determinate" color="warning" value={progress} />
                    </TableCell>
                  </TableRow>
                </TableBody>
              )}
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}

export default Operation;
