import React, { useEffect, useState } from "react";
import { Box, Button, IconButton, Table, TableBody, TableCell,TableRow, TextField} from "@mui/material";
import { database } from "../../server/firebase";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import theme from "../../theme/theme";
import { IconButtonError, IconButtonSuccess, IconButtonWarning } from "../../theme/style";

const RespointDetail = ({row}) => {
    const [edit,setEdit] = React.useState("");
    const [restdetail,setRestDetail] = React.useState(row.restdetail === null ? "-" : row.restdetail);
    const [restlocation,setRestLocation] = React.useState(row.restlocation === null ? "-" : row.restlocation);
    const [restname,setRestName] = React.useState(row.restname === null ? "-" : row.restname);
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
            database.ref("primarydata/restpoint").child(row.id).remove();
            setEdit("");
        } else if (result.isDenied) {
            Swal.fire('ยกเลิกลบข้อมูล', '', 'info');
            setEdit("");
        }
    });
    };
  
    const completeData = () => {
      database.ref("primarydata/restpoint").child(row.id).update({
        restdetail : restdetail,
        restlocation : restlocation,
        restname : restname,
      });
      setEdit("");
    };
  
    return (
      <React.Fragment>
        {
          edit === row.id ?
          <TableRow>
            <TableCell sx={{ backgroundColor: theme.palette.grey[300] }}>{row.id}</TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.restdetail}
                onChange={(e) => setRestDetail(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.restlocation}
                onChange={(e) => setRestLocation(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.restname}
                onChange={(e) => setRestName(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell width={150} sx={{ textAlign: "center",position: "sticky", right: 0, backgroundColor: theme.palette.grey[300],}}>
              <IconButtonSuccess color="success" sx={{ marginRight:1 }} onClick={completeData}><CheckCircleRoundedIcon/></IconButtonSuccess>
              <IconButtonError color="error" onClick={() => setEdit("")} ><CancelRoundedIcon/></IconButtonError>
            </TableCell>
          </TableRow>
          :
          <TableRow sx={{ backgroundColor: theme.palette.grey[200] }}>
            <TableCell sx={{ textAlign:"center",position: "sticky", left: 0, backgroundColor: theme.palette.grey[400],fontWeight: "bold" }}>{row.id}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.restdetail}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.restlocation}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.restname}</TableCell>
            <TableCell width={150} sx={{ textAlign: "center",position: "sticky", right: 0, backgroundColor: theme.palette.grey[400], }}>
              <IconButtonWarning color="warning" onClick={() => setEdit(row.id)} sx={{ marginRight:1 }}><EditNoteRoundedIcon/></IconButtonWarning>
              <IconButtonError color="error" onClick={deleteData} ><DeleteRoundedIcon/></IconButtonError>
            </TableCell>
          </TableRow>
        }
      </React.Fragment>
    )
}

export default RespointDetail;
