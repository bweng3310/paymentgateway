import React, { useState, useEffect } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import styled from "styled-components"
import "../index.css"
import NumberFormat from "react-number-format"
import { Link } from "react-router-dom";


const Wrapper = styled.form `
display:flex;
flex-direction:column;
width:280px;
justify-content:center;
margin:20px;
width:400px;
`
const Wrapper2 = styled.div `
display:flex;
flex-direction:row;
justify-content:space-between;
`
const Wrapper3 = styled.div `
display:flex;
flex-direction:column;
`
const Cardinput = styled(NumberFormat) `
margin-top:5px;
margin-bottom:10px;
height:40px;
border: solid 1px #00BFFF;
border-radius:5px;
&:focus {
	outline:none;

}
`
const Submit1 = styled.input `
width:300px;
height:40px;
text-align:center;
background-color:#00BFFF;
border-radius:5px;
color:white;
line-height:40px;
margin:30px;
border:none
`

const Nameinput = styled.input `
margin-top:5px;
margin-bottom:10px;
height:40px;
border: solid 1px #00BFFF;
background-color:white;
border-radius:5px;
&:focus {
	outline:none;
}
`
const Bottonbox = styled.div `

display:flex;
justify-content:center;
margin:10px 0px;

`
const Label = styled.label `
font-size:12px;
color:#696969

`





const MyCards = () => {
    // const{ register, handleSubmit} = useForm()

 
	const [data, setData] = useState({
		cvc: "",
		expiry: "",
		name: "",
		number: ""
	});

    useEffect(() => {
    
    }, [data])


	const handleInputChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value
		});
	};

	return (
		<div id="PaymentForm">

			<Cards
				className="card"
				cvc={data.cvc}
				expiry={data.expiry}
				focus={data.focus}
				name={data.name}
				number={data.number}
			/>

			<Wrapper>
				<Label>持有人姓名:</Label>
				<Nameinput
					displayType={'string'}
					onChange={handleInputChange}
					name="name"
				/>

				<Label>卡號:</Label>
                <Cardinput
					displayType={'number'}
					format="#### #### #### ####"
                    name='number'
					onChange={handleInputChange}
                    />
				<Wrapper2>
				<Wrapper3>
				<Label>有效期限:</Label>
                <Cardinput
					displayType={'number'}
					onChange={handleInputChange}
					type="text"
					name="expiry"
					format="##/##"
				/>
				</Wrapper3>
				<Wrapper3>
				<Label>檢查碼:</Label>
				<Cardinput
					displayType={'number'}
					onChange={handleInputChange}
					format="###"
					name="cvc"
				/>
				</Wrapper3>
				</Wrapper2>

				<Label>地址:</Label>
				<Nameinput
					displayType={'string'}
					onChange={handleInputChange}
					name="name"
				/>
				<Bottonbox>
					<Link to="/complete"><Submit1 type="submit" value="送出" /></Link>
				</Bottonbox>
                
                
				
			</Wrapper>

		</div>
	);
};

export default MyCards;