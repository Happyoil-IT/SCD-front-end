import React, { useEffect, useState } from "react";
import { Box, Button, Container, Grid, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import { database,auth } from "../../server/firebase";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import theme from "../../theme/theme";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [passwordAgain,setPasswordAgain] = useState("");

    const SignUp = (e) => {
        email.split('@')[1] == "happysoft.com" ?
          password == passwordAgain ?
            withReactContent(Swal).fire({
              title: 'ต้องการสมัครสมาชิกใช่หรือไม่',
              icon : 'success',
              confirmButtonText: 'ตกลง',
              cancelButtonText: 'ยกเลิก',
              showCancelButton: true ,
            }).then((result) => {
              if (result.isConfirmed) {
                createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    Swal.fire('สมัครสมาชิกเรียบร้อย', '', 'success');
                    console.log(userCredential);
                })
              } else if (result.isDenied) {
                  Swal.fire('ยกเลิกการสมัครสมาชิก', '', 'error');
                  console.log(error);
              }
            })
          : Swal.fire('passwordไม่ตรงกัน', '', 'warning')
        : Swal.fire('กรุณากรอกอีเมลใหม่ โดยใช้ @happysoft.com', '', 'warning')
    }

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center",marginTop: 13 }}>
        <Paper sx={{ backgroundColor: theme.palette.grey[300],borderRadius:5 }}>
            <Box height={50} sx={{ backgroundColor: theme.palette.error.dark,borderTopLeftRadius:10,borderTopRightRadius:10 }}/>
            <Box p={5} marginTop={-3} marginBottom={-2}>
                <Box display="flex" justifyContent="center" alignItems="center" marginBottom={-3}>
                    <Typography variant="h1" color={theme.palette.warning.dark} fontWeight="bold" gutterBottom>S</Typography>
                    <Typography variant="h1" color={theme.palette.error.dark} fontWeight="bold" gutterBottom>C</Typography>
                    <Typography variant="h1" color={theme.palette.info.dark} fontWeight="bold" gutterBottom>D</Typography>
                </Box>
                <Typography variant="h6" fontWeight="bold" color={ theme.palette.error.dark } gutterBottom>สมัครสมาชิกผ่าน Email</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField 
                            label="กรอกอีเมลโดยใช้ @happysoft.com"
                            size="small"
                            type="email"
                            variant="filled"
                            fullWidth
                            defaultValue={email}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{ backgroundColor: theme.palette.primary.contrastText }}
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <EmailIcon />
                                  </InputAdornment>
                                ),
                              }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            label="กรอกรหัสผ่าน"
                            size="small"
                            type="password"
                            variant="filled"
                            fullWidth
                            defaultValue={password}
                            onChange={(e) => setPassword(e.target.value)}
                            sx={{ backgroundColor: theme.palette.primary.contrastText }}
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <PasswordIcon />
                                  </InputAdornment>
                                ),
                              }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            label="กรอกรหัสผ่านอีกครั้ง"
                            size="small"
                            type="password"
                            variant="filled"
                            fullWidth
                            defaultValue={passwordAgain}
                            onChange={(e) => setPasswordAgain(e.target.value)}
                            sx={{ backgroundColor: theme.palette.primary.contrastText }}
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <PasswordIcon />
                                  </InputAdornment>
                                ),
                              }}
                        />
                    </Grid>
                    <Grid item xs={6} textAlign="right">
                        <Button variant="contained" color="error" component={Link} to={"/"}>ยกเลิก</Button>
                    </Grid>
                    <Grid item xs={6} textAlign="left">
                        <Button variant="contained" color="success" onClick={SignUp}>สมัครสมาชิก</Button>
                    </Grid>
                </Grid>
            </Box>
            <Box height={50} sx={{ backgroundColor: theme.palette.warning.dark,borderBottomLeftRadius:10,borderBottomRightRadius:10 }}/>
        </Paper>
    </Container>
  );
}

export default Register;
