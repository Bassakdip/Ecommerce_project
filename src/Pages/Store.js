import React from 'react'
import AvailableProductItem from '../Components/product/AvailableProductItem'

const Store = (props) => {
  return (
    <AvailableProductItem getData={props.getData}/>
  )
}

export default Store
