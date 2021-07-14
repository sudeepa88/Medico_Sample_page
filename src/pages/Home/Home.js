import React, {useEffect , useState} from "react";
 import { product } from "./data.js";

const apiUrl = "http://localhost:5000"

function Home(props) {
  const { cart, SetCart } = props;
  const [data,setData] = useState(product)
  


  const handleCart = (item) => {
    const createNewCart = Object.assign(item, { qnt: 1 });
    SetCart([...cart, createNewCart]);
  };

  // useEffect(() => {
  //   fetch(apiUrl + "/api/product")
  //   .then((response) => {
  //     if (response.ok){
  //       return response.json();
  //     }
  //     throw response;
  //   })
  //   .then((data) => {
  //     console.log(data)
  //     setData(data);
  //   });
  // },[]);

  return (
    <div className="flex-container">
      {data.map((item) => (
        <div key={item.id} className="flex-item">
          <div className="imgWapper">
            <img className="img" alt="img" src={item.imgPath} />
          </div>
          <h1 className></h1>
          <h1 className="name">{item.productName}</h1>
          <h1 className="price">₹ {item.price}</h1>
          <button className="addtocart" onClick={() => handleCart(item)}>
            <div className="pretext">
               ADD TO CART
            </div>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
