
import {PRODUCT_LIST_FAILURE,
        PRODUCT_LIST_SUCCESS,
        PRODUCT_LIST_REQUEST,
        PRODUCT_DETAILS_FAILURE,
        PRODUCT_DETAILS_SUCCESS,
        PRODUCT_DETAILS_REQUEST} 
from "../constants/productConstants"
export const ProductListReducers=(state={product:{}},action)=>{
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading:true,product:[]}
        case PRODUCT_LIST_SUCCESS:
            return {loading:false,products:action.payload}
        case PRODUCT_LIST_FAILURE:
            return {loading:false,errors:action.payload}
        default:
            return state
    }
}

export const ProductDetailsReducers=(state={product:{}},action)=>{
    switch(action.type){
        case PRODUCT_DETAILS_FAILURE:
            return {loading:true,product:[]}
        case PRODUCT_DETAILS_SUCCESS:
            return {loading:false,product:action.payload}
        case PRODUCT_DETAILS_FAILURE:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}

