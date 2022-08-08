import { useContext } from "react";

import ProductContext from "../context/ProductContext";
import { MDBRow, MDBCol, MDBRipple, MDBSpinner } from "mdb-react-ui-kit";

import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { truncate } from "../utils/truncate";

export const formatter = new Intl.NumberFormat('en-US',{
        style: "currency",
        currency: "inr",
})
const Products = ({items}) => {
    const { searchTerm } = useContext(ProductContext);
    

    return(
        <>
        <SearchBar />
        <MDBRow style={{ minHeight: "100vh" }} id="products" className="mb-5 d-flex align-items-center justify-content-center">
            {items
                ?.filter((val) => {
                    if (searchTerm === "") {
                        return val;
                    } else if (val.itemOverview.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val;
                    }
                    // return console.log("mmm")
                    return false;
                })
                ?.map((x, i) => (
                    <MDBCol size="6" md="4" lg="3" key={i} className="card  shadow-3 m-2 g-3 d-flex align-items-center justify-content-center">
                        <MDBRipple
                            rippleColor="dark"
                            rippleTag="div"
                            className="bg-image hover-zoom"
                        >
                            <img style={{ width: "200px", padding: "20px" }} src={x?.asset?.imageURL} className="card-img-top  " alt="a product" />
                            <Link to={`product/${x?.id}`}>
                                <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                            </Link>
                        </MDBRipple>

                        <div  className="card-body me-auto">
                            <Link to={`product/${x?.id}`}>
                                <p id="cardTitle" className="card-title ">
                                    {truncate(x?.itemName, 25)}
                                </p>
                            </Link>
                            <strong>{formatter.format(x?.itemPrice)}</strong>
                        </div>
                        <div style={{width: "100%"}} className="card-footer">
                            <small className="text-muted">{x?.category} </small>
                        </div>
                    </MDBCol>
                ))}
        </MDBRow>
    </>
    )
};

export default Products;
