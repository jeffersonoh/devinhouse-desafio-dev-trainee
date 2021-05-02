import { Link, BrowserRouter as Router } from "react-router-dom";
import { NavbarStyle, HeaderMenu } from "./style";

function Navbar(){
  return (
    <>
      <HeaderMenu>
        <div className="left-nav">
          <NavbarStyle>
            <ul>
              <Router>
                <li>
                  <Link to="/">INICIO</Link>
                </li>
                <li>
                  <Link to="/agendamentos">AGENDAMENTOS</Link>
                </li>
                <li>
                  <Link to="/clientes">CLIENTES</Link>
                </li>
                <li>
                  <Link to="/exames">EXAMES</Link>
                </li>
              </Router>
            </ul>
          </NavbarStyle>
        </div>

        <div className="right-nav">
          <NavbarStyle>
            <ul>
              <Router>
                <li>
                  <Link to="#">DÚVIDAS</Link>
                </li>
              </Router>
            </ul>
          </NavbarStyle>
        </div>
      </HeaderMenu>
    </>
  )
};

export default Navbar; 