import React, { useEffect, useState } from "react";
import { Box, Button, Container, Grid, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import { database,auth } from "../../server/firebase";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import theme from "../../theme/theme";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");

    const SignIn = (e) => {
        signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            navigate("/dashboard");
            Swal.fire('ยินดีต้อนรับเข้าสู่ระบบ', '', 'success');
            console.log(userCredential);
         }).catch(( error ) => {
            Swal.fire('Email หรือ Pasword ไม่ถูกต้อง', '', 'error');
            console.log(error);
         })
    }

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center",marginTop: 13 }}>
        <Paper sx={{ backgroundColor: theme.palette.grey[300],borderRadius:5 }}>
        <Box height={50} sx={{ backgroundColor: theme.palette.error.dark,borderTopLeftRadius:10,borderTopRightRadius:10 }}/>
            <Box p={5} marginTop={-2} marginBottom={-3}>
                <Typography variant="h6" fontWeight="bold" color={ theme.palette.error.dark } gutterBottom>ยินดีต้อนรับเข้าสู่ระบบ</Typography>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Typography variant="h1" color={theme.palette.warning.dark} fontWeight="bold" gutterBottom>S</Typography>
                    <Typography variant="h1" color={theme.palette.error.dark} fontWeight="bold" gutterBottom>C</Typography>
                    <Typography variant="h1" color={theme.palette.info.dark} fontWeight="bold" gutterBottom>D</Typography>
                </Box>
                <Grid container spacing={2} marginTop={-5}>
                    <Grid item xs={12}>
                        <TextField 
                            label="Email"
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
                            label="Password"
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
                    <Grid item xs={6} textAlign="right">
                        <Button variant="contained" color="info" onClick={SignIn}>เข้าสู่ระบบ</Button>
                    </Grid>
                    <Grid item xs={6} textAlign="left">
                        <Button variant="contained" color="warning" component={Link} to={"/register"}>สมัครสมาชิก</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Box textAlign="right">
                            <Typography variant="subtitle1" color={theme.palette.error.dark} gutterBottom>ลืมรหัสผ่าน</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box height={50} sx={{ backgroundColor: theme.palette.warning.dark,borderBottomLeftRadius:10,borderBottomRightRadius:10 }}/>
        </Paper>
    </Container>
  );
}

export default Login;
