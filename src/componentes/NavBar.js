import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Navbar = ({brand}) => {
    return (
       
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        
        <Link to="/" class="navbar-brand">Tu Condominio</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
             
              <Link to="/" class="nav-link">Home <span class="sr-only"></span></Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/acercade">Acerca de</a>
            </li>
          </ul>
          <form className="form-inline my-0 my-lg-10" >
            <Button variant="outlined" size="small">
              Sign up
            </Button>
          </form>
        </div>
      </nav>       
        
        
    )
}

export default Navbar;
