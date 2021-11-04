import Product from '../components/Product'
// import { useState } from 'react'
import {Link} from 'react-router-dom'
import A from '../pictures/A.png'
import B from '../pictures/b.png'
import C from '../pictures/C.png'
import D from '../pictures/D.png'
import E from '../pictures/E.png'
import F from '../pictures/F.png'
import styled from 'styled-components'
import '../index.css'

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

const Productcomfirm = ({paytype, set}) =>{
    
    function Cards(){
        set("cards")
    }

    function Bank(){
         set("bank")
    }
    function Linepay(){
        set("Linepay")
        
    }
    function Pleasechoose(){
        if(paytype===""){
            window.alert("請選額付款方式")
        }
    };
    console.log(paytype)
    
    return<Confirmpagewrapper>
            <Product/>
            
            
            <div className="paytype">付款方式</div>
           <Paymentchoiesbox>
                 <div>
                    <img  src={paytype==="cards"?A:B} alt="A" onClick={Cards}></img>
                </div>
                <div>
                    <img  src={paytype==="bank"?D:C} alt="B" onClick={Bank}></img>
                </div>
                <div>
                    <img  src={paytype==="Linepay"?F:E} alt="C" onClick={Linepay}></img>
                </div>
           </Paymentchoiesbox>

            <Link className="nextstep" to={{pathname:"/checkout", state:{paytype:{paytype}}}} onClick={Pleasechoose} ><Nextstep >確認並進行付款</Nextstep></Link>
            
           
    </Confirmpagewrapper>
}
export default Productcomfirm