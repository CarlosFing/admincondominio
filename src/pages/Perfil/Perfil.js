import { useRef, useEffect, useState } from 'react';
import React, { Component } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ToolNavbar from '../../componentes/Toolbar';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                TuCondominio
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function Perfil() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const [Nombre, setNombre] = useState([])
    const [Correo, setCorreo] = useState([])
    const [Telefono, setTelefono] = useState([])

    useEffect(() => {
        console.log('useEffect')
        obtenerDatos()
    }, [])



    const obtenerDatos = async () => {
        const data = await fetch('http://localhost:9000/Perfil')
        const Nombre = await data.json()
        Nombre.map(item => (
            console.log(item.Nombre),
            console.log(item.Email),
            console.log(item.Telefono)
        ))
        //console.log(materia)
        setNombre(Nombre[0].Nombre)
        setCorreo(Nombre[0].Email)
        setTelefono(Nombre[0].Telefono)

    }

    const [name, setName] = React.useState(Nombre);
    const [email, setEmail] = React.useState(Correo);
    const [phone, setPhone] = React.useState(Telefono);
    const CargarNombre = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
        setEmail(event.target.value);
        setPhone(event.target.value);
 
    };



 //comentarios


    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex' }}>
                <ToolNavbar />
                <Container component="main" maxWidth="xs">
                    <CssBaseline />

                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Ajustes a Mi Perfil
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="Nombre"
                                        label="Nombre"
                                        name="Nombre"
                                        value={Nombre}
                                        onChange={CargarNombre}
                                        autoComplete="Nombre"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        value={Correo}
                                        onChange={CargarNombre}
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="Telefono"
                                        label="Telefono"
                                        id="Teledono"
                                        value={Telefono}
                                        onChange={CargarNombre}
                                        autoComplete="new-Telefono"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Guardar
                            </Button>

                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 5 }} />
                </Container>
            </Box>
        </ThemeProvider>
    );
}