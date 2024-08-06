import React, { useEffect, useState } from "react";
import { Box, Button, IconButton, Table, TableBody, TableCell,TableRow, TextField} from "@mui/material";
import database from "../../server/firebase";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import theme from "../../theme/theme";
import { IconButtonError, IconButtonWarning } from "../../theme/style";

const OrderDetail = ({row}) => {
    const [edit,setEdit] = React.useState("");
    const [otp,setOTP] = React.useState(row.otp === null ? "-" : row.otp);
    const [BEP,setBEP] = React.useState(row.BEP === null ? "-" : row.BEP);
    const [CH1,setCH1] = React.useState(row.CH1 === null ? "-" : row.CH1);
    const [CH2,setCH2] = React.useState(row.CH2 === null ? "-" : row.CH2);
    const [CH3,setCH3] = React.useState(row.CH3 === null ? "-" : row.CH3);
    const [CH4,setCH4] = React.useState(row.CH4 === null ? "-" : row.CH4);
    const [CH5,setCH5] = React.useState(row.CH5 === null ? "-" : row.CH5);
    const [CH6,setCH6] = React.useState(row.CH6 === null ? "-" : row.CH6);
    const [CH7,setCH7] = React.useState(row.CH7 === null ? "-" : row.CH7);
    const [CH8,setCH8] = React.useState(row.CH8 === null ? "-" : row.CH8);
    const [TSID,setTSID] = React.useState(row.TSID === null ? "-" : row.TSID);
    const [date,setDate] = React.useState(row.date === null ? "-" : row.date);
    const [depotname,setDepotname] = React.useState(row.depotname === null ? "-" : row.depotname);
    const [netprofit,setNetprofit] = React.useState(row.netprofit === null ? "-" : row.netprofit);
    const [restpoint,setRestpoint] = React.useState(row.restpoint === null ? "-" : row.restpoint);
    const [route,setRoute] = React.useState(row.route === null ? "-" : row.route);
    const [status,setStatus] = React.useState(row.status === null ? "-" : row.status);
    const [sumvolume,setSumvolume] = React.useState(row.sumvolume === null ? "-" : row.sumvolume);
    const [sumwt,setSumwt] = React.useState(row.sumwt === null ? "-" : row.sumwt);
    const [time,setTime] = React.useState(row.time === null ? "-" : row.time);
    const [truck,setTruck] = React.useState(row.truck === null ? "-" : row.truck);
    const [way,setWay] = React.useState(row.way === null ? "-" : row.way);
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
            database.ref("operation").child(row.id).remove();
            setEdit("");
        } else if (result.isDenied) {
            Swal.fire('ยกเลิกลบข้อมูล', '', 'info');
            setEdit("");
        }
    });
    };
  
    const completeData = () => {
      database.ref("operation").child(row.id).update({
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
      });
      setEdit("");
    };
  
    return (
      <React.Fragment>
        {
          edit === row.id ?
          <TableRow>
            <TableCell sx={{ backgroundColor: theme.palette.grey[300],textAlign: "center" }}>{row.id}</TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.BEP}
                onChange={(e) => setBEP(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.CH1}
                onChange={(e) => setCH1(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.CH2}
                onChange={(e) => setCH2(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.CH3}
                onChange={(e) => setCH3(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.CH4}
                onChange={(e) => setCH4(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.CH5}
                onChange={(e) => setCH5(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.CH6}
                onChange={(e) => setCH6(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.CH7}
                onChange={(e) => setCH7(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.CH8}
                onChange={(e) => setCH8(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.TSID}
                onChange={(e) => setTSID(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.date}
                onChange={(e) => setDate(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.depotname}
                onChange={(e) => setDepotname(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.netprofit}
                onChange={(e) => setNetprofit(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.restpoint}
                onChange={(e) => setRestpoint(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.status}
                onChange={(e) => setStatus(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.sumvolume}
                onChange={(e) => setSumvolume(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.sumwt}
                onChange={(e) => setSumwt(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.time}
                onChange={(e) => setTime(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.truck}
                onChange={(e) => setTruck(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.ระยะทาง}
                onChange={(e) => setWay(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.route}
                onChange={(e) => setRoute(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell width={150} sx={{ textAlign: "center",position: "sticky", right: 0, backgroundColor: theme.palette.grey[300],}}>
              <IconButtonWarning color="success" sx={{ marginBottom:1 }} onClick={completeData}><CheckCircleRoundedIcon/></IconButtonWarning>
              <IconButtonError color="error" onClick={() => setEdit("")} ><CancelRoundedIcon/></IconButtonError>
            </TableCell>
          </TableRow>
          :
          <TableRow sx={{ backgroundColor: theme.palette.grey[200] }}>
            <TableCell sx={{ textAlign:"center",position: "sticky", left: 0, backgroundColor: theme.palette.grey[400],fontWeight: "bold" }}>{row.id}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.BEP}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.CH1}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.CH2}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.CH3}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.CH4}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.CH5}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.CH6}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.CH7}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.CH8}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.TSID}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.date}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.depotname}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.netprofit}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.restpoint}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.status}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.sumvolume}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.sumwt}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.time}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.truck}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.ระยะทาง}</TableCell>
            <TableCell sx={{ textAlign:"left" }}>{row.route}</TableCell>
            <TableCell width={150} sx={{ textAlign: "center",position: "sticky", right: 0, backgroundColor: theme.palette.grey[400], }}>
              <IconButtonWarning color="warning" onClick={() => setEdit(row.id)} sx={{ marginBottom:1 }}><EditNoteRoundedIcon/></IconButtonWarning>
              <IconButtonError color="error" onClick={deleteData}><DeleteRoundedIcon/></IconButtonError>
            </TableCell>
          </TableRow>
        }
      </React.Fragment>
    )
}

export default OrderDetail;
