import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import InvoicesList from './components/InvoicesList'
import InvoiceShow from './components/InvoiceShow'

import GettingStarted from './GettingStarted'
import InvoiceContext from './context'
import { useState } from 'react'
import { Customer } from 'types'

function App() {
  const [searchItem, setSearchItem]=useState<Customer|null>(null)
  
  return (
    <div className="px-5">
      <InvoiceContext.Provider value={{searchItem, setSearchItem}}>
      <GettingStarted />
      <Router>
        <Switch>
          <Route path="/invoice/:id" component={InvoiceShow} />
          <Route path="/" component={InvoicesList} />
        </Switch>
      </Router>
      </InvoiceContext.Provider>
    </div>
  )
}

export default App
