import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Complete from './pages/Complete'

import Checkout from './pages/Checkout'
import Notfound from './pages/Notfound'
import { useState, useEffect} from 'react'
import axios from 'axios'
// import Checkout2 from './pages/Checkout2'

import Checkout2 from './pages/Checkout2'


const App = () => {

    const [paytype, setpaytype] = useState("")
    const [choosepayment, setchoosepayment] =useState('')


    async function Data(){
        try
        {
          const data = await axios({
            method: 'get',
            url: "http://localhost:4000/HELLO/list",
            headers: {
              'Content-Type': 'application/json', 
            }
          })
          const set = setpaytype(data)
          
          
          console.log(set)
        }
        catch (error) 
        {
            alert("GET Error!!");    
        } 
       }

        useEffect(() => {
            Data()
        },[])
            
    

return(
    <BrowserRouter>
        <Switch>
            <Route path="/" render={() =><Checkout2 paytype={paytype} choosepayment={choosepayment} setchoosepayment={setchoosepayment} />} exact />
            <Route path="/checkout">
                { choosepayment !== "" ? <Checkout/> :<Redirect to="/"/>}
            </Route>
            <Route path="/complete" component={Complete}/>
            <Route component={Notfound}/>
        </Switch>
    </BrowserRouter>
    )
   
}

export default App