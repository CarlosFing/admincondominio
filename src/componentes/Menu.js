import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';


export default function Menuizq() {
    const [openlist, setOpenlist] = React.useState(false);
    const [openlist1, setOpenlist1] = React.useState(false);
    const [openlist2, setOpenlist2] = React.useState(false);
    const [openlist3, setOpenlist3] = React.useState(false);

    const handleClick = () => {
        setOpenlist(!openlist);
    };
    const handleClick1 = () => {
        setOpenlist1(!openlist1);
    };
    const handleClick2 = () => {
        setOpenlist2(!openlist2);
    };
    const handleClick3 = () => {
        setOpenlist3(!openlist3);
    };
    return (
        <React.Fragment>
            <List component="nav">
                <ListItemButton onClick={handleClick3}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Perfil" />
                    {openlist3 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openlist3} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton component="a" href="/Perfil" sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Configurar perfil" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton component="a" href="/Condominio" sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="configurar Condominios" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton component="a" href="/Main" sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Inicio" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <Divider sx={{ my: 1 }} />
            </List>
            <List component="nav">
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Ingresos" />
                    {openlist ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openlist} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton component="a" href="/CapturaPago" sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Capturar Pagos" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton component="a" href="#" sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Reporte de Ingresos" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton component="a" href="#" sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Comprobante de Pagos" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <Divider sx={{ my: 1 }} />
            </List>
            <List component="nav">
                <ListItemButton onClick={handleClick1}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cuotas y Adeudos" />
                    {openlist1 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openlist1} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton component="a" href="/GenerarCargo" sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Generar Cargos" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton component="a" href="#" sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Editar Adeudos" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton component="a" href="/ControlCobranza" sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Control de Cobranza" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <Divider sx={{ my: 1 }} />
            </List>
            <List component="nav">
                <ListItemButton onClick={handleClick2}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Egresos" />
                    {openlist2 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openlist2} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton component="a" href="/CapturarEgreso" sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Caputurar Egresos" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton component="a" href="#" sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Control de Egresos" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton component="a" href="#" sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Reporte de Egresos" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <Divider sx={{ my: 1 }} />
            </List>

        </React.Fragment>
    );
}

