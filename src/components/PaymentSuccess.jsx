import axios from 'axios'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardFooter, MDBCardImage, MDBCardTitle, MDBCol, MDBContainer, MDBIcon, MDBRow } from 'mdb-react-ui-kit'
import React, { useContext, useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import ProductContext from '../context/ProductContext'
import { truncate } from '../utils/truncate'
import { formatter } from './Products'

const PaymentSuccess = () => {
    const {id} = useParams()
    const [product, setProduct] = useState()
    const [searchParams, setSearchParams] = useSearchParams()
    const { setBasket,  setCount} = useContext(ProductContext)
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
        if(id !== "cart"){
          async function getAllProducts(){
            axios.request({
                url: `https://api-ap-south-1.hygraph.com/v2/cl6j7vhoe54xj01uq5g1qcgru/master` ,
                method: 'POST',
                data: {
                    query,
                    variables
                },
                headers: {
                    'content-type': 'application/json',
                }
            }).then((res) => {
                setProduct(res.data.data.item)
                setBasket([])
                setCount(0)
                // console.log(res.data.data.items)
            })
        }
        getAllProducts()  
        }
        
        // setProduct(productsApi.find((el) => el.id === parseInt(id)));
    }, [id, setProduct]);

  return (
    <MDBContainer className="mb-5" style={{ backgroundColor: "", height: "auto", minHeight: "100vh" }}>
        <MDBRow  center>
        <MDBCol center md={12} lg={6}>
                    
                    <h3 className='text-success text-center mb-3'>Payment Successful</h3>
                <MDBCard style={{
                    display: "flex",
                    alignItems: "center"
                }}>
                    <MDBIcon animate='beat' size='5x' className='text-success text-center my-2' fas icon="check-circle" />
                    <MDBCardTitle className='text-primary'>
                        Order Details {`#${searchParams.get('payment_intent')}`}
                    </MDBCardTitle>
                    {
                        id !== "cart" && (<>
                            <MDBCardImage width={250} src={product?.asset?.imageURL} />
                            <MDBCardBody>
                                <p className='text-center'>{truncate(product?.itemOverview, 150)}</p>
                            </MDBCardBody>
                            <MDBCardFooter>
                                <h2>{formatter.format(product?.itemPrice)}</h2>
                            </MDBCardFooter>
                        </>)
                    }
                    
                </MDBCard>
                <MDBBtn href='/' className="mt-3"  type="submit">Back to home</MDBBtn>
        </MDBCol>
        </MDBRow>
    
    </MDBContainer>
  )
}

export default PaymentSuccess