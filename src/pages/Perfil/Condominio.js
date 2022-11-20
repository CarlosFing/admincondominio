import * as React from 'react';
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
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


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

export default function Condominio() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex' }}>
                <ToolNavbar />
                <Container component="main" maxWidth="20">
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
                            Datos generales
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 6 }}>
                            <Box sx={{ display: 'flex' }}>
                                <Grid container xs={12} sm={6} spacing={3}>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="NombreRed"
                                            label="Nombre del Residencial o Condominio"
                                            name="NombreRed"
                                            autoComplete="NombreRed"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography component="h1" variant="h5">
                                            Dirección
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="Calle"
                                            label="Calle y Número"
                                            name="Calle"
                                            autoComplete="Calle"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="Colonia"
                                            label="Colonia"
                                            name="Colonia"
                                            autoComplete="Colonia"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="Ciudad"
                                            label="Ciudad"
                                            name="Ciudad"
                                            autoComplete="Ciudad"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="Cp"
                                            label="Codigo Postal"
                                            name="Cp"
                                            autoComplete="Cp"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="Pais"
                                            label="Pais"
                                            name="Pais"
                                            autoComplete="Pais"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="Estado"
                                            label="Estado"
                                            name="Estado"
                                            autoComplete="Estado"
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container xs={12} sm={6} spacing={3}>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="Compania"
                                            label="Compañia Administradora"
                                            name="Compania"
                                            autoComplete="Compania"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormControl>
                                            <FormLabel id="demo-radio-buttons-group-label">Tipo de Vivienda</FormLabel>
                                            <RadioGroup
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                defaultValue="female"
                                                name="radio-buttons-group"
                                            >
                                                <Grid container xs={12} sm={12}>
                                                    <Grid item xs={12} sm={6}>
                                                        <FormControlLabel value="Casa" control={<Radio />} label="Casa" />
                                                        <FormControlLabel value="Piso" control={<Radio />} label="Piso" />
                                                        <FormControlLabel value="Lote" control={<Radio />} label="Lote" />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <FormControlLabel value="Apartemento" control={<Radio />} label="Apartemento" />
                                                        <FormControlLabel value="Departamento" control={<Radio />} label="Departamento" />
                                                        <FormControlLabel value="Otros" control={<Radio />} label="Diferentes Tipos de Vivienda" />
                                                    </Grid>
                                                </Grid>
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="Otro"
                                            label="Otro"
                                            name="Otro"
                                            autoComplete="Otro"
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
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