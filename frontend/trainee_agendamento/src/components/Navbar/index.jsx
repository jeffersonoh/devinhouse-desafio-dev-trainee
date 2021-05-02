import { Link, useLocation } from "react-router-dom";
import { NavbarStyle, HeaderMenu } from "./style";

function Navbar(){
  const location = useLocation();
  let active = "active";

  console.log({location});

  return (
    <>
      <HeaderMenu>
        <div className="left-nav">
          <NavbarStyle>
            <ul>
              <li>
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>INICIO</Link>
              </li>
              <li>
                <Link to="/agendamentos" className={location.pathname === "/agendamentos" ? "active" : ""}>AGENDAMENTOS</Link>
              </li>
              <li>
                <Link to="/clientes" className={location.pathname === "/clientes" ? "active" : ""}>CLIENTES</Link>
              </li>
              <li>
                <Link to="/exames" className={location.pathname === "/exames" ? "active" : ""}>EXAMES</Link>
              </li>
            </ul>
          </NavbarStyle>
        </div>
      </HeaderMenu>
    </>
  )
};

export default Navbar; 