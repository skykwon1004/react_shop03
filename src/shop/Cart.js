import { useState } from "react";

const Cart = ({ shopData, cart, setCart }) => {

    //const allPrice = Number(cart[0].price) + Number(cart[1].price);
    //cart에 있는 price가 문자열임 그래서 Number로 바꿔줌

    const allPrice = cart.reduce((current, next) => current + Number(next.price * next.num), 0);
    //javascript 배열 합계 구하는 메소드 reduce사용

    // cart배열을 통째로 수정함
    const cartModify = (id) => {
        console.log("변함 : ", id, cart)
        //id하고 같은 요소를 변경하고 그 요소가 포함된 새배열로 cart를 바꿔준다
        const newCart = cart.map(it => it.id === id ? { ...it, num: it.num + 1 } : it);
        setCart(newCart);
    }


    return (
        <>
            <h1>장바구니</h1>
            {
                cart.map(it => <li key={it.id}>
                    {it.id}
                    {it.name}
                    {it.desc}
                    {it.price}
                    {it.num}
                    <button onClick={() => cartModify(it.id)}>+</button>
                    <img src={it.img} alt="" />
                </li>)
            }
            <h2>
                합계 :
                {
                    allPrice
                }
            </h2>
        </>
    )
}

export default Cart;