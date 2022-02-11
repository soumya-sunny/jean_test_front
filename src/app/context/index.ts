import React from "react";
import { Customer, Product } from "types";

// Currently filtering is implemented only for customers
// Introduce one more field searchType when 
// implementing Product filtering
interface IInvoiceContext {
    searchItem: Customer|null;
    setSearchItem:React.Dispatch<React.SetStateAction<any>>;
  }

const InvoiceContext = React.createContext<IInvoiceContext>({searchItem:null,setSearchItem:()=>{}});
export default InvoiceContext;