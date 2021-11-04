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
padding:20px
`
const Twentypercent = styled.div `
width: 20%;
padding:20px;
`
const Summary = styled.h1 `
text-align:left;
width:680px;
@media screen and (max-width: 760px) {
   width:400px
   
}
`



const Product = () =>{
    return(
    <>
    <Summary>商品總覽</Summary>
    <Productwrapper>
        <Productflex>
            <Twentypercent>商品名稱</Twentypercent>
            <Fortypercent>商品細節</Fortypercent>
            <Fortypercent>商品價錢</Fortypercent>
        </Productflex>
        <Productflex>
            <Twentypercent>投保時間</Twentypercent>
            <Fortypercent>時間細節</Fortypercent>
            <Fortypercent>天數</Fortypercent>
        </Productflex>
        <Price>
            <Fortypercent>總額</Fortypercent>
        </Price>

        
    </Productwrapper>
    </>
    )
    
}
export default Product