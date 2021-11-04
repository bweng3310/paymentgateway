import styled from "styled-components"

const Wrapper= styled.div `
display:flex;
align-items:center;
justify-content:center;
`
const Text = styled.h1 `
text-align:center;
margin-top:100px;

`
const Complete = () =>{
    return<Wrapper>
        <Text>Payment Complete</Text>
    </Wrapper>
}
 export default Complete