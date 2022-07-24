import React,{useState,useEffect} from 'react'
import { Card } from 'react-bootstrap'
import RatingComp from './RatingComp'
import {Link} from "react-router-dom"


const ProductComp = (props) => {
    
  return (
    <Card className="my-3 p-3 rounded">
        <Link to={`/product/${props.SingleProduct._id}`} >
            <Card.Img src={props.SingleProduct.image}/>
        </Link>
        <Card.Body>
            <Link to={`/product/${props.SingleProduct._id}`} >
                <Card.Title as="div">
                    <strong>
                        {props.SingleProduct.name}
                    </strong>
                </Card.Title>
            </Link>
            <Card.Text as="div">
               <div className="my-3">
               <RatingComp value={props.SingleProduct.rating} text={props.SingleProduct.numReviews} color={"#FFFF00"}/>
               </div>
            </Card.Text>
            <Card.Text as="h3"> 
            {props.SingleProduct.price}
            </Card.Text>
            
        </Card.Body>

    </Card>
  )
}

export default ProductComp