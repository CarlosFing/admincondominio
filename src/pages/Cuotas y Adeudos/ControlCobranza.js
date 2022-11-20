import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../../componentes/Title';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import ToolNavbar from '../../componentes/Toolbar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

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

// Generate Order Data
function createData(id, Apartamento, Contacto, Adeudo, Marcar) {
    return {id, Apartamento, Contacto, Adeudo, Marcar };
}

const rows = [
    createData(
        0,
        'Calisto',
        'Elvis Presley',
        312.44,
    ),
    createData(
        1,
        'London tac',
        'Paul McCartney',
        866.99,
    ),
    createData(
        2,
        'Boston, MA',
        'Tom Scholz',
        100.81),
    createData(
        3,
        'Garys',
        'Michael Jackson',
        654.39,
    ),
    createData(
        4,
        'Long Branch, NJ',
        'Bruce Springsteen',
        212.79,
    ),
];

function preventDefault(event) {
    event.preventDefault();
}
export default function ControlCobranza() {
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
                            Control de Cobranza
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid item xs={12}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                    <Title>Cuentas por Pagar</Title>
                                    <Table size="small">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Apartamento</TableCell>
                                                <TableCell>Contacto</TableCell>
                                                <TableCell>Adeudo</TableCell>
                                                <TableCell>Marcar</TableCell>
                                               
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow key={row.id}>
                                                    <TableCell>{row.Apartamento}</TableCell>
                                                    <TableCell>{row.Contacto}</TableCell>
                                                    <TableCell>{row.Adeudo}</TableCell>
                                                    <TableCell>{row.Marcar}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                    <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                                        Ver mas pagos
                                    </Link>
                                </Paper>
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