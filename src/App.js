import Products from "./components/Products.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import NavBar from "./components/NavBar.jsx";
import ProductsInCart from "./components/ProductsInCart.jsx";

import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "../src/App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CheckoutPage from "./components/Checkout.jsx";
import PaymentSuccess from "./components/PaymentSuccess.jsx";

function App() {
    const [items, setItems] = useState([])
    useEffect(() => {
        async function getAllProducts(){
            axios.request({
                url: `https://api-ap-south-1.hygraph.com/v2/cl6j7vhoe54xj01uq5g1qcgru/master` ,
                method: 'POST',
                data: {
                    query: `{items{
                        id
                        itemName
                        itemOverview
                        itemPrice
                        asset
                        category
                        createdAt
                      }}`
                },
                headers: {
                    'content-type': 'application/json',
                }
            }).then((res) => {
                setItems(res.data.data.items)
                console.log(res.data.data.items)
            })
        }
        getAllProducts()
    }, [])

    return (
        <MDBContainer style={{ paddingTop: "10px" }}>
            <MDBRow style={{ marginTop: "60px" }}>
                <Router>
                    <MDBCol>
                        <NavBar />
                    </MDBCol>
                    <Routes>
                        <Route exact path="/" element={<Products items = {items} />} />
                        <Route path="/product/:id" element={<ProductDetails />} />
                        <Route path="/productsincart" element={<ProductsInCart />} />
                        <Route path="/checkout/:id" element={<CheckoutPage />} />
                        <Route path='/order/:id/complete' element={<PaymentSuccess />} />
                    </Routes>
                </Router>
            </MDBRow>
        </MDBContainer>
    );
}

export default App;
