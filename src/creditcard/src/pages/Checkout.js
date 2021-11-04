
import styled from "styled-components"
import MyCards from '../components/Mycard'
import "../index.css"
// import { Route, Switch } from 'react-router'
import { useLocation } from "react-router-dom"

import Taiwanpay from "../components/Taiwanpay"
import Cstorecheckout from "../components/Cstorecheckout"
import Bankcheckout from "../components/Bankcheckout"
// import Linepay from "../components/Linepay"



// const Flex = styled.div `
// display: flex;
// flex-direction: row;
// justify-content:space-between;
// margin-top:100px;
// width:600px
// `
const Flex2 = styled.div `
display: flex;
flex-direction: row;
justify-content:space-between;
margin:50px;
`

const Checkout = () => {
    let data = useLocation();
    let hi = Object.entries(data.state);
    let choosepayment = hi[0][1].choosepayment
    console.log(choosepayment)
    
    // const links = [
    // "https://www.transglobe.com.tw/",
    // "https://www.transglobe.com.tw/",
    // "https://www.transglobe.com.tw/" ]
 
 return (
    <div className="body">
             
        <Flex2>
        
        {choosepayment==="信用卡"?<MyCards/>:""}
        {choosepayment==="超商付款"?<Cstorecheckout/>:""}
        {choosepayment==="轉帳"?<Bankcheckout/>:""}
        {choosepayment==="台灣PAY"?<Taiwanpay/>:""}

        
        </Flex2>
 </div>

 )
        


 
}
export default Checkout;