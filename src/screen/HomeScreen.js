import { unstable_isMuiElement } from "@mui/utils";
import React,{useState,useEffect} from "react";
import {Row,Col} from 'react-bootstrap'
import ProductComp from "../components/ProductComp";
import {useDispatch,useSelector} from 'react-redux'
import {listProducts} from "../actions/productActions"
import Loader from "../components/Loader"
const HomeScreen = ()=>{
    const dispatch=useDispatch()
    const productList=useSelector(state=>state.productList)
    const {error,loading,products}=productList
    console.log(error,loading,products)
    useEffect(()=>{
        dispatch(listProducts())
    },[])


    return(
        <div>
            <h1>Latest Products</h1>
            {loading?<h1><Loader/></h1>:error?<h1>{error}</h1>:
            <Row>
                {
                products?.map(product=>(
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    {/* <h1>{product.name}</h1> */}
                    <ProductComp SingleProduct={product}/>
                    </Col>
                ))

                }
            </Row>
}
        </div>
    )
}

export default HomeScreen