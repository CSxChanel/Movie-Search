// import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
// import { navLinks } from "../Data/Data";

function NavBar() {
    const [changeColor, setChangColor] = useState(false);
    const changeBacColor = () => {
        if (window.scrollY > 10) {
            setChangColor(true);
        } else {
            setChangColor(false);
        }
    };
    useEffect(() => {
        changeBacColor();
        window.addEventListener("scroll", changeBacColor);
    });
    return (
        <div>
            <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
                <Container>
                    <Navbar.Brand href="/home" className="fs-3 fw-bold">
                        Project!
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto text-center">
                            {navLinks.map(link => {
                                return (
                                    <div className="nav-link" key={link.id}>
                                        <NavLink to={link.path} end>
                                            {link.text}
                                        </NavLink>
                                    </div>
                                );
                            })}
                        </Nav>
                        <div className="text-center">
                            <button className="btn btn-outline-danger rounded-2">
                                Join With Us
                            </button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
export default NavBar;