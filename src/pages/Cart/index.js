import React from "react";
import "./style.css";

function Cart(props) {
  const { cart, SetCart } = props;
  const getTotal = () => {
    let totl = 0;
    cart.forEach((element) => {
      totl = totl + element.qnt * element.price;
    });
    return totl;
  };
  const Delete = (arry, item) => {
    const OldCartDelete = [...arry];
    SetCart(
      OldCartDelete.filter(function (ele) {
        return ele.id !== item.id;
      })
    );
  };

  return (
    <div className="cart">
      <div id="w">
        <div id="page">
          <table id="cart">
            <thead>
              <tr>
                <th className="first"></th>
                <th className="second">Qty</th>
                <th className="third">Product</th>
                <th className="fourth">Total</th>
                <th className="fifth"></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr className="productitm">
                  <td className="ImageWraper">
                    <img src={item.imgPath} alt={"medicine"} />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={item.qnt}
                      min="0"
                      max="99"
                      className="qtyinput"
                    />
                  </td>
                  <td>{item.productName}</td>
                  <td>{item.price * item.qnt}.00</td>
                  <td>
                    <span className="remove" onClick={()=>Delete(cart, item)}>
                      <img src="https://i.imgur.com/h1ldGRr.png" alt="X" />
                    </span>
                  </td>
                </tr>
              ))}

              <tr className="totalprice">
                <td className="light">Total:</td>
                <td colspan="2">&nbsp;</td>
                <td colspan="2">
                  <span className="thick">₹ {getTotal()}.00</span>
                </td>
              </tr>

              <tr className="checkoutrow">
                <td colspan="5" className="checkout"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Cart;
