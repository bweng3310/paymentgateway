
import axios from "axios";
import './App.css';
import Product from "./Product";

function App() {
  let paymentmethod

// async function paytype() {
//   try 
//   {
//       //取得數據庫http://localhost:3003/posts的數據
//       const Data = await axios.get("http://localhost:4000/HELLO/app"); 
//       const type = Data.data[0].type
//       console.log(Data.data[0].type);
//       paymentmethod=type
//   } 
//   catch (error) 
//   {
//       alert("GET Error!!");    
//   } 


// }

 async function postDetail(){
  try
  {
    const data = await axios({
      method: 'post',
      url: "http://localhost:4000/HELLO/list",
      headers: {
        'Content-Type': 'application/json',
        
      }, 
      data: {    
          "name":"Angel Wang",
          "id": "J445567545",
          "amount":10000,
          "method":["creditcard", "bank", "cstore"],
          "product": "疫苗險",
          "productDetail":"輕量型"
          } 
    });
    console.log(data)
  }
  catch (error) 
  {
      alert("GET Error!!");    
  } 
  window.location.href = "http://localhost:30"
 }
  return (
    <div className="App">
    <Product></Product>
        <div onClick={postDetail} >前往付款</div>
        {paymentmethod}
    </div>
  );
}

export default App;
