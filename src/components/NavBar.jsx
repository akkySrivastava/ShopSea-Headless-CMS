import { useContext } from "react";
import { Link } from "react-router-dom";

import { MDBNavbar, MDBContainer, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBBadge } from "mdb-react-ui-kit";

import ProductContext from "../context/ProductContext";

const NavBar = () => {
    const { count } = useContext(ProductContext);

    //style={{ position: "fixed", top: "0", overflow: "hidden" }}

    return (
        <div>
            <MDBNavbar expand="lg" light bgColor="light" className="mb-3 fixed-top">
                <MDBContainer fluid>
                    <MDBNavbarNav left fullWidth={false} className="d-flex flex-row ">
                        <MDBNavbarItem className="me-3 me-lg-2">
                            <Link className="d-flex align-items-center" to={"/"}>
                                <h3 className="m-0">ShopSea</h3>
                            </Link>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav fullWidth={false} className="d-flex flex-row ">
                        <MDBNavbarItem className="me-3 me-lg-2">
                            <MDBIcon spin size="lg" fab icon="react" />
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right fullWidth={false} className="d-flex flex-row ">  
                        <MDBNavbarItem className="me-3 me-lg-3">
                            <Link to={"/productsincart"}>
                                <span>
                                    <MDBIcon size="lg" fas icon="shopping-cart" />
                                </span>
                                <MDBBadge pill color="danger">
                                    {count}
                                </MDBBadge>
                            </Link>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBContainer>
            </MDBNavbar>
        </div>
    );
};

export default NavBar;
