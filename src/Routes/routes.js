import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "../pages/Home"
import SignIn from "../pages/Login"
import Title from "../pages/Main"
import SignUp from "../pages/Inscribirse"
import Perfil from "../pages/Perfil/Perfil"
import Condominio from "../pages/Perfil/Condominio"
import CapturaPago from "../pages/Ingresos/CapturaPago"
import GenerarCargo from "../pages/Cuotas y Adeudos/GenerarCargo"
import ControlCobranza from "../pages/Cuotas y Adeudos/ControlCobranza"
import CapturarEgreso from "../pages/Egresos/CapturarEgreso"

export default function AppRouter() {
    return (
        <Router>
            <Switch>
             < Route exact path="/">
                   <Home />
             </Route>
             < Route exact path="/Login">
                   <SignIn />
             </Route>
             < Route exact path="/Main">
                    <Title />
             </Route>
             < Route exact path="/Inscribirse">
                    <SignUp />
             </Route>
             {/* Perfil */}
             < Route exact path="/Perfil">
                    <Perfil />
             </Route>
             < Route exact path="/Condominio">
                    <Condominio />
             </Route>
             {/* Ingresos */}
             < Route exact path="/CapturaPago">
                    <CapturaPago />
             </Route>
             {/* Cuotas y Adeudos*/}
             < Route exact path="/GenerarCargo">
                    <GenerarCargo />
             </Route>             
             < Route exact path="/ControlCobranza">
                    <ControlCobranza />
             </Route> 
              {/* Egresos */}
              < Route exact path="/CapturarEgreso">
                    <CapturarEgreso />
             </Route>
             
            </Switch>
        </Router>
    )

}