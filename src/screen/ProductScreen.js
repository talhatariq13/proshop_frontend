import React,{useState,useEffect} from 'react'
import {Link,useParams} from 'react-router-dom'
import {Row,Col,Button,Image,ListGroup,Card} from "react-bootstrap"
import { DetailsProducts } from '../actions/productActions'
import {useDispatch,useSelector} from 'react-redux'

import RatingComp from '../components/RatingComp'
import axios from 'axios'
const ProductScreen = () => {
  const {id} = useParams()
  const dispatch=useDispatch()
  const productDetails=useSelector(state=>state.productDetails)
  const {error,loading,product}=productDetails
  
  

  useEffect(()=>{
  dispatch(DetailsProducts(id))}
  ,[])

  console.log("product:",product)

  
  return (
    // product?
    <div>
      <Link className='btn btn-light my-3' to='/'>Go Back</Link>
      <Row >
      <Col sm={12} md={6}>
      <Image src={product.image} fluid/>
      </Col>
      <Col sm={12} md={3}>
        <ListGroup>
          <ListGroup.Item>
            {product.name}
          </ListGroup.Item>
          <ListGroup.Item>
          Brand: {product.brand}
          </ListGroup.Item>
          <ListGroup.Item>
          <RatingComp value={product.rating} text={product.numReviews}/>
          </ListGroup.Item>
          <ListGroup.Item>
          <h3>${product.price}</h3>
          </ListGroup.Item>
          <ListGroup.Item>
          Description: {product.description}
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col sm={12} md={3}>
      <ListGroup>
      <ListGroup.Item>
      <h3>${product.price}</h3>
      </ListGroup.Item>
      <ListGroup.Item>
       <Col>status</Col>
       <Col>{product.countInStock>1?"In Stock":"Out of stock"}</Col>
      
      </ListGroup.Item>
      <ListGroup.Item >
        <Button style={{width:"100%"}}className='btn-block' type='Button' disabled={product.countInStock>0?false:true}>Add To Cart</Button>
      </ListGroup.Item>
      </ListGroup>
      </Col>
      </Row>
      </div>
      // ":"
    // <div>Product not found</div>
  )
}



export default ProductScreen