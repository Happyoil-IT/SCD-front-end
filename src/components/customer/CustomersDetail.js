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

const CustomersDetail = ({row}) => {
    const [edit,setEdit] = React.useState("");
    const [customerid,setCustomerID] = React.useState(row.ID === null ? "-" : row.ID);
    const [address,setAddress] = React.useState(row.address === null ? "-" : row.address);
    const [creditlimit,setCreditLimit] = React.useState(row.creditlimit === null ? "-" : row.creditlimit);
    const [creditterm,setCreditTerm] = React.useState(row.creditterm === null ? "-" : row.creditterm);
    const [custag,setCustag] = React.useState(row.custag === null ? "-" : row.custag);
    const [debt,setDebt] = React.useState(row.debt === null ? "-" : row.debt);
    const [location,setLocation] = React.useState(row.location === null ? "-" : row.location);
    const [route,setRoute] = React.useState(row.route === null ? "-" : row.route);

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
            database.ref("primarydata/customersid").child(row.id).remove();
            setEdit("");
        } else if (result.isDenied) {
            Swal.fire('ยกเลิกลบข้อมูล', '', 'info');
            setEdit("");
        }
    });
    };
  
    const completeData = () => {
      database.ref("primarydata/customersid").child(row.id).update({
        ID : customerid,
        address : address,
        creditlimit : creditlimit,
        creditterm : creditterm,
        custag : custag,
        location : location,
        route : route,
      });
      setEdit("");
    };
  
    return (
      <React.Fragment>
        {
          edit === row.id ?
          <TableRow>
            <TableCell sx={{ backgroundColor: "lightgray" }}>{row.id}</TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.ID}
                onChange={(e) => setCustomerID(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.address}
                onChange={(e) => setAddress(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.creditlimit}
                onChange={(e) => setCreditLimit(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.creditterm}
                onChange={(e) => setCreditTerm(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.custag}
                onChange={(e) => setCustag(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue="-"
                onChange={(e) => setDebt(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.location}
                onChange={(e) => setLocation(e.target.value)}
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
            <TableCell width={150} sx={{ textAlign: "center",position: "sticky", right: 0, backgroundColor: "lightgray",}}>
              <IconButton color="success" sx={{ backgroundColor: theme.palette.primary.contrastText,marginBottom:1 }} onClick={completeData}><CheckCircleRoundedIcon/></IconButton>
              <IconButton color="error" onClick={() => setEdit("")} sx={{ backgroundColor: theme.palette.primary.contrastText }}><CancelRoundedIcon/></IconButton>
            </TableCell>
          </TableRow>
          :
          <TableRow sx={{ backgroundColor: "lightgray" }}>
            <TableCell sx={{ textAlign:"center",position: "sticky", left: 0, backgroundColor: "gray",color: theme.palette.primary.contrastText }}>{row.id}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.ID}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.address}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.creditlimit}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.creditterm}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.custag}</TableCell>
            <TableCell sx={{ textAlign:"center" }}> </TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.location}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.route}</TableCell>
            <TableCell width={150} sx={{ textAlign: "center",position: "sticky", right: 0, backgroundColor: "gray", }}>
              <IconButton color="warning" onClick={() => setEdit(row.id)} sx={{ backgroundColor: theme.palette.primary.contrastText,marginBottom:1 }}><EditNoteRoundedIcon/></IconButton>
              <IconButton color="error" onClick={deleteData} sx={{ backgroundColor: theme.palette.primary.contrastText }}><DeleteRoundedIcon/></IconButton>
            </TableCell>
          </TableRow>
        }
      </React.Fragment>
    )
}

export default CustomersDetail;
