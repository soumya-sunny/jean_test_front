import { useContext, useEffect, useState } from 'react'

import { Customer, Product } from 'types'

import CustomerAutocomplete from 'app/components/CustomerAutocomplete'
import ProductAutocomplete from 'app/components/ProductAutocomplete'
import InvoiceContext from './context'

const GettingStarted = () => {
  const [customer, setCustomer] = useState<Customer>()
  const [product, setProduct] = useState<Product>()
const {setSearchItem}=useContext(InvoiceContext)

  useEffect(()=>{
    if(customer){
    setSearchItem(customer)
    }
  },[customer])

  /*TODO search list by product*/
  // useEffect(()=>{
  //   setSearchItem(product)
  // },[product])

  return (
    <>
     
      <div className="mb-3">
        <CustomerAutocomplete value={customer} onChange={setCustomer} />
      </div>
      <div className="mb-5">
        <ProductAutocomplete value={product} onChange={setProduct} />
      </div>
    </>
  )
}

export default GettingStarted
