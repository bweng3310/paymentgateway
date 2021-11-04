// import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import Product from '../components/Product'
import Creditcard from '../components/Creditcard'
import Taiwanpay from '../components/Taiwanpay'
import Eleven from '../components/Eleven'
import Bank from '../components/Bank'
// import { useState} from 'react'
const Confirmpagewrapper = styled.div `
display:flex;
align-items:center;
flex-direction:column;
`


const Paymentchoiesbox=styled.div `
display:flex;
flex-direction:row;
@media screen and (max-width: 760px) {
   display:flex;
   flex-direction:column;
}
`
const Nextstep= styled.div`
width:300px;
height:40px;
text-align:center;
background-color:#00BFFF;
border-radius:5px;
color:white;
line-height:40px;
margin:30px;
`
const Checkout2 = ({paytype, choosepayment, setchoosepayment}) => {
    
    console.log(choosepayment)
    function Pleasechoose(){
        if(paytype===""){
            window.alert("請選額付款方式")
        }
    };
    return<Confirmpagewrapper>
            {/* <Product detail={paytype}/> */}
            <div className="paytype">金額</div>
            <div>{paytype.data && paytype.data[0].amount}</div>
            <div className="paytype">付款方式</div>
            <Paymentchoiesbox>
                 {paytype.data && paytype.data[0].method.includes('creditcard') ?
                <Creditcard choosepayment={choosepayment} setchoosepayment={setchoosepayment}/>
                : <></>
                }
                {paytype.data && paytype.data[0].method.includes("bank") ?
                <Bank choosepayment={choosepayment} setchoosepayment={setchoosepayment}/>
                 
                
                : <></>
                }
                {paytype.data && paytype.data[0].method.includes("cstore") ?
                 
                <Eleven choosepayment={choosepayment} setchoosepayment={setchoosepayment}/>
                : <></>
                }
                {paytype.data && paytype.data[0].method.includes("Taiwanpay") ?
                 
                 <Taiwanpay choosepayment={choosepayment} setchoosepayment={setchoosepayment}/>
                 : <></>
                 }
                </Paymentchoiesbox> 
               
          

            <Link className="nextstep" to={{pathname:"/checkout", state:{choosepayment:{choosepayment} }}} onClick={Pleasechoose} ><Nextstep >確認並進行付款</Nextstep></Link>
            
           
    </Confirmpagewrapper>
}

export default Checkout2
