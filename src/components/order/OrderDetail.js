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

const OrderDetail = ({row}) => {
    const [edit,setEdit] = React.useState("");
    const [address,setAddress] = React.useState(row.address === null ? "-" : row.address);
    const [billing,setBilling] = React.useState(row.billing === null ? "-" : row.billing);
    const [buyprice,setBuyprice] = React.useState(row.buyprice === null ? "-" : row.buyprice);
    const [customer,setCustomer] = React.useState(row.customer === null ? "-" : row.customer);
    const [date,setDate] = React.useState(row.date === null ? "-" : row.date);
    const [depot,setDepot] = React.useState(row.depot === null ? "-" : row.depot);
    const [location,setLocation] = React.useState(row.location === null ? "-" : row.location);
    const [orderseller,setOrderseller] = React.useState(row.orderseller === null ? "-" : row.orderseller);
    const [ordersellerID,setOrdersellerID] = React.useState(row.ordersellerID === null ? "-" : row.ordersellerID);
    const [orderstatus,setOrderstatus] = React.useState(row.orderstatus === null ? "-" : row.orderstatus);
    const [ordertag,setOrdertag] = React.useState(row.ordertag === null ? "-" : row.ordertag);
    const [piclink,setPiclink] = React.useState(row.piclink === null ? "-" : row.piclink);
    const [product,setProduct] = React.useState(row.product === null ? "-" : row.product);
    const [sellprice,setSellprice] = React.useState(row.sellprice === null ? "-" : row.sellprice);
    const [seq,setSeq] = React.useState(row.seq === null ? "-" : row.seq);
    const [time,setTime] = React.useState(row.time === null ? "-" : row.time);
    const [truck,setTruck] = React.useState(row.truck === null ? "-" : row.truck);
    const [volume,setVolume] = React.useState(row.volume === null ? "-" : row.volume);
    const [wt,setWt] = React.useState(row.wt === null ? "-" : row.wt);
    const [fixed,setFixed] = React.useState(row.กำหนดชำระ === null ? "-" : row.กำหนดชำระ);
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
            database.ref("order").child(row.id).remove();
            setEdit("");
        } else if (result.isDenied) {
            Swal.fire('ยกเลิกลบข้อมูล', '', 'info');
            setEdit("");
        }
    });
    };
  
    const completeData = () => {
      database.ref("order").child(row.id).update({
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
      });
      setEdit("");
    };
  
    return (
      <React.Fragment>
        {
          edit === row.id ?
          <TableRow>
            <TableCell sx={{ backgroundColor: theme.palette.grey[300],textAlign:"center" }}>{row.id}</TableCell>
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
                defaultValue={row.billing}
                onChange={(e) => setBilling(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.buyprice}
                onChange={(e) => setBuyprice(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.customer}
                onChange={(e) => setCustomer(e.target.value)}
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
                defaultValue={row.depot}
                onChange={(e) => setDepot(e.target.value)}
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
                defaultValue={row.orderseller}
                onChange={(e) => setOrderseller(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.ordersellerID}
                onChange={(e) => setOrdersellerID(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.orderstatus}
                onChange={(e) => setOrderstatus(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.ordertag}
                onChange={(e) => setOrdertag(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.piclink}
                onChange={(e) => setPiclink(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.product}
                onChange={(e) => setProduct(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.sellprice}
                onChange={(e) => setSellprice(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.seq}
                onChange={(e) => setSeq(e.target.value)}
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
                defaultValue={row.volume}
                onChange={(e) => setVolume(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.wt}
                onChange={(e) => setWt(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.กำหนดชำระ}
                onChange={(e) => setFixed(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell width={150} sx={{ textAlign: "center",position: "sticky", right: 0, backgroundColor: theme.palette.grey[300],}}>
              <IconButtonSuccess color="success" sx={{ marginBottom:1 }} onClick={completeData}><CheckCircleRoundedIcon/></IconButtonSuccess>
              <IconButtonError color="error" onClick={() => setEdit("")} ><CancelRoundedIcon/></IconButtonError>
            </TableCell>
          </TableRow>
          :
          <TableRow sx={{ backgroundColor: theme.palette.grey[200] }}>
            <TableCell sx={{ textAlign:"center",position: "sticky", left: 0, backgroundColor: theme.palette.grey[400],fontWeight: "bold" }}>{row.id}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.address}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.billing}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.buyprice}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.customer}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.date}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.depot}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.location}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.orderseller}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.ordersellerID}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.orderstatus}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.ordertag}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.piclink}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.product}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.sellprice}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.seq}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.time}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.truck}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.volume}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.wt}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.กำหนดชำระ}</TableCell>
            <TableCell width={150} sx={{ textAlign: "center",position: "sticky", right: 0, backgroundColor: theme.palette.grey[400], }}>
              <IconButtonWarning color="warning" onClick={() => setEdit(row.id)} sx={{ marginBottom:1 }}><EditNoteRoundedIcon/></IconButtonWarning>
              <IconButtonError color="error" onClick={deleteData} ><DeleteRoundedIcon/></IconButtonError>
            </TableCell>
          </TableRow>
        }
      </React.Fragment>
    )
}

export default OrderDetail;
