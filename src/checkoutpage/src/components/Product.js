import styled from "styled-components"

const Productwrapper = styled.div `
width:680px;
height:auto;
border: solid 1px #00BFFF;
border-radius:5px;
@media screen and (max-width: 760px) {
   width:400px
   
}
`
const Productflex = styled.div `
display:flex;
flex-direction:row;
justify-content:space-between;
`
const Price = styled.div `
display:flex;
flex-direction:row;
justify-content:right;
`
const Fortypercent= styled.div `
width:30%;
padding:20px;
display:flex;
flex-direction:column;
`
const Twentypercent = styled.div `
width: 20%;
padding:20px;
display:flex;
flex-direction:column;
`
const Summary = styled.h1 `
text-align:left;
width:680px;
@media screen and (max-width: 760px) {
   width:400px
   
}
`



const Product = ({detail}) =>{
    return(
    <>
    <Summary>商品總覽</Summary>
    <Productwrapper>
        <Productflex>
            <Twentypercent><div>商品名稱</div><div>{detail.data && detail.data[0].product}</div></Twentypercent>
            <Fortypercent><div>商品細節</div><div>{detail.data && detail.data[0].productDetail}</div></Fortypercent>
            <Fortypercent><div>商品價格</div><div></div></Fortypercent>
        </Productflex>
        <Productflex>
            <Twentypercent>投保時間</Twentypercent>
            <Fortypercent>時間細節</Fortypercent>
            <Fortypercent>天數</Fortypercent>
        </Productflex>
        <Price>
            <Fortypercent>總額:{detail.data && detail.data[0].amount}</Fortypercent>
        </Price>

        
    </Productwrapper>
    </>
    )
    
}
export default Product