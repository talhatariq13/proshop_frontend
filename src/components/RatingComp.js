import React from 'react'
import { Col,Row } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
const RatingComp = (props) => {
  return (
    <div className="rating">
    <div style={{display:"flex",margin:"4px"}}>
    <div>
    <Rating name="read-only" value={props.value} readOnly />
    </div>
    <div style={{marginLeft:"10px"}}>
      <h3>({props.text})</h3>
    </div>
    <div>
      {/* <p>reviews</p> */}
    </div>
    </div>
    </div>
  )
}

export default RatingComp