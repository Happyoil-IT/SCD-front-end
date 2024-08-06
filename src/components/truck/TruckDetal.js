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
import { IconButtonError,IconButtonWarning,IconButtonSuccess } from "../../theme/style";

const TruckDetail = ({row}) => {
    const [edit,setEdit] = React.useState("");
    const [Cap1,setCap1] = React.useState(row.Cap1 === null ? "-" : row.Cap1);
    const [Cap2,setCap2] = React.useState(row.Cap2 === null ? "-" : row.Cap2);
    const [Cap3,setCap3] = React.useState(row.Cap3 === null ? "-" : row.Cap3);
    const [Cap4,setCap4] = React.useState(row.Cap4 === null ? "-" : row.Cap4);
    const [Cap5,setCap5] = React.useState(row.Cap5 === null ? "-" : row.Cap5);
    const [Cap6,setCap6] = React.useState(row.Cap6 === null ? "-" : row.Cap6);
    const [Cap7,setCap7] = React.useState(row.Cap7 === null ? "-" : row.Cap7);
    const [Cap8,setCap8] = React.useState(row.Cap8 === null ? "-" : row.Cap8);
    const [PD1,setPD1] = React.useState(row.PD1 === null ? "-" : row.PD1);
    const [PD2,setPD2] = React.useState(row.PD2 === null ? "-" : row.PD2);
    const [PD3,setPD3] = React.useState(row.PD3 === null ? "-" : row.PD3);
    const [PD4,setPD4] = React.useState(row.PD4 === null ? "-" : row.PD4);
    const [PD5,setPD5] = React.useState(row.PD5 === null ? "-" : row.PD5);
    const [PD6,setPD6] = React.useState(row.PD6 === null ? "-" : row.PD6);
    const [PD7,setPD7] = React.useState(row.PD7 === null ? "-" : row.PD7);
    const [PD8,setPD8] = React.useState(row.PD8 === null ? "-" : row.PD8);
    const [V1,setV1] = React.useState(row.V1 === null ? "-" : row.V1);
    const [V2,setV2] = React.useState(row.V2 === null ? "-" : row.V2);
    const [V3,setV3] = React.useState(row.V3 === null ? "-" : row.V3);
    const [V4,setV4] = React.useState(row.V4 === null ? "-" : row.V4);
    const [V5,setV5] = React.useState(row.V5 === null ? "-" : row.V5);
    const [V6,setV6] = React.useState(row.V6 === null ? "-" : row.V6);
    const [V7,setV7] = React.useState(row.V7 === null ? "-" : row.V7);
    const [V8,setV8] = React.useState(row.V8 === null ? "-" : row.V8);
    const [num1,setNum1] = React.useState(row.locationล่าสุด === null ? "-" : row.locationล่าสุด);
    const [num2,setNum2] = React.useState(row.จำนวนช่อง === null ? "-" : row.จำนวนช่อง);
    const [num3,setNum3] = React.useState(row.ทะเบียนหัว === null ? "-" : row.ทะเบียนหัว);
    const [num4,setNum4] = React.useState(row.ทะเบียนหาง === null ? "-" : row.ทะเบียนหาง);
    const [num5,setNum5] = React.useState(row.น้ำหนัก === null ? "-" : row.น้ำหนัก);
    const [num6,setNum6] = React.useState(row.ประกัน === null ? "-" : row.ประกัน);
    const [num7,setNum7] = React.useState(row.พขร === null ? "-" : row.พขร);
    const [num8,setNum8] = React.useState(row.พรบ === null ? "-" : row.พรบ);
    const [num9,setNum9] = React.useState(row.ภาษี === null ? "-" : row.ภาษี);
    const [num10,setNum10] = React.useState(row.สถานะรถ === null ? "-" : row.สถานะรถ);
    const [num11,setNum11] = React.useState(row.เรทน้ำมัน === null ? "-" : row.เรทน้ำมัน);
    const [num12,setNum12] = React.useState(row.เวลาlocation === null ? "-" : row.เวลาlocation);
    const [num13,setNum13] = React.useState(row.เวลาสถานะ === null ? "-" : row.เวลาสถานะ);
    const [num14,setNum14] = React.useState(row.แผนPM === null ? "-" : row.แผนPM);
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
        Cap1 : Cap1,
        Cap2 : Cap2,
        Cap3 : Cap3,
        Cap4 : Cap4,
        Cap5 : Cap5,
        Cap6 : Cap6,
        Cap7 : Cap7,
        Cap8 : Cap8,
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
                defaultValue={row.Cap1}
                onChange={(e) => setCap1(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.Cap2}
                onChange={(e) => setCap2(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.Cap3}
                onChange={(e) => setCap3(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.Cap4}
                onChange={(e) => setCap4(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.Cap5}
                onChange={(e) => setCap5(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.Cap6}
                onChange={(e) => setCap6(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.Cap7}
                onChange={(e) => setCap7(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.Cap8}
                onChange={(e) => setCap8(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.PD1}
                onChange={(e) => setPD1(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.PD2}
                onChange={(e) => setPD2(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.PD3}
                onChange={(e) => setPD3(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.PD4}
                onChange={(e) => setPD4(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.PD5}
                onChange={(e) => setPD5(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.PD6}
                onChange={(e) => setPD6(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.PD7}
                onChange={(e) => setPD7(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.PD8}
                onChange={(e) => setPD8(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.V1}
                onChange={(e) => setV1(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.V2}
                onChange={(e) => setV2(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.V3}
                onChange={(e) => setV3(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.V4}
                onChange={(e) => setV4(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.V5}
                onChange={(e) => setV5(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.V6}
                onChange={(e) => setV6(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.V7}
                onChange={(e) => setV7(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.V8}
                onChange={(e) => setV8(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.locationล่าสุด}
                onChange={(e) => setNum1(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.จำนวนช่อง}
                onChange={(e) => setNum2(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.ทะเบียนหัว}
                onChange={(e) => setNum3(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.ทะเบียนหาง}
                onChange={(e) => setNum4(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.น้ำหนัก}
                onChange={(e) => setNum5(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.ประกัน}
                onChange={(e) => setNum6(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.พขร}
                onChange={(e) => setNum7(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.พรบ}
                onChange={(e) => setNum8(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.ภาษี}
                onChange={(e) => setNum9(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.สถานะรถ}
                onChange={(e) => setNum10(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.เรทน้ำมัน}
                onChange={(e) => setNum11(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.เวลาlocation}
                onChange={(e) => setNum12(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.เวลาสถานะ}
                onChange={(e) => setNum13(e.target.value)}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField 
                size="small"
                defaultValue={row.แผนPM}
                onChange={(e) => setNum14(e.target.value)}
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
            <TableCell sx={{ textAlign:"center" }}>{row.Cap1}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.Cap2}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.Cap3}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.Cap4}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.Cap5}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.Cap6}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.Cap7}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.Cap8}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.PD1}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.PD2}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.PD3}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.PD4}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.PD5}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.PD6}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.PD7}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.PD8}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.V1}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.V2}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.V3}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.V4}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.V5}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.V6}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.V7}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.V8}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.locationล่าสุด}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.จำนวนช่อง}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.ทะเบียนหัว}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.ทะเบียนหาง}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.น้ำหนัก}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.ประกัน}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.พขร}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.พรบ}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.ภาษี}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.สถานะรถ}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.เรทน้ำมัน}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.เวลาlocation}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.เวลาสถานะ}</TableCell>
            <TableCell sx={{ textAlign:"center" }}>{row.แผนPM}</TableCell>        
            <TableCell width={150} sx={{ textAlign: "center",position: "sticky", right: 0, backgroundColor: theme.palette.grey[400], }}>
              <IconButtonWarning color="warning" onClick={() => setEdit(row.id)} sx={{ marginBottom:1 }}><EditNoteRoundedIcon/></IconButtonWarning>
              <IconButtonError color="error" onClick={deleteData} ><DeleteRoundedIcon/></IconButtonError>
            </TableCell>
          </TableRow>
        }
      </React.Fragment>
    )
}

export default TruckDetail;
