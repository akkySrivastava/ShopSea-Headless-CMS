import { useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProductContext from "../context/ProductContext";

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import axios from "axios";
import { formatter } from "./Products";

const ProductDetails = () => {
    const { product, setProduct, count, setCount, basket, setBasket } = useContext(ProductContext);


    const { id } = useParams();
    const navigate = useNavigate()

    const handleCheckout = async () => {
        await axios.get(`http://localhost:80/secret/${product?.itemPrice}`).then((res) => {
            console.log(res.data)
            navigate(`/checkout/${res.data.client_secret}`)
        })
    }

    const handleSubmit = () => {
        setCount(count + 1);
        setBasket([...basket, product]);
    };

    console.log("basket1", basket);
    const query = `query($id: ID){
                          item(where: {id: $id}) {
                            id
                            itemName
                            itemOverview
                            itemPrice
                            asset
                            category
                            createdAt
                        }
                    }
                    `;

    const variables = {
    id: id,
    };

    useEffect(() => {
        async function getAllProducts(){
            axios.request({
                url: `https://api-ap-south-1.hygraph.com/v2/cl6j7vhoe54xj01uq5g1qcgru/master` ,
                method: 'POST',
                data: {
                    query,
                    variables
                }
            }).then((res) => {
                setProduct(res.data.data.item)
                // console.log(res.data)
            })
        }
        getAllProducts()
        // setProduct(productsApi.find((el) => el.id === parseInt(id)));
    }, [id, setProduct]);

    // console.log("product", product);

    return (
        <MDBContainer id="productDetails" className="mb-5">
            <Link to={"/"}><MDBIcon  fas icon="home"  /></Link>
            <MDBRow className="">
                <MDBCol size="12" lg="4" id="firstCol">
                    <p>Product Details:</p>
                    <p>ID: {product?.id} </p>
                    <p style={{ color: "red" }}> #{product?.category}</p>
                    <hr />
                    <img style={{ maxWidth: "300px", maxHeight: "300px" }} src={product?.asset?.imageURL} alt="product" />
                    <hr />
                </MDBCol>
                <MDBCol size="12" lg="4" id="secondCol">
                    <h3 className="fw-400">{product?.itemName}</h3>
                    <strong style={{
                        fontSize: "32px",
                    }}>{formatter.format(product?.itemPrice)}</strong>
                </MDBCol>
                <MDBCol size="12" lg="4" id="thirdCol">
                    <p id="overview">{product?.itemOverview} </p>
                    <MDBBtn className="mx-2" tag="a" onClick={() => handleSubmit()} color="success" size="lg" outline>
                        <MDBIcon fas icon="shopping-cart" /> Add to Cart
                    </MDBBtn>
                    <MDBBtn onClick = {handleCheckout} className="mx-2 mt-2" tag="a" color="success" size="lg" outline>
                        Start Order Now
                    </MDBBtn>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default ProductDetails;
