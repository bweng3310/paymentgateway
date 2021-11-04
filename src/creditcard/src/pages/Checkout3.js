import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Product from '../components/Product'
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
const Checkout3 = ({paytype}) => {
    return<Confirmpagewrapper>
            <Product/>
            
            
            <div className="paytype">付款方式</div>
           <Paymentchoiesbox>
                 <div>
                    <button>信用卡</button>
                </div>
                <div>
                     <button>超商繳費</button>
                </div>
               
           </Paymentchoiesbox>

            <Link className="nextstep" to={{pathname:"/checkout", state:{paytype:{paytype}}}}  ><Nextstep >確認並進行付款</Nextstep></Link>
            
           
    </Confirmpagewrapper>
}

export default Checkout3
