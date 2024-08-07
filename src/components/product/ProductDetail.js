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

const ProductDetail = ({row}) => {
    const [edit,setEdit] = React.useState("");
    const [sg,setSG] = React.useState(row.SG === null ? "-" : row.SG);
    const [pdname,setPDName] = React.useState(row.pdname === null ? "-" : row.pdname);
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
            database.ref("primarydata/product").child(row.id).remove();
            setEdit("");
        } else if (result.isDenied) {
            Swal.fire('ยกเลิกลบข้อมูล', '', 'info');
            setEdit("");
        }
    });
    };
  
    const completeData = () => {
      database.ref("primarydata/product").child(row.id).update({
        SG : sg,
        pdname : pdname,
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
                defaultValue={row.SG}
                onChange={(e) => setSG(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.pdname}
                onChange={(e) => setPDName(e.target.value)}
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
            <TableCell sx={{ textAlign:"center" }}>{row.SG}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.pdname}</TableCell>
            <TableCell width={150} sx={{ textAlign: "center",position: "sticky", right: 0, backgroundColor: theme.palette.grey[400], }}>
              <IconButtonWarning color="warning" onClick={() => setEdit(row.id)} sx={{ marginRight:1 }}><EditNoteRoundedIcon/></IconButtonWarning>
              <IconButtonError color="error" onClick={deleteData} ><DeleteRoundedIcon/></IconButtonError>
            </TableCell>
          </TableRow>
        }
      </React.Fragment>
    )
}

export default ProductDetail;
