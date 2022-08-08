import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import ProductContext from "../context/ProductContext";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBCard, MDBCardTitle, MDBFooter, MDBCardBody } from "mdb-react-ui-kit";
import { formatter } from "./Products";
import { truncate } from "../utils/truncate";
import axios from "axios";

const ProductsInCart = () => {
    const { basket, setBasket, count, setCount } = useContext(ProductContext);
    const navigate = useNavigate()

    // console.log(basket)
    let aggregate = basket?.reduce((prevValue, currValue) => {
        // console.log(prevValue + currValue?.itemPrice)
        return prevValue + currValue?.itemPrice
    }, 0)
    const handleCheckout = async () => {
        await axios.get(`http://localhost:80/secret/${aggregate}`).then((res) => {
            console.log(res.data)
            navigate(`/checkout/${res.data.client_secret}?cart=true`)
        })
    }

    const deleteCartItem = (el, i) => {
        console.log(basket);
        console.log("i", i);
        const newCartList = basket.filter((x, index) => index !== i);
        // console.log("new", newCartList);asdsd
        setBasket([...newCartList]);
        setCount(count - 1);
    };

    // console.log(basket.map((x) => {}));

    return (
        <MDBContainer className="mb-5" style={{ backgroundColor: "", height: "100vh" }}>
            <Link to={"/"}><MDBIcon className="ms-3" fas icon="home"  /></Link>
            <MDBRow>
                <MDBCol md={12} lg={6}>
                    {basket.length === 0 ? (
                        <div>
                            <h4> You haven't added anything to the cart. </h4>
                        </div>
                    ) : (
                        basket.map((x, i) => (
                            <div key={i} style={{ display: "flex", flexDirection: "row", margin: "20px 0px", 
                            padding: "10px 0px",alignItems: "center", justifyContent: "space-between" ,borderBottom: "1px solid #000"}}>
                                <Link className="d-flex align-items-center" to = {`/product/${x?.id}`}>
                                    <img 
                                        style={{ maxWidth: "50px", maxHeight: "100px" }} 
                                        src={x?.asset?.imageURL} 
                                        alt="product" 
                                    />
                                    <div style={{
                                        display: "flex",
                                        flex: 1,
                                        flexDirection:"column",
                                        margin: "0px 20px", 
                                        padding: "0px", 
                                        fontSize: "25px", 
                                        color: "black"
                                    }}>
                                    <p className="m-0">{truncate(x?.itemName, 25)}</p>
                                    <strong className="m-0">{formatter.format(x?.itemPrice)}</strong>
                                </div>
                                
                                </Link>
                                    <span onClick={() => deleteCartItem(x, i)}><MDBIcon style={{cursor: "pointer"}} color="danger" far icon="trash-alt" /></span>
                                    
                            </div>
                        ))
                    )}
                </MDBCol>
                {
                    basket.length > 0 && <MDBCol className="mt-2" md={12} lg={6}>
                    <MDBCard>
                        <MDBCardTitle className="m-0">
                            <h3 className= {"m-0 text-center mt-2"}>Checkout</h3>
                        </MDBCardTitle>
                        <hr />
                        <MDBFooter style={{
                            alignItems: "center",
                            justifyContent: "space-between"
                        }} className="d-flex">
                                <small className="ms-2 fw-bold">Total : </small>
                                <strong style={{
                                    fontSize: "32px"
                                }} className="me-2 text-dark">{formatter.format(aggregate)}</strong>
                        </MDBFooter>
                    </MDBCard>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <MDBBtn onClick={handleCheckout} color="info" className="mt-3" type="primary">
                            Pay Now
                        </MDBBtn>
                    </div>
                    
                </MDBCol>
                }
                
            </MDBRow>

            
        </MDBContainer>
    );
};

export default ProductsInCart;
