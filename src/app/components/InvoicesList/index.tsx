import { useApi } from 'api'
import { Invoice } from 'types'
import { useEffect, useCallback, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import InvoiceContext from 'app/context'

const InvoicesList = (): React.ReactElement => {
  const api = useApi()
const {searchItem}= useContext(InvoiceContext);

  const [invoicesList, setInvoicesList] = useState<Invoice[]>([])
  const [clonedInvoicesList, setClonedInvoicesList] = useState<Invoice[]>([])

  const fetchInvoices = useCallback(async () => {
    const { data } = await api.getInvoices()
    setInvoicesList(data.invoices)
    setClonedInvoicesList(data.invoices)
  }, [api])

  useEffect(() => {
    fetchInvoices()
  }, [fetchInvoices])

  // This logic can be replaced by lodash isEqual or 
  // any other object comparison methods
  // Currently filtering is implemented only for customers
  useEffect(() => {
   const filtered=clonedInvoicesList.filter((invoice)=>{
    const name=`${ invoice.customer?.first_name} ${invoice.customer?.last_name}`
    const searchedName=`${ searchItem?.first_name} ${searchItem?.last_name}`
    return name===searchedName;
  })
  setInvoicesList(filtered)
  }, [searchItem])

  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Customer</th>
          <th>Address</th>
          <th>Total</th>
          <th>Tax</th>
          <th>Finalized</th>
          <th>Paid</th>
          <th>Date</th>
          <th>Deadline</th>
        </tr>
      </thead>
      <tbody>
        {invoicesList.map((invoice) => (
          <tr key={invoice.id}>
            <Link to={`/invoice/${invoice.id}`}>{invoice.id}</Link>
            <td>
              {invoice.customer?.first_name} {invoice.customer?.last_name}
            </td>
            <td>
              {invoice.customer?.address}, {invoice.customer?.zip_code}{' '}
              {invoice.customer?.city}
            </td>
            <td>{invoice.total}</td>
            <td>{invoice.tax}</td>
            <td>{invoice.finalized ? 'Yes' : 'No'}</td>
            <td>{invoice.paid ? 'Yes' : 'No'}</td>
            <td>{invoice.date}</td>
            <td>{invoice.deadline}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default InvoicesList
